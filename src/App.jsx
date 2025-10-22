import { Route, Routes } from "react-router-dom";
import { Login } from "@/components";
import { PageRoutes } from "./pageRoutes";
import { ProtectedRoute } from "./protectedRoutes";
import { Admin, AdminRegulation, AdminRegulationList, CourseMaterial, CoursePlan, CourseView, CreateRegulation, Faculty, FacultyComment, FacultyCreateCourse, FacultyList, Regulation, Student, StudentComment, StudentCourseView, StudentList, Syllabus, Test } from "./pages";
import { FacultyDetailsPage } from "./pages/admin/pages/facultyPage";
import CoursePage from "./pages/faculty/pages/coursePage";
import { CourseList } from "./pages/faculty/pages/courseList";

function App() {
  return (
    <Routes>
      {/* demo login page */}
      <Route path="/login" element={<Login />} />

      {/* testing page */}
      <Route path="/test" element={<Test/>} />
      
      {/* page routes */}
      <Route path="/" element={<PageRoutes />} />
      
      {/* protected routes */}
      <Route element={<ProtectedRoute />}>
        
        {/* faculty module */}
        <Route path="/faculty" element={<Faculty />}>
          <Route path="courseplan" element={<CoursePlan />} />
          <Route path="courseplan/:courseId" element={<CoursePage />} />
          <Route path="coursematerial" element={<CourseMaterial />} />
          <Route path="comment" element={<FacultyComment />} />
          <Route path=":dept/:sem" element={<CourseList />} />
          <Route path="coursematerial/Createcourse" element={<FacultyCreateCourse/>} />
        </Route>
        
        {/* student module */}
        <Route path="/student" element={<Student/>}>
          <Route path="regulation" element={<Regulation/>} />
          <Route path="regulation/:academic_year/:dept/:sem" element={<Syllabus/>} />
          <Route path="regulation/:academic_year/:dept/:sem/:courseId" element={<StudentCourseView/>} />
          <Route path="comments" element={<StudentComment />} />
        </Route>

        {/* admin module */}
        <Route path="/admin" element = {<Admin/>} >
          <Route path="regulation" element={<AdminRegulation/>} />
          <Route path="regulation/createRegulation" element={<CreateRegulation/>} />
          <Route path="regulation/:dept/:sem" element={<AdminRegulationList/>} />
          <Route path="studentList" element={<StudentList/>} />
          <Route path="facultyList" element={<FacultyList/>} />
          <Route path="facultyDetails/:id" element = {<FacultyDetailsPage />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
