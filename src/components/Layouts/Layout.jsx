
import { useState } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`app-layout ${collapsed ? "sidebar-collapsed" : ""}`}>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="main-wrapper">

        <Topbar
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onCollapse={() => setCollapsed(!collapsed)}
        />

        <main className="main-content">
          {children}
        </main>

      </div>
    </div>
  );
}
