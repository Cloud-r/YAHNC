import React from 'react';

const StoryCard = ({ info: { id, title, score, by, descendants, url } }) => (
  <div className="story-card">
    <div className="story-id-div">
      <span>{id}</span>
    </div>
    <div>
      <div className="header-line">
        <a className="card-title" href={url}>
          {title}
        </a>
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
