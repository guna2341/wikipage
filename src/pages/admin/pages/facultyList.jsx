import { StudentListTable } from '@/components'
import React from 'react'
import { facultyHeader } from '../utils'
import useAdminStore from '@/store/admin/admin';
import { useDebounce } from '@/hooks/useDebounce';
import { Pagination } from '@heroui/pagination';
import { addToast } from '@heroui/toast';

export const FacultyList = () => {
  const [page, setPage] = React.useState(1);
  const getFaculty = useAdminStore(state => state.getFaculty);
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 500);
  const faculties = useAdminStore(state => state.faculties);
  const searchFaculty = useAdminStore(state => state.searchFaculty);
  const totalFaculties = useAdminStore(state => state.totalFaculties);
  const facultyLoading = useAdminStore(state => state.facultyLoading);

  const limit = 10;

  let totalPages;
  let data;

  if (debouncedSearch) {
    data = searchFaculty;
    totalPages = 1;
  } else {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    data = faculties.slice(startIndex, endIndex);
    totalPages = Math.ceil(totalFaculties / limit) || 1;
  }

  function handleSearch(searchValue) {
    setSearch(searchValue);
    if (searchValue) {
      setPage(1);
    }
  }

  const handleToast = (title, variant) => {
    addToast({
      title,
      color: variant
    })
  };

  React.useEffect(() => {
    async function fetchFaculty() {
      const response = await getFaculty(debouncedSearch, page, limit);
      if (!response?.state) {
        handleToast(response?.message || 'Failed to fetch students', "danger");
      }
    }
    fetchFaculty();
  }, [debouncedSearch, page, getFaculty]);


  return (
    <div className='flex flex-col gap-4 p-7 h-[calc(100%-3rem)] overflow-auto scrollbar-hide'>
      <p className='font-semibold leading-6 text-lg'>
        Faculty List
      </p>

      <div className='bg-white border border-custom-100 rounded-2xl h-full overflow-hidden'>
        <StudentListTable
          isedit
          students={data}
          header={facultyHeader}
          loading={facultyLoading}
          search={search}
          handleSearch={handleSearch}
          role="faculty"
        />
      </div>

      <div className='flex justify-between'>
        <span>0 out of {totalFaculties} selected</span>
        <Pagination
          isCompact
          showControls
          page={page}
          total={totalPages}
          onChange={setPage}
          isDisabled={facultyLoading}
        />
      </div>
    </div>
  )
}