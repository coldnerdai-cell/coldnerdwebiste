import { createBrowserRouter, RouterProvider, useLocation, Outlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import Home from "../imports/Home";
import Dashboard from "../imports/Frame1000005560";
import Login from "../imports/Login";
import Signup from "../imports/Signup";
import Blog from "../imports/Blog";
import Pricing from "../imports/Pricing";
import TermsAndConditions from "../imports/TermsAndConditions";

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -15 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.4
};

function AnimatedLayout() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full min-h-screen relative"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

export const router = createBrowserRouter([
  {
    element: <AnimatedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditions />,
      }
    ],
  },
]);