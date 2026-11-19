export default function Dashboard() {
  const stats = [
    {
      title: "Total Workers",
      value: "125",
      icon: "bi-people",
      color: "blue",
      change: "+12%",
    },
    {
      title: "Active Workers",
      value: "98",
      icon: "bi-person-check",
      color: "green",
      change: "+8%",
    },
    {
      title: "Total Monthly Amount",
      value: "₹2,45,000",
      icon: "bi-currency-rupee",
      color: "orange",
      change: "+5%",
    },
    {
      title: "Pending Payments",
      value: "₹35,000",
      icon: "bi-wallet2",
      color: "red",
      change: "-3%",
    },
  ];

  return (
    <div className="dashboard">
      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>Welcome back! Here's your business overview.</p>
        </div>

        <button className="primary-btn">
          <i className="bi bi-plus-lg"></i>
          Add Entry
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.title}>
            <div className="stat-top">
              <div className={`stat-icon ${stat.color}`}>
                <i className={`bi ${stat.icon}`}></i>
              </div>

              <span className="stat-change">{stat.change}</span>
            </div>

            <p>{stat.title}</p>
            <h3>{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="content-card">
        <div className="card-heading">
          <div>
            <h4>Recent Entries</h4>
            <p>Latest worker attendance and payment records</p>
          </div>

          <button className="outline-btn">View All</button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Worker</th>
                <th>Date</th>
                <th>Baad</th>
                <th>Rate</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul Patel</td>
                <td>18 Nov 2026</td>
                <td>0</td>
                <td>₹500</td>
                <td>₹500</td>
                <td>
                  <span className="status-badge success">Recorded</span>
                </td>
              </tr>

              <tr>
                <td>Amit Sharma</td>
                <td>18 Nov 2026</td>
                <td>1</td>
                <td>₹600</td>
                <td>₹600</td>
                <td>
                  <span className="status-badge success">Recorded</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
