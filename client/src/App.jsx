import { useState } from "react";
import Navbar from "./components/ui/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import Jobs from "./components/Jobs";

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/jobs',
    element: <Jobs />
  }
])

function App() {

  return (
    <>
      <RouterProvider router = {appRouter} />
    </>
  );
}

export default App;
