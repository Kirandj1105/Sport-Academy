import React from 'react';
import './css/WorkInProgress.css';

const WorkInProgress = () => {
  return (
    <div className="work-in-progress-container">
<div className="wip-description">
      <h1 className="wip-heading">🚧 Under Construction 🚧</h1>
      <p className="wip-paragraph">Hello there!</p>
      <p className="wip-paragraph">We're working hard to enhance your experience on our website. While this page is under construction, feel free to explore the many other exciting features and content our site has to offer. We appreciate your patience and can't wait to unveil the new and improved version soon!</p>
      <p className="wip-paragraph">Thank you for being a part of our journey.</p>
      <p className="wip-paragraph">- [Lakshya Academy Team]</p>
      </div>
      <div className="image-container">
      <img src="../images/Maintenance.png" alt="Under Construction" className="wip-image"/>
      </div>
      
    </div>
  );
};

export default WorkInProgress;
