import Login from "./pages/auth/Login.js";
import Logout from "./pages/auth/Logout.js";
import Signup from "./pages/auth/Signup.js";
import SchoolDashboard from "./pages/school/SchoolDashboard.js";
import TeacherDashboard from "./pages/teacher/TeacherDashboard.js";
import StudentDashboard from "./pages/student/StudentDashboard.js";

import { SnackbarProvider } from "notistack";

import Home from "./pages/Home.js";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MiniDrawer from "./components/layout/MiniDrawer";

function App() {
  return (
    <div className="App ">
      {/* <MiniDrawer /> */}
      <SnackbarProvider maxSnack={3}>
        <BrowserRouter>
          {/* <MiniDrawer /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/School/Dashboard" element={<SchoolDashboard />} />
            <Route path="/teacher/Dashboard" element={<TeacherDashboard />} />
            <Route path="/student/Dashboard" element={<StudentDashboard />} />

            {/* <Route path="invoices" element={<Invoices />} /> */}
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
}

export default App;
