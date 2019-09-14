import React from 'react';

const StoryCard = ({ info: { id, title, score, by, descendants } }) => (
  <div className="story-card">
    <div className="story-id-div">
      <span>{id}</span>
    </div>
    <div>
      <div className="header-line">
        <span>{title}</span>
      </div>
      <div className="details-line">
        <span>{`${score} points`}</span>
        <span>{`by ${by}`}</span>
        <span>hide</span>
        <span>{`${descendants} commnets`}</span>
      </div>
    </div>
  </div>
);

export default StoryCard;
