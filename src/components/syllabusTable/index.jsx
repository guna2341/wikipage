import { cn } from '../cn'

export const SyllabusTable = ({
  handleClick,
  header,
  minimun_credits,
  courses = []
}) => {


  return (
    <div className='border-2 border-custom-100 rounded-2xl overflow-hidden w-full'>
      <div className='border-b-2 border-custom-100 text-custom-1005 bg-custom-1027 py-3 text-center font-semibold leading-7 text-base'>
       {header}
      </div>
      <div className='border-b-2 border-custom-100 py-3.5 text-center bg-custom-1028 text-custom-1005 font-medium leading-7 text-base'>
          Minimum Credits to be earned {minimun_credits}
      </div>
      <table className='w-full border-collapse'>
        <thead>
          <tr className='text-center bg-custom-1028 text-custom-1005 font-medium leading-7 text-base'>
            <td className='w-[130px] px-3 py-5 border-r-2 border-custom-100'>Code No.</td>
            <td className='w-[322px] border-l-2 border-custom-100'>Course</td>
            <td className='w-[322px] border-l-2 border-custom-100 row-span-2'>Objectives & Outcomes</td>
            <td className='w-8 border-l-2 border-custom-100'>L</td>
            <td className='w-8 border-l-2 border-custom-100'>T</td>
            <td className='w-8 border-l-2 border-custom-100'>P</td>
            <td className='w-8 border-l-2 border-custom-100'>C</td>
          </tr>
        </thead>
        <tbody className='border-collapse text-base leading-7 font-normal'>
          <tr className='border-t-2 border-b-2 border-custom-100 border-collapse p-0 m-0'>
            <td className='pl-4 border-r-2 border-custom-100'></td>
            <td className='border-r-2 border-custom-100 pl-4'></td>
            <td className='flex pl-4 border-collapse p-0'>
              <div className='w-[62px] py-3 border-r-2 border-custom-100'>PEOs</div>
              <div className='py-3 pl-4'>POs</div>
            </td>
            <td className='border-l-2 border-custom-100'></td>
            <td className='border-l-2 border-custom-100'></td>
            <td className='border-l-2 border-custom-100'></td>
            <td className='border-l-2 border-custom-100'></td>
          </tr>
          {courses.map(item => (
            <tr className={cn('border-t-2 cursor-pointer',{
              'cursor-default' : item.total
            })} key={item.code_no} onClick={() => handleClick(item.code_no)}>
              {item.total ? 
            <td className='pl-4 border-r-2 border-custom-100 py-3 font-semibold'>Total</td> :
            <td className='pl-4 border-r-2 border-custom-100 py-3'>{item.code_no}</td>
 
            }
              <td className='pl-4 border-r-2 border-custom-100'>{item.course}</td>
              {item.peos && item.pos ? 
              <td className='flex pl-4 p-0 w-full h-full'>
                <div className='w-[62px] py-3 border-r-2 border-custom-100 h-full'>{item.peos}</div>
                <div className='pl-4 py-3 h-full'>{item.pos}</div>
              </td>
            :
            <td className='border-l-2 border-custom-100 h-full p-0'>
              <div className='w-[78px] py-6 h-full border-r-2 border-custom-100'></div>
            </td>  
            }
              <td className='text-center border-l-2 border-custom-100'>{item.l}</td>
              <td className='text-center border-l-2 border-custom-100'>{item.t}</td>
              <td className='text-center border-l-2 border-custom-100'>{item.p}</td>
              <td className='text-center border-l-2 border-custom-100'>{item.c}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

