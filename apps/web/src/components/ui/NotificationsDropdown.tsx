import { useEffect, useRef, useState } from "react";

export type NotificationItem = {
  id: number | string;
  name: string;
  action: string;
  time: string;
};

type NotificationsDropdownProps = {
  notifications: NotificationItem[];
};

export default function NotificationsDropdown({ notifications }: NotificationsDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar__notif" ref={ref}>
      <button
        className="navbar__icon-btn"
        aria-label="Notifications"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 8a6 6 0 0 1 12 0c0 4 1.5 5.5 2 6H4c.5-.5 2-2 2-6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M10 19a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="navbar__notif-dropdown">
          <span className="navbar__notif-arrow" aria-hidden="true" />
          <p className="navbar__notif-title">Notifications</p>
          {notifications.length === 0 ? (
            <p className="navbar__notif-empty">You're all caught up.</p>
          ) : (
            <ul>
              {notifications.map((n) => (
                <li key={n.id}>
                  <span className="navbar__notif-avatar" aria-hidden="true" />
                  <div className="navbar__notif-body">
                    <p>
                      <strong>{n.name}</strong> {n.action}
                    </p>
                    <span className="navbar__notif-time">{n.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}