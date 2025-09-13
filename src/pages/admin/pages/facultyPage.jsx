import React, { useState, useEffect } from 'react';
import { InputField, ButtonComponent, SelectComponent } from '../../../components/index';
import { AddIcon, Delete, Edit2, LeftArrow, SearchIcon } from '@/assets';
import { cn } from '@heroui/theme';
import useAdminRegulationStore from '@/store/admin/regulation';
import { useParams } from 'react-router-dom';

export const FacultyDetailsPage = ({ onBack, onSave }) => {
    const faculties = useAdminRegulationStore(e => e.faculties);
    const params = useParams();
    const faculty = faculties.find(item => item.id == params.id);
    const [editMode, setEditMode] = useState(false);
    const [facultyData, setFacultyData] = useState(faculty || {});
    const [mappedCourses, setMappedCourses] = useState([
        { id: 1, courseCode: 'CS101', courseName: 'Introduction to Programming', credits: 3, semester: 1 },
        { id: 2, courseCode: 'CS201', courseName: 'Data Structures', credits: 4, semester: 2 },
        { id: 3, courseCode: 'CS301', courseName: 'Database Systems', credits: 3, semester: 3 },
    ]);
    const [availableCourses] = useState([
        { id: 4, courseCode: 'CS401', courseName: 'Machine Learning', credits: 4, semester: 4 },
        { id: 5, courseCode: 'CS501', courseName: 'Software Engineering', credits: 3, semester: 5 },
        { id: 6, courseCode: 'CS601', courseName: 'Computer Networks', credits: 3, semester: 6 },
        { id: 7, courseCode: 'CS701', courseName: 'Artificial Intelligence', credits: 4, semester: 7 },
    ]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [searchText, setSearchText] = useState('');
    const [showAddCourse, setShowAddCourse] = useState(false);

    const handleInputChange = (field, value) => {
        setFacultyData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleAddCourse = () => {
        if (selectedCourse) {
            const courseToAdd = availableCourses.find(course => course.id == selectedCourse);
            if (courseToAdd && !mappedCourses.find(course => course.id === courseToAdd.id)) {
                setMappedCourses(prev => [...prev, courseToAdd]);
                setSelectedCourse('');
                setShowAddCourse(false);
            }
        }
    };

    const handleRemoveCourse = (courseId) => {
        setMappedCourses(prev => prev.filter(course => course.id !== courseId));
    };

    const handleSave = () => {
        const updatedFaculty = {
            ...facultyData,
            courses: mappedCourses
        };
        onSave?.(updatedFaculty);
        setEditMode(false);
    };

    const filteredCourses = mappedCourses.filter(course =>
        course.courseName.toLowerCase().includes(searchText.toLowerCase()) ||
        course.courseCode.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="h-[calc(100%-100px)] bg-white overflow-y-auto scrollbar-hide">
            {/* Header */}
            <div className="w-full p-5 bg-custom-1029 border-b border-custom-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <ButtonComponent
                            startContent={<LeftArrow />}
                            variant="light"
                            isIconOnly
                            onClick={onBack}
                            className="min-w-0"
                        />
                        <h1 className="text-xl font-semibold text-custom-1030">Faculty Details</h1>
                    </div>
                    <div className="flex gap-3">
                        {editMode ? (
                            <>
                                <ButtonComponent
                                    children="Cancel"
                                    variant="bordered"
                                    onClick={() => {
                                        setEditMode(false);
                                        setFacultyData(faculty);
                                    }}
                                />
                                <ButtonComponent
                                    children="Save"
                                    className="bg-blue-600 text-white"
                                    onClick={handleSave}
                                />
                            </>
                        ) : (
                            <ButtonComponent
                                startContent={<Edit2 />}
                                children="Edit"
                                onClick={() => setEditMode(true)}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="p-6">
                {/* Faculty Information Section */}
                <div className="mb-8">
                    <h2 className="text-lg font-semibold text-custom-1030 mb-4">Faculty Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 p-6 rounded-lg">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-1030">Name</label>
                            <InputField
                                value={facultyData.name || ''}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                disabled={!editMode}
                                classNames={{
                                    inputWrapper: editMode ? "bg-white border-2" : "bg-gray-100",
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-1030">Email</label>
                            <InputField
                                value={facultyData.email || ''}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                disabled={!editMode}
                                classNames={{
                                    inputWrapper: editMode ? "bg-white border-2" : "bg-gray-100",
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-1030">Faculty ID</label>
                            <InputField
                                value={facultyData.id || ''}
                                onChange={(e) => handleInputChange('id', e.target.value)}
                                disabled={!editMode}
                                classNames={{
                                    inputWrapper: editMode ? "bg-white border-2" : "bg-gray-100",
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-1030">Department</label>
                            <InputField
                                value={facultyData.dept || ''}
                                onChange={(e) => handleInputChange('dept', e.target.value)}
                                disabled={!editMode}
                                classNames={{
                                    inputWrapper: editMode ? "bg-white border-2" : "bg-gray-100",
                                }}
                            />
                        </div>
                        {/* <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-1030">Designation</label>
                            <InputField
                                value={facultyData.designation || ''}
                                onChange={(e) => handleInputChange('designation', e.target.value)}
                                disabled={!editMode}
                                classNames={{
                                    inputWrapper: editMode ? "bg-white border-2" : "bg-gray-100",
                                }}
                            />
                        </div> */}
                        {/* <div className="space-y-2">
                            <label className="text-sm font-medium text-custom-1030">Experience</label>
                            <InputField
                                value={facultyData.experience || ''}
                                onChange={(e) => handleInputChange('experience', e.target.value)}
                                disabled={!editMode}
                                classNames={{
                                    inputWrapper: editMode ? "bg-white border-2" : "bg-gray-100",
                                }}
                                placeholder="Years of experience"
                            />
                        </div> */}
                    </div>
                </div>

                {/* Courses Section */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-custom-1030">Mapped Courses</h2>
                        <div className="flex gap-3">
                            <InputField
                                startContent={<SearchIcon />}
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                                placeholder="Search courses"
                                classNames={{
                                    inputWrapper: "bg-white border-2",
                                }}
                                className="w-64"
                            />
                            <ButtonComponent
                                startContent={<AddIcon />}
                                children="Add Course"
                                onClick={() => setShowAddCourse(true)}
                                disabled={!editMode}
                                className={editMode ? "bg-blue-600 text-white" : ""}
                            />
                        </div>
                    </div>

                    {/* Add Course Modal/Section */}
                    {showAddCourse && editMode && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <div className="flex items-center gap-4">
                                <SelectComponent
                                    placeholder="Select a course to add"
                                    value={selectedCourse}
                                    onChange={setSelectedCourse}
                                    className="flex-1"
                                    classNames={{
                                        trigger: "bg-white",
                                    }}
                                >
                                    {availableCourses
                                        .filter(course => !mappedCourses.find(mapped => mapped.id === course.id))
                                        .map(course => (
                                            <SelectItem key={course.id} value={course.id}>
                                                {course.courseCode} - {course.courseName}
                                            </SelectItem>
                                        ))
                                    }
                                </SelectComponent>
                                <ButtonComponent
                                    children="Add"
                                    onClick={handleAddCourse}
                                    className="bg-blue-600 text-white"
                                    disabled={!selectedCourse}
                                />
                                <ButtonComponent
                                    children="Cancel"
                                    variant="light"
                                    onClick={() => {
                                        setShowAddCourse(false);
                                        setSelectedCourse('');
                                    }}
                                />
                            </div>
                        </div>
                    )}

                    {/* Courses Table */}
                    <div className="bg-white rounded-lg border border-custom-100 overflow-hidden">
                        <table className="w-full table-auto">
                            <thead className="bg-custom-1029">
                                <tr className="text-left border-b border-custom-100">
                                    <th className="font-semibold py-4 px-6 text-custom-1030 text-sm">Course Code</th>
                                    <th className="font-semibold py-4 px-6 text-custom-1030 text-sm">Course Name</th>
                                    <th className="font-semibold py-4 px-6 text-custom-1030 text-sm">Credits</th>
                                    <th className="font-semibold py-4 px-6 text-custom-1030 text-sm">Semester</th>
                                    {editMode && (
                                        <th className="font-semibold py-4 px-6 text-custom-1030 text-sm">Action</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCourses.length > 0 ? (
                                    filteredCourses.map((course, index) => (
                                        <tr
                                            key={course.id}
                                            className={cn("border-b border-custom-100 hover:bg-gray-50", {
                                                "border-0": index === filteredCourses.length - 1,
                                            })}
                                        >
                                            <td className="py-4 px-6 text-custom-1004 text-sm font-medium">
                                                {course.courseCode}
                                            </td>
                                            <td className="py-4 px-6 text-custom-1004 text-sm">
                                                {course.courseName}
                                            </td>
                                            <td className="py-4 px-6 text-custom-1004 text-sm">
                                                {course.credits}
                                            </td>
                                            <td className="py-4 px-6 text-custom-1004 text-sm">
                                                Semester {course.semester}
                                            </td>
                                            {editMode && (
                                                <td className="py-4 px-6">
                                                    <ButtonComponent
                                                        isIconOnly
                                                        variant="light"
                                                        className="text-red-600 hover:bg-red-50"
                                                        onClick={() => handleRemoveCourse(course.id)}
                                                    >
                                                        <Delete />
                                                    </ButtonComponent>
                                                </td>
                                            )}
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={editMode ? 5 : 4}
                                            className="py-8 text-center text-custom-1008 text-lg"
                                        >
                                            {searchText ? 'No courses found matching your search' : 'No courses mapped yet'}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Course Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{mappedCourses.length}</div>
                            <div className="text-sm text-blue-700">Total Courses</div>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">
                                {mappedCourses.reduce((total, course) => total + course.credits, 0)}
                            </div>
                            <div className="text-sm text-green-700">Total Credits</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">
                                {new Set(mappedCourses.map(course => course.semester)).size}
                            </div>
                            <div className="text-sm text-purple-700">Semesters Covered</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};