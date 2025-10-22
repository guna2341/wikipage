import { CourseBody, CourseHeader, CoursePlanIllustration, CourseTable } from '@/components'
import { coursePlanList } from '@/pages/faculty/utils'
import useCourseMaterialStore from '@/store/faculty/courseMaterial'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const CoursePlanOverview = ({
    handleEdit,
    showEdit = true,
    isEdit = false,
    course
}) => {

    console.log("course:",course)

    const params = useParams();
    const getCourse = useCourseMaterialStore(e => e.getCourseMaterial);
    const [loading, setLoading] = useState({});
    const [courseMaterial, setCourseMaterial] = useState([]);

    useEffect(() => {
        if (!params?.courseId) return; 

        let isMounted = true; 
        async function fetchCourseMaterial() {
            try {
                setLoading(prev => ({ ...prev, [params.courseId]: true }));

                const response = await getCourse(params.courseId);
                if (isMounted) {
                    setCourseMaterial(response?.data || []);
                }
            } catch (error) {
                console.error("Error fetching course material:", error);
                if (isMounted) {
                    setCourseMaterial([]);
                }
            } finally {
                if (isMounted) {
                    setLoading(prev => ({ ...prev, [params.courseId]: false }));
                }
            }
        }

        fetchCourseMaterial();

        return () => {
            isMounted = false;
        };
    }, [params?.courseId, getCourse]);
      
    console.log(course)

    return (
        <div className='p-7 flex flex-col gap-9 h-full overflow-auto scrollbar-hide'>
            <CourseHeader
                isEdit={isEdit}
                showEdit={showEdit}
                handleEdit={handleEdit}
                dept={course?.dept}
                course_code={course?.course_code}
                academic_year={course?.academic_year}
                faculty_members={["Dr.Parthasarathi P", "Mrs.Ganagavalli K"]}
            />
            <CourseBody
                isEdit={isEdit}
                className={"w-full max-w-[804px]"}
                body={course?.course_header}
            />
            <CourseBody
                isEdit={isEdit}
                className={"w-full max-w-[804px]"}
                body={course?.course_description}
            />
            <CourseBody
                isEdit={isEdit}
                className={"w-full max-w-[804px]"}
                body={course?.course_objective}

            />
            <div
                className='flex flex-col gap-[18px]'
            >
                <p
                    className='font-semibold text-lg leading-6 flex items-center gap-3'
                >
                    Course Plan
                </p>
                <CourseTable
                    loading={loading[params?.courseId]}
                    data={courseMaterial}
                />
            </div>
        </div>
    )
}
