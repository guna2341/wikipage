import { cn } from '@/components'
import { useCourseListStore } from '@/store/faculty/courseList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Shimmer } from '../shimmer/shimmer';

export const SyllabusTable = ({
  handleClick,
  header,
  minimun_credits,
}) => {
  const getCourseList = useCourseListStore(e => e.getCourseList);
  const [course, setCourse] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  function getDept(params) {
    switch (params) {
      case "Biomedical Engineering":
        return "bio";
      case "Civil Engineering":
        return "civil";
      case "Computer Science and Design":
        return "csd";
      case "Electrical and Electronics Engineering":
        return "eee";
      case "Electronics and Communication Engineering":
        return "ece";
      case "Artificial Intelligence and Data Science":
        return "aids";
      case "Information Science Technology":
        return "it";
      case "Mechanical Engineering":
        return "me";
      case "Mechatronics Engineering":
        return "mech";
      case "Computer Science And Engineering":
        return "cse";
    }
  }

  useEffect(() => {
    async function getCourse() {
      setLoading(true);
      const response = await getCourseList(getDept(params.dept), params.sem);
      if (response?.data?.length > 0) {
        setCourse(response.data);
        setEmpty(false);
      } else {
        setEmpty(true);
      }
      setLoading(false);
    }
    getCourse();
  }, []);

  return (
    <div className='border-2 border-custom-100 rounded-2xl overflow-hidden w-full'>
      <div className='border-b-2 border-custom-100 text-custom-1005 bg-custom-1027 py-3 text-center font-semibold leading-7 text-base'>
        {loading ? <Shimmer className='w-1/3 h-5 mx-auto rounded-md' /> : header}
      </div>

      <div className='border-b-2 border-custom-100 py-3.5 text-center bg-custom-1028 text-custom-1005 font-medium leading-7 text-base'>
        {loading ? (
          <Shimmer className='w-2/5 h-5 mx-auto rounded-md' />
        ) : (
          <>Minimum Credits to be earned {minimun_credits}</>
        )}
      </div>

      <table className='w-full border-collapse'>
        <thead>
          <tr className='text-center bg-custom-1028 text-custom-1005 font-medium leading-7 text-base'>
            <td className='w-[130px] px-3 py-5 border-r-2 border-custom-100'>Code No.</td>
            <td className='w-[322px] border-l-2 border-custom-100'>Course</td>
            <td className='w-[322px] border-l-2 border-custom-100'>Objectives & Outcomes</td>
            <td className='w-8 border-l-2 border-custom-100'>L</td>
            <td className='w-8 border-l-2 border-custom-100'>T</td>
            <td className='w-8 border-l-2 border-custom-100'>P</td>
            <td className='w-8 border-l-2 border-custom-100'>C</td>
          </tr>
        </thead>

        <tbody className='border-collapse text-base leading-7 font-normal'>
          {loading ? (
            // 🌀 shimmer rows while loading
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className='border-t-2 border-b-2 border-custom-100'>
                <td className='pl-4 border-r-2 border-custom-100 py-3'>
                  <Shimmer className='w-16 h-5 rounded-md' />
                </td>
                <td className='pl-4 border-r-2 border-custom-100'>
                  <Shimmer className='w-40 h-5 rounded-md' />
                </td>
                <td className='pl-4 border-r-2 border-custom-100'>
                  <Shimmer className='w-52 h-5 rounded-md' />
                </td>
                <td className='text-center border-l-2 border-custom-100'>
                  <Shimmer className='w-6 h-5 mx-auto rounded-md' />
                </td>
                <td className='text-center border-l-2 border-custom-100'>
                  <Shimmer className='w-6 h-5 mx-auto rounded-md' />
                </td>
                <td className='text-center border-l-2 border-custom-100'>
                  <Shimmer className='w-6 h-5 mx-auto rounded-md' />
                </td>
                <td className='text-center border-l-2 border-custom-100'>
                  <Shimmer className='w-6 h-5 mx-auto rounded-md' />
                </td>
              </tr>
            ))
          ) : empty ? (
            <tr>
              <td colSpan="7" className='text-center py-10 text-custom-1005 text-base border-t-2 border-custom-100'>
                No courses found for the selected semester.
              </td>
            </tr>
          ) : (
            course?.map(item => (
              <tr
                className={cn('border-t-2 cursor-pointer', {
                  'cursor-default': item.total,
                })}
                key={item?.course_code}
                onClick={() => handleClick(item?.course_code)}
              >
                {item.total ? (
                  <td className='pl-4 border-r-2 border-custom-100 py-3 font-semibold'>Total</td>
                ) : (
                  <td className='pl-4 border-r-2 border-custom-100 py-3'>{item?.course_code}</td>
                )}

                <td className='pl-4 border-r-2 border-custom-100'>{item?.course_name}</td>

                {item.peos && item.pos ? (
                  <td className='flex pl-4 p-0 w-full h-full'>
                    <div className='w-[62px] py-3 border-r-2 border-custom-100 h-full'>{item?.peos}</div>
                    <div className='pl-4 py-3 h-full'>{item?.pos}</div>
                  </td>
                ) : (
                  <td className='border-l-2 border-custom-100 h-full p-0'>
                    <div className='w-[78px] py-6 h-full border-r-2 border-custom-100'></div>
                  </td>
                )}

                <td className='text-center border-l-2 border-custom-100'>{item?.l}</td>
                <td className='text-center border-l-2 border-custom-100'>{item?.t}</td>
                <td className='text-center border-l-2 border-custom-100'>{item?.p}</td>
                <td className='text-center border-l-2 border-custom-100'>{item?.c}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
