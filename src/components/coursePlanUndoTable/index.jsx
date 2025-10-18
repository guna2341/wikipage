import React, { useEffect, useState } from 'react'
import { cn } from '@/components'
import { FileEdit } from '@/assets';
import useCourseMaterialStore from '@/store/faculty/courseMaterial';
import { Shimmer } from '../shimmer/shimmer';

export const CoursePlanUndoTable = ({
    data = [],
    courses = [],
    classNames
}) => {
    const { mappedCourses, courseHistory, getCourseHistory } = useCourseMaterialStore();
    const [currentTab, setCurrentTab] = useState(mappedCourses?.[0]?.course_code);
    const [loaders, setLoaders] = useState({});
    const [courseLoading, setCourseLoading] = useState(false);


    async function getContent(course_id) {
        if (!course_id.trim()) return;
        setCurrentTab(course_id);
        if (courseHistory?.[course_id]) return;
        setLoaders(prev => ({ ...prev, [course_id]: true }));
        await getCourseHistory(course_id);
        setLoaders(prev => ({ ...prev, [course_id]: false }));
    }

    const { getCourse } = useCourseMaterialStore();
    useEffect(() => { 
        async function getCourseData() {
            if (mappedCourses.length > 0) return;
            setCourseLoading(true);
            const response = await getCourse();
            setCourseLoading(false);
                setCurrentTab(response?.data?.[0]?.course_code)
            }
            getCourseData();
      

        async function checkContent() {
            if (!courseHistory?.[currentTab]) {
                await getCourseHistory(currentTab);
            };
        }
        checkContent();
    }, []);

    const isLoading = loaders?.[currentTab];

    return (
        <div className={cn('flex flex-col', classNames)}>
            {/* Tabs */}
            <div className='flex gap-4 w-full overflow-auto scrollbar-hide pt-5 px-8'>
                {courseLoading ? (
                    <>
                        {Array(5).fill("").map((_, i) => (
                          <Shimmer className="w-24 h-12 rounded-t-2xl" />
                        ))}
                    </>
                ) : (
                    mappedCourses?.map((course) => (
                        <div
                            key={course?.id}
                            className={cn(
                                'font-medium text-base leading-6 text-custom-1011 p-3 rounded-t-2xl cursor-pointer text-nowrap transition-colors duration-200',
                                { 'text-custom-600 bg-custom-500': currentTab === course?.course_code }
                            )}
                            onClick={() => getContent(course?.course_code)}
                        >
                            {course?.dept}:{course?.course_code}
                        </div>
                    ))
                )}
            </div>

                    
                

            {/* Table */}
            <div className='flex-1 flex flex-col overflow-hidden'>
                <table className='w-full border-t border-custom-1007 table-fixed'>
                    <thead>
                        <tr className='text-center border-y border-custom-1007'>
                            <th className='py-4 text-custom-1013 font-semibold text-base leading-6'>Change Content</th>
                            <th className='text-custom-1013 font-semibold text-base leading-6'>Faculty Name</th>
                            <th className='text-custom-1013 font-semibold text-base leading-6'>Last Time Changed</th>
                        </tr>
                    </thead>
                </table>

                <div className='overflow-auto flex-1 scrollbar-hide'>
                    {isLoading || currentTab == null ? (
                        <div className='flex flex-col'>
                            {Array(5).fill("").map(_ => (
                                <div className='py-4 px-4 border-t border-custom-1007'>
                                    <Shimmer className="h-7 w-full rounded-md" />
                                    </div>
                            ))}
                    </div>
                    ) : (
                        <table className='w-full table-fixed'>
                            <tbody>
                                {courseHistory?.[currentTab]?.length > 0 ? (
                                    courseHistory[currentTab].map((item, index) => (
                                        <tr key={item?.id} className='text-center border-t border-custom-1007'>
                                            <td className='flex items-center gap-2.5 pl-4 py-4 font-medium text-custom-1013 text-base leading-6'>
                                                <FileEdit />
                                                <span className='text-nowrap'>{item?.content}</span>
                                            </td>
                                            <td className='font-medium text-custom-1013 text-base leading-6'>
                                                {item?.faculty}
                                            </td>
                                            <td className='font-medium text-custom-1013 text-base leading-6'>
                                                {item?.lastUpdated}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="text-center py-6 text-custom-1012 text-base">
                                            No history found for this course.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};
