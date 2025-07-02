import React from 'react'
import { cn } from '@/components'
import { FileEdit } from '@/assets';

export const CoursePlanUndoTable = ({
    data = [],
    courses = [],
    classNames
}) => {
    const [currentTab, setCurrentTab] = React.useState(1);

    return (
        <div className={cn('flex flex-col',
            classNames
        )}>
            <div className='flex gap-4 w-full overflow-auto scrollbar-hide pt-5 px-8'>
                {courses.map(course => (
                    <div
                        key={course.id}
                        className={cn(
                            'font-medium text-base leading-6 text-custom-1011 p-3 rounded-t-2xl cursor-pointer text-nowrap',
                            { 'text-custom-600 bg-custom-500': currentTab === course.id }
                        )}
                        onClick={() => setCurrentTab(course.id)}
                    >
                        {course.course}
                    </div>
                ))}
            </div>

            <div className='flex-1 flex flex-col overflow-hidden'>
                <table className='w-full border-t border-custom-1007 table-fixed'>
                    <thead>
                        <tr className='text-center border-y border-custom-1007'>
                            <th className='py-4 text-custom-1013 font-semibold text-base leading-6'>Change Content</th>
                            <th className='text-custom-1013 font-semibold text-base leading-6'>Faculty Name</th>
                            <th className='text-custom-1013 font-semibold text-base leading-6'>Last Time Changed</th>
                            <th className='text-custom-1013 font-semibold text-base leading-6'>Action</th>
                        </tr>
                    </thead>
                </table>

                <div className='overflow-auto flex-1 scrollbar-hide'>
                    <table className='w-full table-fixed'>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className={cn('text-center border-t border-custom-1007', {
                                })}>
                                    <td className='flex items-center gap-2.5 pl-4 py-4 font-medium text-custom-1013 text-base leading-6'>
                                        <span><FileEdit /></span>
                                        <span className='text-nowrap'>
                                            {item?.content}
                                        </span>
                                    </td>
                                    <td className='font-medium text-custom-1013 text-base leading-6'>
                                        {item?.faculty}
                                    </td>
                                    <td className='font-medium text-custom-1013 text-base leading-6'>
                                        {item?.lastEdit}
                                    </td>
                                    <td className=' font-medium text-custom-1006 underline text-base leading-6'>
                                        <span className='flex gap-4 justify-center'>
                                            <a href="" onClick={e => e.preventDefault()}>Undo</a>
                                            <a href="" onClick={e => e.preventDefault()}>Redo</a>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
