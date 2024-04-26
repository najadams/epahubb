import React from 'react'
import './styles.css'

const Sidear = () => {
  return (
    <div className="sidebar">
        <div className="logo" style={{ display: "flex", gap: 10 }}>
          <img src="./logo.svg" alt="logo" />
          <h1>Najm</h1>
        </div>

        <div className="list">
          <ul>
            <li>
              <span>
                <img src="./dashboard.svg" alt="dashboard" />
                <h4>Dashboard</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./statistics.svg" alt="dashboard" />
                <h4>Statistics</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./leaderboard.svg" alt="dashboard" />
                <h4>LeaderBoard</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./competition.svg" alt="dashboard" />
                <h4>Competition</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./certificate.svg" alt="dashboard" />
                <h4>Certificate</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./Billing.svg" alt="dashboard" />
                <h4>Billing</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./Downloads.svg" alt="dashboard" />
                <h4>Downloads</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./dashboard.svg" alt="dashboard" />
                <h4>Affiliate Portals</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./howto.svg" alt="dashboard" />
                <h4>How To</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./dashboard.svg" alt="dashboard" />
                <h4>Journaling Analysis</h4>
              </span>
            </li>
            <li>
              <span>
                <img src="./settings.svg" alt="dashboard" />
                <h4>Personal Settings</h4>
              </span>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Sidear