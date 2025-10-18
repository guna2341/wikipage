import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { ButtonComponent } from '../button';
import { Select, SelectItem } from '@heroui/select';
import useAdminRegulationStore from '@/store/admin/regulation';
import { addToast } from '@heroui/toast';

export const AddCourseModal = ({
    isOpen,
    onClose,
    faculty_id,
    availableCourses = [],
    onCourseAdd
}) => {

    const [selectedCourse, setSelectedCourse] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const addCourse = useAdminRegulationStore(e => e.addCourse);

    const handleAdd = async () => {
        if (selectedCourse) {
            setLoading(true);
            try {
                const response = await addCourse(faculty_id, selectedCourse);

                if (response?.state) {
                    addToast({
                        color: "success",
                        title: "Success",
                        description: "Course added successfully"
                    });

                    // Call the callback to update the parent component
                    onCourseAdd(selectedCourse);

                    setSelectedCourse('');
                    onClose();
                } else {
                    addToast({
                        color: "danger",
                        title: "Error",
                        description: response?.message || "Failed to add course"
                    });
                }
            } catch (error) {
                addToast({
                    color: "danger",
                    title: "Error",
                    description: "An error occurred while adding the course"
                });
            } finally {
                setLoading(false);
            }
        }
    };

    const handleCancel = () => {
        setSelectedCourse('');
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleCancel}
            size="2xl"
            scrollBehavior="inside"
        >
            <ModalContent>
                <ModalHeader className="flex flex-col gap-1">
                    Add Course to Faculty
                </ModalHeader>
                <ModalBody>
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Select Course</label>
                            <Select
                                className="w-full"
                                placeholder="Select a course"
                                selectedKeys={selectedCourse ? [selectedCourse] : []}
                                onSelectionChange={(keys) => {
                                    const selected = Array.from(keys)[0];
                                    setSelectedCourse(selected || '');
                                }}
                            >
                                {availableCourses.map((item) => (
                                    <SelectItem key={item.course_code} value={item.course_code}>
                                        {item.course_code} - {item.course_name}
                                    </SelectItem>
                                ))}
                            </Select>
                            {availableCourses.length === 0 && (
                                <p className="text-sm text-gray-500 mt-2">
                                    All available courses have been mapped to this faculty.
                                </p>
                            )}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <ButtonComponent
                        variant="bordered"
                        className={"text-white border-none"}
                        onClick={handleCancel}
                    >
                        Cancel
                    </ButtonComponent>
                    <ButtonComponent
                        color="primary"
                        isLoading={loading}
                        onClick={handleAdd}
                        disabled={!selectedCourse || availableCourses.length === 0}
                    >
                        Add Course
                    </ButtonComponent>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};