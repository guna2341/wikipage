import { Edit2 } from '@/assets'

export const CourseBody = ({
  header = "Introduction to the course",
  headerIcon = <Edit2 />,
  className,
  message,
  isEdit,
  body
}) => {
  return (
    <div
      className="ProseMirror course-body tiptap-content"
    dangerouslySetInnerHTML={{ __html:body }}
  />
       )
}
