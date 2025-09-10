import { AdminSyllabusTable, ButtonComponent, cn, StudentListTable } from '@/components';
import { Select, SelectItem } from '@heroui/select';
import { Pagination } from '@heroui/pagination';
import React, { useEffect, useMemo } from 'react'
import { courseTable, studentHeader, facultyHeader } from '../utils';
import { useParams } from 'react-router-dom';
import { CourseStore } from '@/store/admin/course';

export const AdminRegulationList = () => {
  const params = useParams();
  console.log(params);

  const [currentTab, setCurrentTab] = React.useState(1);

  // Get data and functions from Zustand store
  const {
    students,
    faculties,
    loading,
    studentsPagination,
    facultiesPagination,
    getStudents,
    getFaculties,
    clearError,
    setStudentsPage,
    setFacultiesPage,
  } = CourseStore();

  function semester(sem) {
    switch (sem) {
      case "S1":
        return 1;
      case "S2":
        return 2;
      case "S3":
        return 3;
      case "S4":
        return 4;
      case "S5":
        return 5;
      case "S6":
        return 6;
      case "S7":
        return 7;
      case "S8":
        return 8; 
    }
  }

  const { sem, course, regulation } = params;
  const ITEMS_PER_PAGE = 10;

  const fetchData = async (page = 1, limit = 10, type = 'both') => {
    if (sem && course) {
      clearError();

      const apiParams = {
        sem: semester(sem),
        course: course,
        page: page,
        limit: limit,
        sortOrder: 'asc'
      };

      try {
        if (type === 'both' || type === 'students') {
          await getStudents(apiParams);
        }
        if (type === 'both' || type === 'faculties') {
          await getFaculties(apiParams);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
    fetchData(1, ITEMS_PER_PAGE, 'both');
  }, [sem, course, regulation]);

  // Handle page change for students
  const handleStudentPageChange = async (page) => {
    setStudentsPage(page);
    await fetchData(page, ITEMS_PER_PAGE, 'students');
  };

  // Handle page change for faculties
  const handleFacultyPageChange = async (page) => {
    setFacultiesPage(page);
    await fetchData(page, ITEMS_PER_PAGE, 'faculties');
  };

  // Handle refresh functionality
  const handleRefresh = async () => {
    if (sem && course) {
      if (currentTab === 1) {
        await fetchData(studentsPagination.currentPage, ITEMS_PER_PAGE, 'students');
      } else if (currentTab === 2) {
        await fetchData(facultiesPagination.currentPage, ITEMS_PER_PAGE, 'faculties');
      }
    }
  };

  console.log('Students data:', students);
  console.log('Students length:', students?.length);
  console.log('Students pagination:', studentsPagination);
  console.log('Faculties pagination:', facultiesPagination);

  // FIXED: Students table with pagination - key fixes applied
  const StudentsTableWithPagination = useMemo(() => {
    console.log('Rendering StudentsTableWithPagination:', {
      studentsLength: students?.length || 0,
      loading,
      currentTab,
      studentsPagination
    });

    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 relative">
          {/* Loading overlay */}
          {loading && currentTab === 1 && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-custom-600 mx-auto mb-2"></div>
                <p>Loading students...</p>
              </div>
            </div>
          )}

          {/* Show empty state only when not loading and no data */}
          {!loading && (!students || students.length === 0) ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">📚</div>
                <p className="text-lg font-medium">No Students Found</p>
                <p className="text-sm">No students are enrolled for {course} Semester {sem}</p>
              </div>
            </div>
          ) : (
            students && students.length > 0 && (
              
              <div className={cn('',{
                "h-[calc(100%-10rem)]" : students.length >= 10,
                "h-[calc(100%-6rem)]": students.length == 9,
                "h-[calc(100%-3rem)]" : students.length == 8,
                "h-full" : students.length <= 7
              })}>
                <StudentListTable
                  iseditBtn
                  data={students}
                  header={studentHeader}
                />
                </div>
            )
          )}
        </div>

      
      </div>
    );
  }, [students, studentsPagination, loading, currentTab, course, sem]);

  const FacultiesTableWithPagination = useMemo(() => {
    console.log('Rendering FacultiesTableWithPagination:', {
      facultiesLength: faculties?.length || 0,
      loading,
      currentTab,
      facultiesPagination
    });

    return (
      <div className="h-full flex flex-col">
        <div className="flex-1 relative">
          {/* Loading overlay */}
          {loading && currentTab === 2 && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-custom-600 mx-auto mb-2"></div>
                <p>Loading faculties...</p>
              </div>
            </div>
          )}

          {/* Show empty state only when not loading and no data */}
          {!loading && (!faculties || faculties.length === 0) ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <p className="text-lg font-medium">No Faculties Found</p>
                <p className="text-sm">No faculties are assigned to {course} Semester {sem}</p>
              </div>
            </div>
          ) : (
            /* Show table when we have data */
            faculties && faculties.length > 0 && (
                <div className="h-[calc(100%-10rem)]">
                <StudentListTable
                  iseditBtn={true}
                  data={faculties}
                  header={facultyHeader}
                />
              </div>
            )
          )}
        </div>

      
      </div>
    );
  }, [faculties, facultiesPagination, loading, currentTab, course, sem]);

  const list = [
    {
      id: 1,
      list: `Student List`,
      component: StudentsTableWithPagination
    },
    {
      id: 2,
      list: `Faculty List`,
      component: FacultiesTableWithPagination
    },
    {
      id: 3,
      list: "Course Coordinator List",
      component: (
        <AdminSyllabusTable
          header={"B.E. Computer Science And Engineering"}
          courses={courseTable}
          minimun_credits={'22.0'}
        />
      )
    }
  ];

  // FIXED: Added null checks for pagination objects
  const showInitialLoading = loading &&
    (!students || students.length === 0) &&
    (!faculties || faculties.length === 0) &&
    (!studentsPagination || studentsPagination?.currentPage === 1) &&
    (!facultiesPagination || facultiesPagination?.currentPage === 1);

  return (
    <div className='h-full p-7 pb-0 pt-5 overflow-auto scrollbar-hide'>
      <div className="flex justify-between items-center pb-4">
        <p className='font-semibold leading-6 text-lg'>
          Create New Course {sem && course && `- ${course} Sem ${sem}`}
        </p>
      </div>

      {showInitialLoading ? (
        <div className="h-[calc(100%-4.5rem)] bg-white rounded-2xl border border-custom-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-600 mx-auto mb-4"></div>
            <p className="text-lg font-medium">Loading course data...</p>
            <p className="text-sm text-gray-600 mt-1">
              Fetching students and faculties for {course} Semester {sem}
            </p>
          </div>
        </div>
      ) : (
        <div className={cn('h-[calc(100%-4.5rem)] bg-white rounded-2xl border border-custom-100 overflow-hidden', {
          'h-full max-h-full min-h-[calc(100%+10rem)]': currentTab == 3
        })}>
          <div className='flex gap-4 px-5 pt-5 border-b border-custom-100'>
            {list.map(li => (
              <div
                key={li.id}
                className={cn(
                  'font-medium text-base leading-6 text-custom-1011 p-3 rounded-t-2xl cursor-pointer text-nowrap ',
                  { 'text-custom-600 bg-custom-500': currentTab === li.id }
                )}
                onClick={() => setCurrentTab(li.id)}
              >
                {li.list}
              </div>
            ))}
          </div>

          <div className="flex flex-col h-[calc(100%-4.5rem)]">
            {/* Table Content */}
            <div className="flex-1">
              {list.map((li, index) => (
                <div
                  className={cn('h-full w-full', {
                    'hidden': currentTab != li.id
                  })}
                  key={index}
                >
                  {li.component}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className='flex items-center justify-between'>
        <Pagination
          total={currentTab === 1 ? (studentsPagination?.totalPages || 1) : (facultiesPagination?.totalPages || 1)}
          page={currentTab === 1 ? (studentsPagination?.currentPage || 1) : (facultiesPagination?.currentPage || 1)}
          onChange={currentTab === 1 ? handleStudentPageChange : handleFacultyPageChange}
          showControls
          showShadow
          color="primary"
          size="sm"
          isDisabled={loading}
        />
        <div className='flex gap-4 justify-end py-3'>
          <ButtonComponent
            className={'bg-white border border-custom-100 text-black'}
          >
            Cancel
          </ButtonComponent>
          <ButtonComponent>
            Save
          </ButtonComponent>
        </div>
      </div>
    </div>
  )
}