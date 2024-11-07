import React from 'react';
import '../css/Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <ul>
          <li>Overview</li>
          <li>Settings</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </aside>
      <main className="dashboard-content">
        <h2>Your Dashboard</h2>
        <div className="dashboard-cards">
          <div className="dashboard-card">Card 1</div>
          <div className="dashboard-card">Card 2</div>
          <div className="dashboard-card">Card 3</div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
