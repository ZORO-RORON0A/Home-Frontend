export default function Topbar({ onMenuClick, onCollapse }) {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="icon-btn mobile-menu" onClick={onMenuClick}>
          <i className="bi bi-list"></i>
        </button>

        <button className="icon-btn desktop-menu" onClick={onCollapse}>
          <i className="bi bi-layout-sidebar"></i>
        </button>

        <div className="topbar-search">
          <i className="bi bi-search"></i>
          <input type="search" placeholder="Search anything..." />
          <span>Ctrl K</span>
        </div>
      </div>

      <div className="topbar-right">
        <button className="icon-btn notification-btn">
          <i className="bi bi-bell"></i>
          <span className="notification-dot"></span>
        </button>

        <div className="topbar-profile">
          <div className="user-avatar">AD</div>
          <div className="profile-info">
            <strong>Admin</strong>
            <small>Administrator</small>
          </div>
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </header>
  );
}
