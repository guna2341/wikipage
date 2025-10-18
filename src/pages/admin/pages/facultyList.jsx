import { StudentListTable } from '@/components';
import React, { useEffect } from 'react';
import { Pagination } from '@heroui/pagination'; // Make sure to import Pagination
import { facultyHeader } from '../utils';
import useAdminRegulationStore from '@/store/admin/regulation';
import { useNavigate } from 'react-router-dom';

export const FacultyList = () => {
  const {
    faculties,
    facultyCurrentPage,
    facultyTotalPages,
    isFacultyLoading,
    fetchFaculties,
    setFacultyCurrentPage,
  } = useAdminRegulationStore();

  const [searchText, setSearchText] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchCurrentPage, setSearchCurrentPage] = React.useState(1);
  const [total, setTotal] = React.useState(1);
  const nav = useNavigate();
  // Items per page for search pagination
  const ITEMS_PER_PAGE = 10; // Adjust this based on your needs

  React.useEffect(() => {
    const lower = searchText?.toLowerCase();
    const filtered = faculties?.filter((s) =>
      s?.name?.toLowerCase().includes(lower) ||
      s?.register?.toLowerCase().includes(lower) ||
      s?.email?.toLowerCase().includes(lower) ||
      s?.dept?.toLowerCase().includes(lower)
    );
    setFilteredData(filtered);
    setTotal(Math.ceil(filtered?.length / 10));
    // Reset search pagination to first page when search changes
    setSearchCurrentPage(1);
  }, [searchText, faculties]);

  useEffect(() => {
    fetchFaculties(facultyCurrentPage);
  }, [facultyCurrentPage, fetchFaculties]);

  const handlePageChange = (page) => {
    setFacultyCurrentPage(page);
  };

  const handleSearchPageChange = (page) => {
    setSearchCurrentPage(page);
  };

  // Calculate pagination for search results
  const isSearchActive = searchText.trim() !== '';
  const totalSearchResults = filteredData?.length || 0;
  const totalSearchPages = Math.ceil(totalSearchResults / ITEMS_PER_PAGE);

  // Get paginated search results
  const getPaginatedSearchData = () => {
    if (!isSearchActive) return filteredData;

    const startIndex = (searchCurrentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredData?.slice(startIndex, endIndex) || [];
  };

  const displayData = isSearchActive ? getPaginatedSearchData() : filteredData;
  console.log(filteredData.length)
  return (
    <div className='flex flex-col gap-4 p-7 h-[calc(100%-3rem)] overflow-auto scrollbar-hide'>
      <p className='font-semibold leading-6 text-lg'>
        Current Regulation
      </p>
      <div className='bg-white border border-custom-100 rounded-2xl h-full overflow-hidden'>

          <StudentListTable
            isedit
              faculty
              isLoading={isFacultyLoading}
            data={displayData}
            header={facultyHeader}
            searchText={searchText}
            view={s => nav(`../facultyDetails/${s.id}`)}
            setSearchText={setSearchText}
          />
      </div>

      {/* Pagination Logic */}
      {isSearchActive ? (
        // Search Pagination
        totalSearchPages > 1 && (
          <div className="flex justify-center mt-4">
            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-gray-600">
                Showing {Math.min((searchCurrentPage - 1) * ITEMS_PER_PAGE + 1, totalSearchResults)} - {Math.min(searchCurrentPage * ITEMS_PER_PAGE, totalSearchResults)} of {totalSearchResults} search results
              </p>
              <Pagination
                total={totalSearchPages}
                page={searchCurrentPage}
                onChange={handleSearchPageChange}
                isDisabled={isFacultyLoading}
                showControls
                showShadow
                color="secondary"
                size="md"
              />
            </div>
          </div>
        )
      ) : (
        // Original Server Pagination
        facultyTotalPages > 1 && (
          <div className="flex justify-center mt-4">
            <Pagination
              total={facultyTotalPages}
              page={facultyCurrentPage}
              onChange={handlePageChange}
              isDisabled={isFacultyLoading}
              showControls
              showShadow
              color="primary"
              size="md"
            />
          </div>
        )
      )}
    </div>
  );
};