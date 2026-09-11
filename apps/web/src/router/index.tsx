import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/AboutPage";
import Login from "@/pages/Login";
import PetsPage from "@/pages/PetsPage";
import Tos from "@/pages/Tos";
import Privacy from "@/pages/Privacy";
import BookingHistory from "@/pages/Bookinghistory";
import LikedPets from "@/pages/LikedPets";
import Register from "@/pages/Register";
import Contact from "@/pages/ContactPage";
import Verify from "@/pages/Verify";
import Profile from "@/pages/Profile";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/login", element: <Login /> },
  { path: "/pets", element: <PetsPage /> },
  { path: "/bookings", element: <BookingHistory /> },
  { path: "/tos", element: <Tos /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/register", element: <Register /> },
  { path: "/contact", element: <Contact /> },
  { path: "/verify", element: <Verify /> },
  { path: "/favorites", element: <LikedPets /> },
  { path: "/profile", element: <Profile /> },
]);

export default router;