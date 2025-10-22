import { Delete, Edit2 } from "@/assets";

export const CourseTable = ({ data = [], loading = false }) => {
  const tableHeaders = [
    "UNIT NO",
    "TOPIC",
    "LECTURE MATERIAL",
    "LECTURE VIDEO",
    "DISCOURSE LINK",
    "Action",
  ];

  if (loading) {
    return (
      <div className="border border-custom-100 h-full bg-white rounded-2xl flex items-center justify-center">
        <p className="text-custom-1006 font-medium text-sm">Loading...</p>
      </div>
    );
  }

  return (
    <div className="border border-custom-100 h-full bg-white rounded-2xl overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th
                key={index}
                className="font-medium text-sm leading-[30px] text-center py-4 border-b border-custom-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={tableHeaders.length}
                className="py-6 text-center text-custom-1006 font-medium"
              >
                No data available
              </td>
            </tr>
          ) : (
            data.map((course, index) => (
              <tr
                key={index}
                className="text-center font-medium text-sm leading-[30px]"
              >
                <td className="py-3 border-t border-custom-100">{course.unit}</td>
                <td className="py-3 text-left max-w-[150px] pl-4 border-t border-custom-100">
                  {course.topic}
                </td>
                <td className="py-3 underline text-custom-1006 border-t border-custom-100">
                  <a
                    href={course.lectureMaterial}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LM-{index+1}
                  </a>
                </td>
                <td className="py-3 underline text-custom-1006 border-t border-r border-custom-100">
                  <a
                    href={course.lectureVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LV-{index+1}
                  </a>
                </td>

                {course.discourseLink && (
                  <td
                    className="py-3 underline text-custom-1006 border-r border-b border-custom-100"
                  >
                    <a
                      href={course.discourseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Dl-{index + 1}
                    </a>
                  </td>
                )}

                <td className="py-3 flex justify-center border-t border-custom-100">
                  <span className="flex items-center gap-4">
                    <Edit2 />
                    <Delete />
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
