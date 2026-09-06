import { Link, NavLink } from "react-router-dom";
import "@/styles/Navbar.css";
import { UserRound } from 'lucide-react';
import { Search } from 'lucide-react';
import NotificationsDropdown from "./Notifcation";

const NOTIFICATIONS = [
  { id: 1, name: 'Milo', action: 'booking confirmed', time: '2 hours ago' },
  { id: 2, name: 'Buddy', action: 'now available for the weekend', time: '1 day ago' },
  { id: 3, name: 'Bella', action: 'is due back on Friday', time: '2 days ago' },
];

export default function Navbar() {
  return (
    <header className="navbar sticky top-0 pt-4 px-6 pb-0 z-20 bg-transparent">
      <div className="navbar__inner flex align-center justify-between gap-6 py-3 px-5 rounded-full shadow-md">
        <Link to="/" className="navbar__logo flex align-center gap-2 whitespace-nowrap">
          <img src="/images/pawicon.png" alt="icon" />
          <span className="font-cherry text-xl">Paw<span className="text-froly-400">Borrow</span></span>
        </Link>

        <nav className="navbar__links font-poppins" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
            Home
          </NavLink>
          <NavLink to="/pets" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Pets
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "is-active" : "")}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Contact Us
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <div className="navbar__search">
            <input type="search" placeholder="Search products..." aria-label="Search" />
            <button aria-label="Search">
              <Search size={18} />
            </button>
          </div>

          <NotificationsDropdown notifications={NOTIFICATIONS} />

          {/*<button className="navbar__icon-btn" aria-label="Saved pets">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s-7.5-4.6-10-9.1C.4 8.3 2 4.5 5.7 4c2.1-.3 4 .8 6.3 3.1C14.3 4.8 16.2 3.7 18.3 4c3.7.5 5.3 4.3 3.7 7.9C19.5 16.4 12 21 12 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <Link to="/booking" className="navbar__icon-btn navbar__icon-btn--coral" aria-label="Quick booking">
            <svg viewBox="0 0 64 64" width="18" height="18">
              <ellipse cx="32" cy="40" rx="15" ry="12" fill="currentColor" />
              <ellipse cx="14" cy="24" rx="6" ry="8" fill="currentColor" />
              <ellipse cx="27" cy="14" rx="6.5" ry="8.5" fill="currentColor" />
              <ellipse cx="41" cy="14" rx="6.5" ry="8.5" fill="currentColor" />
              <ellipse cx="52" cy="26" rx="6" ry="8" fill="currentColor" />
            </svg>
          </Link> */}

          <NavLink to="/login" className="navbar__icon-btn" aria-label="Sign in">
            <UserRound size={18} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}