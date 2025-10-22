import React, { useState } from 'react'
import { ButtonComponent, cn, SelectComponent, UploadLink } from '@/components'
import { AddIcon } from '@/assets'
import { useCreateCourse } from '@/store/faculty/createCourse';

export const CourseItem = ({
    data = [],
    onAddLessonPlan,
    onUpdateLessonPlan,
    onDeleteLessonPlan,
    isDiscourse,
    unitNumber
}) => {
    const handleFieldUpdate = (index, field, value) => {
        onUpdateLessonPlan(unitNumber, index, field, value);
    };

    return (
        <div className='flex flex-col gap-5 py-4 px-4'>
            <div className='flex justify-end'>
                {!isDiscourse && <ButtonComponent
                    onClick={onAddLessonPlan}
                    startContent={<AddIcon />}
                >
                    Add Lesson Plan
                </ButtonComponent>
                }
            </div>
            {data.map((item, index) => (
                <div
                    className={cn('flex flex-col gap-6 px-8 pb-8', {
                        'border-b border-custom-100': data.length - 1 !== index
                    })}
                    key={index}
                >
                    <CustomInputField
                        isDiscourse={isDiscourse}
                        lp={item.lp}
                        onUpdate={(field, value) => handleFieldUpdate(index, field, value)}
                    />

                    <div className='flex flex-col gap-6'>
                        {/* Lecture Material Link */}
                        {!isDiscourse &&
                            <UploadLink
                            placeholder='Enter topic'
                            header='Topic Name:'
                            value={item.topic}
                            onChange={(value) => handleFieldUpdate(index,"topic",value)}
                        />}
                        {!isDiscourse && <span className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                            <UploadLink
                                placeholder='Enter lecture material link'
                                header={
                                    isDiscourse
                                        ? <span>Upload DISCOURSE Material File:</span>
                                        : <span>Upload Lecture Material File:</span>
                                }
                                value={item.lm}
                                onChange={(value) => handleFieldUpdate(index, 'lm', value)}
                            />
                        </span>
                        }
                        {/* Lecture Video Link */}
                        {!isDiscourse && <UploadLink
                            placeholder='Enter lecture video link'
                            header={<span>Upload Lecture Video Link:</span>}
                            value={item.lv}
                            onChange={(value) => handleFieldUpdate(index, 'lv', value)}
                        />}
                    </div>

                    <div className='flex gap-4 justify-end'>
                        <ButtonComponent
                            className="border border-custom-1026 bg-white text-black"
                            onClick={() => onDeleteLessonPlan(unitNumber, index)}
                        >
                            Delete
                        </ButtonComponent>
                    </div>
                </div>
            ))}
        </div>
    )
}

const CustomInputField = ({ isDiscourse, lp, onUpdate }) => {
    
    if (isDiscourse) {
        return (
            <div className='flex flex-col gap-2 rounded-xl bg-white w-full'>
                <div className='font-medium'>Lesson Plan:{lp}</div>
                <UploadLink
                    placeholder="Enter file link"
                    header='Upload Discourse Material File:'
                    onChange={(e) => onUpdate("discourseLink",e)}
                />
          </div>
        )
    } else {
        return (
            <div className='flex flex-col gap-2 font-normal text-sm leading-6 text-custom-1020'>
                <strong>Lesson Plan: {lp}</strong>
            </div>
        )
    }
}