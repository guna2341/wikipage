import { Route, Routes } from "react-router-dom";
import { Login, NotFound, Register, Unauthorized } from "@/components";
import { PageRoutes } from "./pageRoutes";
import { ProtectedRoute } from "./protectedRoutes";
import { Admin, AdminRegulation, AdminRegulationList, CourseMaterial, CoursePlan, CourseView, CreateRegulation, Faculty, FacultyComment, FacultyCreateCourse, FacultyList, Regulation, Student, StudentComment, StudentCourseView, StudentList, Syllabus, Test } from "./pages";
import './api/interceptors/request';
import './api/interceptors/response';
import './api/utils/errorHandler';

function App() {
  return (
      <Routes>
      <Route path="/unauthorized" element={<Unauthorized/>} />

      {/* demo login page */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* testing page */}
      <Route path="/test" element={<Test/>} />
      
      {/* page routes */}
      <Route path="/" element={<PageRoutes />} />
      
      {/* protected routes */}
      <Route element={<ProtectedRoute />}>
        
        {/* faculty module */}
        <Route path="/faculty" element={<Faculty />}>
          <Route path="courseplan" element={<CoursePlan />} />
          <Route path="coursematerial" element={<CourseMaterial />} />
          <Route path="comment" element={<FacultyComment />} />
          <Route path=":course/:id" element={<CourseView />} />
          <Route path="coursematerial/Createcourse" element={<FacultyCreateCourse/>} />
        </Route>
        
        {/* student module */}
        <Route path="/student" element={<Student/>}>
          <Route path="regulation" element={<Regulation/>} />
          <Route path="regulation/:academic_year/:course/:sem" element={<Syllabus/>} />
          <Route path="regulation/:academic_year/:course/:sem/:course_code" element={<StudentCourseView/>} />
          <Route path="comments" element={<StudentComment />} />
        </Route>

        {/* admin module */}
        <Route path="/admin" element = {<Admin/>} >
          <Route path="regulation" element={<AdminRegulation/>} />
          <Route path="regulation/createRegulation" element={<CreateRegulation/>} />
          <Route path="regulation/:course/:sem" element={<AdminRegulationList/>} />
          <Route path="studentList" element={<StudentList/>} />
          <Route path="facultyList" element={<FacultyList/>} />
        </Route>

        {/* page not found */}
        <Route path="*" element={<NotFound />} />
        
      </Route>
    </Routes>
  );
}

export default App;
