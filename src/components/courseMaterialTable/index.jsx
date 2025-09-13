  import { cn } from "@/components";

  export const CourseMaterialTable = ({
    header = "BACHELOR OF TECHNOLOGY(UG)",
    dept = [
      { id: "1", dept: "Biomedical Engineering" },
      { id: "2", dept: "Civil Engineering" },
      { id: "3", dept: "Computer Science and Design" },
      { id: "4", dept: "Electrical and Electronics Engineering" },
      { id: "5", dept: "Electronics and Communication Engineering" },
      { id: "6", dept: "Artificial Intelligence and Data Science" },
      { id: "7", dept: "Information Science Technology" },
      { id: "8", dept: "Mechanical Engineering" },
      { id: "9", dept: "Mechatronics Engineering" },
      { id: "10", dept: "Computer Science And Engineering" },
    ],
    handleClick
  }) => {
    const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];

    return (
      <div className='border border-custom-100 rounded-xl overflow-hidden'>
        <div>
          <p className='text-custom-1005 bg-custom-1027 py-3 text-center font-semibold leading-7 text-base'>
            {header}
          </p>
        </div>
        <table className='w-full border-collapse'>
          <thead>
            <tr>
              <th className={cn("py-3.5 w-[200px] bg-custom-1028 border border-l-0 border-custom-100 text-custom-1005 font-medium leading-7 text-base", {
                'w-[494px]': !dept || dept.length == 0
              })}>DEPARTMENT</th>
              <th className="py-3.5 bg-custom-1028 border border-custom-100 border-r-0 text-custom-1005 font-medium leading-7 text-base" colSpan={semesters.length}>SEMESTER</th>
            </tr>
          </thead>

          <tbody>
            {!dept || dept.length === 0 ? (
              <tr>
                <td colSpan={semesters.length + 1} className="text-center py-10 text-gray-500">
                  <p className="text-lg font-semibold">No departments available</p>
                  <p className="text-sm mt-2">Please add a department to view the table.</p>
                </td>
              </tr>
            ) : (
              dept.map(item => (
                <tr key={item.id} className='text-left'>
                  <td className='py-3.5 pl-4 border-t border-custom-100'>
                    {item.dept}
                  </td>
                  {semesters.map(sem => (
                    <td key={sem}
                      onClick={() => handleClick(item.dept, sem, 2022)}
                      className='w-[50px] border-t border-l border-custom-100 text-center cursor-pointer'>
                      {sem}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    )
  }
