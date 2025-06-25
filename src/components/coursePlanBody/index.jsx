import { Edit2 } from '@/assets'

export const CourseBody = ({
  header = "Introduction to the course",
  headerIcon = <Edit2 />,
  className,
  message,
  isEdit
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
          <span
          className='font-semibold text-lg leading-6 flex items-center gap-3'
          >
              {header}
              {isEdit && headerIcon}
          </span>
          <span
          className='pl-[22px] font-medium text-sm leading-6 text-custom-1004'
          >
        {message}
          </span>
    </div>
  )
}
