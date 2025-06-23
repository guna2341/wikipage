import { Route, Routes } from "react-router-dom";
import { Faculty, Test } from "@/pages";
import { PageRoutes } from "./protectedRoutes";
import { Login } from "@/components";
import { CourseView } from "./pages/faculty/pages/courseView";
import { CoursePlan } from "./pages/faculty/pages/coursePlan";
import { CourseMaterial } from "./pages/faculty/pages/courseMaterial";
import { Comment } from "./pages/faculty/pages/comment";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PageRoutes />}></Route> 
      <Route path="/faculty" element={<Faculty />}>
       <Route path="courseplan" element={<CoursePlan/>} />
       <Route path="coursematerial" element={<CourseMaterial/>} />
       <Route path="comment" element={<Comment/>}/>
        <Route path=":course/:id" element={<CourseView />} />
      </Route>
    </Routes>
  );
}

export default App;
