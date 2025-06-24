import { Route, Routes } from "react-router-dom";
import { Login } from "@/components";
import { PageRoutes } from "./pageRoutes";
import { ProtectedRoute } from "./protectedRoutes";
import { Regulation } from "./pages/student/pages/regulation";
import { Syllabus } from "./pages/student/pages/syllabus";
import { CourseMaterial, CoursePlan, CourseView, Faculty, FacultyComment, Student, StudentComment, Test } from "./pages";
import { StudentCourseView } from "./pages/student/pages/courseView";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<PageRoutes />} />
      <Route path="/test" element={<Test/>} />
      <Route element={<ProtectedRoute />}>
        <Route path="/faculty" element={<Faculty />}>
          <Route path="courseplan" element={<CoursePlan />} />
          <Route path="coursematerial" element={<CourseMaterial />} />
          <Route path="comment" element={<FacultyComment />} />
          <Route path=":course/:id" element={<CourseView />} />
        </Route>
        <Route path="/student" element={<Student/>}>
          <Route path="regulation" element={<Regulation/>} />
          <Route path="regulation/:academic_year/:course/:sem" element={<Syllabus/>} />
          <Route path="regulation/:academic_year/:course/:sem/:course_code" element={<StudentCourseView/>} />
          <Route path="comments" element={<StudentComment />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
