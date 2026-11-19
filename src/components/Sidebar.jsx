import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: "bi-grid",
    path: "/",
  },
  {
    title: "Workers",
    icon: "bi-people",
    path: "/workers",
  },
  {
    title: "Daily Entries",
    icon: "bi-calendar-check",
    path: "/entries",
  },
  {
    title: "Payments",
    icon: "bi-wallet2",
    path: "/payments",
  },
  {
    title: "Reports",
    icon: "bi-bar-chart",
    path: "/reports",
  },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? "show" : ""}`}>
      <div className="sidebar-brand">
        <div className="brand-icon">
          <i className="bi bi-buildings"></i>
        </div>

        <span className="brand-name">
          Worker<span>Pro</span>
        </span>

        <button className="mobile-close" onClick={onClose}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      <div className="sidebar-section">
        <small>MAIN MENU</small>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
            onClick={onClose}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <NavLink to="/settings" className="sidebar-link" onClick={onClose}>
          <i className="bi bi-gear"></i>
          <span>Settings</span>
        </NavLink>

        <div className="sidebar-user">
          <div className="user-avatar">AD</div>
          <div className="user-details">
            <strong>Administrator</strong>
            <small>System Admin</small>
          </div>
        </div>
      </div>
    </aside>
  );
}
