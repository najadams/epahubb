import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="top-bar">
        <span>failed</span>
        <span className="avatar">
          <img src="./fifth.svg" alt="fifth" />
        </span>
        <span className="avatar">
          <img src="./fourth.svg" alt="fourth" />
        </span>
        <span className="avatar">
          <img src="./third.svg" alt="third" />
        </span>
        <span className="avatar">
          <img src="./second.svg" alt="coco" />
        </span>
        <span className="avatar">
          <img src="./avater.jpg" alt="coco" />
        </span>
      </div>

      <div className="main">
        <div className="info">
          <span className="avatar">
            <img
              src="./avater.jpg"
              style={{ height: 70, width: 70 }}
              alt="coco"
            />
            <span className="active"></span>
          </span>
          <span className="detail">
            <h4>Josial Oromoje</h4>
            <p>Account 2063834</p>
          </span>
        </div>
      </div>

      <div className="navigators">
        <ol>
          <li>My Account</li>
          <li>Update Password</li>
          <li>Verification and Control</li>
        </ol>
      </div>

      <div className="verification">
        <p>Verification</p>
        <p>KYC subscription</p>
      </div>

      <div className="grid-container">
        <div className="grid-item">
          <h6>Documentations</h6>
        </div>
        <div className="grid-item">
          <h4>KYC is submission is available</h4>
          <p>
            As you are now in the live simulated state you can pass verification
            process in order to move to the next step of your challenge. We
            require following documents. When you will be ready to submit click
            the button Get Verified
          </p>
        </div>
        <div className="grid-item">
          <h6>Choose Documents</h6>
        </div>
        <div className="grid-item">
          <select name="coco" className="select">
            <option value="option1"> --Select Document Type--</option>
          </select>
        </div>
        <div className="grid-item">
          <h6>Upload Documents</h6>
        </div>
        <div className="grid-item left">
          <button>Upload</button>
        </div>
      </div>

      <div className="verified">
        <button className="long">Get Verified</button>
      </div>

      <div className="contract">
        <h2>Contract</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Account</th>
              <th>Types</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
        </table>
        <div>
          <hr />
          <h5>Your Contracts will Show here</h5>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Content;
