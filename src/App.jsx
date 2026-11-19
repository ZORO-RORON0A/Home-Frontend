import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layouts/Layout";
import { useState } from "react";
import Login from "./pages/Login";

function Placeholder({ title }) {
  return (
    <div className="content-card">
      <h3>{title}</h3>
      <p>This page is under development.</p>
    </div>
  );
}

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  if (!authenticated) {
    return <Login setAuthenticated={setAuthenticated} />;
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workers" element={<Placeholder title="Workers" />} />
        <Route
          path="/entries"
          element={<Placeholder title="Daily Entries" />}
        />
        <Route path="/payments" element={<Placeholder title="Payments" />} />
        <Route path="/reports" element={<Placeholder title="Reports" />} />
        <Route path="/settings" element={<Placeholder title="Settings" />} />
      </Routes>
    </Layout>
  );
}
