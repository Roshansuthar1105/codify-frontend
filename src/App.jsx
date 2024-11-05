import React from "react";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";
import LogOut from "./pages/LogOut";
import Courses from "./pages/Courses";
import { useAuth } from "./store/auth";
import Loader from "./components/Loader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CourseUpdate from "./layouts/CourseLayout/CourseUpdate";
import Roadmap from "./pages/Roadmap";
import AdminLayout from "./layouts/AdminLayout";
import AdminUsers from "./layouts/AdminUsers";
import AdminContacts from "./layouts/AdminContacts";
import AdminCourses from "./layouts/CourseLayout/AdminCourses";
import AdminUpdate from "./layouts/AdminUpdate";
import AddNewCourse from "./layouts/CourseLayout/AddNewCourse.jsx";
import Footer from "./components/Footer.jsx";
import { LoadingProvider } from "./components/loadingContext.jsx";
function App() {
  return (
    <Router>
      <LoadingProvider>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="users/:id/edit" element={<AdminUpdate />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="courses/add" element={<AddNewCourse />} />
            <Route path="courses/update/:id" element={<CourseUpdate />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      </LoadingProvider>
    </Router>
  );
}

export default App;
