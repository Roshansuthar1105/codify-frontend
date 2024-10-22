import React from "react";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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
// function App() {
//   return (
//     <>
//         <BrowserRouter>
//           <header>
//             <NavBar />
//           </header>
//           <main>
//       {/* {loading &&
//         <Loader />} */}
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               {/* <Route path="/courses" element={<Courses />} /> */}
//               <Route path="/courses" element={<Courses />} />
//               <Route path="/contact" element={<ContactUs />} />
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/logout" element={<LogOut />} />
//               <Route path="*" element={<ErrorPage />} />
//               <Route path="/admin" element={<AdminLayout />}>
//                 <Route path="users" element={<AdminUsers />} />
//                 <Route path="users/:id/edit" element={<AdminUpdate />} />
//                 <Route path="contacts" element={<AdminContacts />} />
//                 <Route path="courses" element={<AdminCourses />} />
//               </Route>
//             </Routes>
//           </main>
//           {/* <footer>this is footer</footer> */}
//         </BrowserRouter>
//     </>
//   );
// }
// export default App;
// src/App.js
// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
// import Courses from "./components/Courses";
// import LogOut from "./components/LogOut";
// import NavBar from "./components/NavBar"; // Your NavBar component
// import "./App.css"; // Your main CSS file

function App() {
  return (
    <Router>
      <header>
      <NavBar />
      </header>
      {/* <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/admin" element={<AdminPanel />} /> 
      </Routes> */}
      <main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
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
        </Route>
      </Routes>
      </main>
    </Router>
  );
}

export default App;
