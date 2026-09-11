import { Link, NavLink } from "react-router-dom";
import "@/styles/Navbar.css";
import { UserRound, Heart, Search } from "lucide-react";
import NotificationsDropdown from "./Notifcation";

const NOTIFICATIONS = [
  { id: 1, name: "Milo", action: "booking confirmed", time: "2 hours ago" },
  {
    id: 2,
    name: "Buddy",
    action: "now available for the weekend",
    time: "1 day ago",
  },
  { id: 3, name: "Bella", action: "is due back on Friday", time: "2 days ago" },
];

export default function Navbar() {
  // Replace this with your actual favorites count (context/store/API)
  const likedCount = 1;

  return (
    <header className="navbar sticky top-0 pt-4 px-6 pb-0 z-20 bg-transparent">
      <div className="navbar__inner flex align-center justify-between gap-6 py-3 px-5 rounded-full shadow-md">
        <Link
          to="/"
          className="navbar__logo flex align-center gap-2 whitespace-nowrap"
        >
          <img src="/images/pawicon.png" alt="icon" />
          <span className="font-cherry text-xl">
            Paw<span className="text-froly-400">Borrow</span>
          </span>
        </Link>

        <nav className="navbar__links font-poppins" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "is-active text-froly-500 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-froly-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                : "text-froly-400 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-froly-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/pets"
            className={({ isActive }) =>
              isActive
                ? "is-active text-froly-500 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-froly-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                : "text-froly-400 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-froly-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            }
          >
            Pets
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "is-active text-froly-500 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-froly-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                : "text-froly-400 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-froly-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "is-active text-froly-500 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-froly-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                : "text-froly-400 relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-froly-500 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
            }
          >
            Contact Us
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <div className="navbar__search">
            <input
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button aria-label="Search">
              <Search size={20} />
            </button>
          </div>

          <NotificationsDropdown notifications={NOTIFICATIONS} />

          <NavLink
            to="/favorites"
            className="navbar__icon-btn"
            aria-label="Booking history and liked pets"
          >
            <Heart size={20} />
            {likedCount > 0 && (
              <span className="navbar__badge">{likedCount}</span>
            )}
          </NavLink>

          <NavLink
            to="/login"
            className="navbar__icon-btn"
            aria-label="Sign in"
          >
            <UserRound size={20} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}