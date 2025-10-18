import { useState, useEffect } from 'react';
import { InputField, ButtonComponent, SelectComponent } from '../../../components/index';
import { AddIcon, Delete, Edit2, LeftArrow, SearchIcon } from '@/assets';
import { cn } from '@heroui/theme';
import useAdminRegulationStore from '@/store/admin/regulation';
import { useNavigate, useParams } from 'react-router-dom';
import { addToast } from '@heroui/toast';
import { AddCourseModal } from '@/components/facultyModal/facultyModal';

export const FacultyDetailsPage = ({ onBack, onSave }) => {
    const faculties = useAdminRegulationStore(e => e.faculties);
    const getCourses = useAdminRegulationStore(e => e.getCourses);
    const [addCourse, setAddCourse] = useState(false);
    const params = useParams();
    const faculty = faculties.find(item => item.id == params.id);
    const [editMode, setEditMode] = useState(false);
    const [facultyData, setFacultyData] = useState(faculty || {});
    const courses = useAdminRegulationStore(e => e.courses);
    const nav = useNavigate();
    const [mappedCourses, setMappedCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [searchText, setSearchText] = useState('');
    const [showAddCourse, setShowAddCourse] = useState(false);

    const getFacultyCourse = useAdminRegulationStore(e => e.getFacultyCourse);

    useEffect(() => {
        async function getMappedCourse() {
            const response = await getFacultyCourse(params.id)
            setMappedCourses(response.courses || [])
        }
        getMappedCourse();
    }, []);

    const handleInputChange = (field, value) => {
        setFacultyData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    useEffect(() => {
        if (!faculty || faculty?.length == 0) {
            nav("/admin/facultyList");
        }
    }, []);

    useEffect(() => {
        async function fetchCourse() {
            const response = await getCourses();
            console.log(response)
            if (!response?.state) {
                addToast({
                    color: "danger",
                    title: "Error",
                    description: "Error fetching courses"
                })
            }
        }
        fetchCourse();
    }, []);

    const handleAddCourse = () => {
        if (selectedCourse) {
            const courseToAdd = courses.find(course => course.id == selectedCourse);
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

    // Filter out already mapped courses from available courses
    const availableCoursesForModal = courses.filter(course => !mappedCourses.find(mapped => mapped.course_code === course.course_code)
    );
    console.log(availableCoursesForModal)
    // Handle course addition from modal
    const handleCourseAdded = (addedCourseCode) => {
        const addedCourse = courses.find(course => course.course_code === addedCourseCode);
        if (addedCourse) {
            setMappedCourses(prev => [...prev, addedCourse]);
        }
    };

    const filteredCourses = mappedCourses.filter(course =>
        course?.course_name.toLowerCase().includes(searchText.toLowerCase()) ||
        course?.course_code.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="h-[calc(100%-100px)] bg-white overflow-y-auto scrollbar-hide">
            {/* Header */}
            <div className="w-full p-5 bg-custom-1029 border-b border-custom-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        {/* <LeftArrow onClick={() => nav(-1)} className="cursor-pointer" /> */}
                        <h1 className="text-xl font-semibold text-custom-1030">Faculty Details</h1>
                    </div>
                    <div className="flex gap-3">
                        {editMode ? (
                            <>
                                <ButtonComponent
                                    children="Cancel"
                                    variant="bordered"
                                    className={"bg-transparent"}
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
                                startContent={<Edit2 color='#fff' />}
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
                                onClick={() => setAddCourse(true)}
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
                                    {courses
                                        .filter(course => !mappedCourses.find(mapped => mapped.id === course.id))
                                        .map(course => (
                                            <SelectItem key={course.id} value={course.id}>
                                                {course.course_code} - {course.course_name}
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
                                                {course.course_code}
                                            </td>
                                            <td className="py-4 px-6 text-custom-1004 text-sm">
                                                {course.course_name}
                                            </td>
                                            {editMode && (
                                                <td className="py-4 px-6">
                                                    <ButtonComponent
                                                        isIconOnly
                                                        variant="bordered"
                                                        className="text-red-600 bg-transparent border border-none hover:bg-red-50 flex items-center p-0 justify-center"
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
                                            colSpan={editMode ? 4 : 3}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{mappedCourses.length}</div>
                            <div className="text-sm text-blue-700">Total Courses</div>
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
            <AddCourseModal
                isOpen={addCourse}
                onClose={() => setAddCourse(false)}
                availableCourses={availableCoursesForModal}
                faculty_id={params.id}
                onCourseAdd={handleCourseAdded}
            />
        </div>
    );
};