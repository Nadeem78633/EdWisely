import React from "react";
import Header from "./Components/Home/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Home/Footer";
import AllCourses from "./Components/Courses/AllCourses";
import Course from "./Components/Courses/Course";

// fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// React router
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { RouterProvider } from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Header />

          <Footer />
        </>
      }
    >
      <Route index element={<Home />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/course/:id" element={<Course />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
