import { Route, Router, Routes } from "react-router-dom";
import Test from "./pages/test/test";
import { Faculty } from "./pages/faculty/layout";
import { PageRoutes } from "./protectedRoutes";
import { Login } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PageRoutes />}>
        <Route path="/faculty" element={<Faculty />} />
      </Route>
    </Routes>
  );
}

export default App;
