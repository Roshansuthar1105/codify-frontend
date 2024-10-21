import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";
import LogOut from "./pages/LogOut";
import Courses from "./pages/Courses";
import AdminLayout from "./layouts/AdminLayout";
import AdminUsers from "./layouts/AdminUsers";
import AdminContacts from "./layouts/AdminContacts";
import AdminCourses from "./layouts/AdminCourses";
import AdminUpdate from "./layouts/AdminUpdate";
import { useAuth } from "./store/auth";
import Loader from "./components/Loader";
function App() {
  // const { loading } = useAuth();
  // console.log("loading ", loading);
  return (
    <>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <main>
      {/* {loading &&
        <Loader />} */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/courses" element={<Courses />} /> */}
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/admin" element={<AdminLayout />}>
                <Route path="users" element={<AdminUsers />} />
                <Route path="users/:id/edit" element={<AdminUpdate />} />
                <Route path="contacts" element={<AdminContacts />} />
                <Route path="courses" element={<AdminCourses />} />
              </Route>
            </Routes>
          </main>
          {/* <footer>this is footer</footer> */}
        </BrowserRouter>
    </>
  );
}
export default App;
