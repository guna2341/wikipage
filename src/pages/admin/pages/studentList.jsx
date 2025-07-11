import { StudentListTable } from '@/components'
import React, { useEffect } from 'react'
import { studentHeader } from '../utils'
import useAdminStore from '@/store/admin/admin';
import { useDebounce } from '@/hooks/useDebounce';
import { Pagination } from '@heroui/pagination';
import { addToast } from '@heroui/toast';

export const StudentList = () => {
  const getStudents = useAdminStore(state => state.getStudents);
  const [search, setSearch] = React.useState("");
  const debouncedSearch = useDebounce(search, 500);
  const students = useAdminStore(state => state.students);
  const searchStudents = useAdminStore(state => state.searchStudents);
  const [page, setPage] = React.useState(1);
  const totalStudents = useAdminStore(state => state.totalStudents);
  const loading = useAdminStore(state => state.studentLoading);

  const limit = 10;

  let data;
  let totalPages;

  if (debouncedSearch) {
    data = searchStudents;
    totalPages = 1;
  } else {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    data = students.slice(startIndex, endIndex);
    totalPages = Math.ceil(totalStudents / limit);
  }

  function handleSearch(e) {
    setSearch(e);
  }

  const handleToast = (title, variant) => {
    addToast({
      title,
      color: variant
    })
  };

  useEffect(() => {
    if (debouncedSearch) {
      setPage(1);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    async function fetchStudents() {
      const response = await getStudents(debouncedSearch, page, limit);
      if (!response?.state) {
        handleToast(response?.message || 'Failed to fetch students', "danger");
      }
    }
    fetchStudents();
  }, [debouncedSearch, page, getStudents]);

  return (
    <div className='flex flex-col gap-4 p-7 h-[calc(100%-3rem)] overflow-hidden'>
      <p className='font-semibold leading-6 text-lg'>
        Current Regulation
      </p>
      <div className='bg-white border border-custom-100 rounded-2xl h-full overflow-hidden'>
        <StudentListTable
          isedit
          students={data}
          header={studentHeader}
          search={search}
          handleSearch={handleSearch}
          loading={loading}
        />
      </div>
      <div className='flex justify-between'>
        <span>0 out of {totalStudents} selected</span>
        <Pagination
          isCompact
          showControls
          page={page}
          total={totalPages}
          onChange={setPage}
          isDisabled={loading}
        />
      </div>
    </div>
  )
};