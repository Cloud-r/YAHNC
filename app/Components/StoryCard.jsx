import React from "react";
import { Link } from "react-router-dom";

const StoryCard = ({
  info: { displayId, id, title, score, by, descendants, url }
}) => (
  <div className="story-card">
    <div className="story-id-div">
      <span>{displayId}</span>
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
        <Link to={{ pathname: "/story", search: `?storyId=${id}` }}>
          <span>{`${descendants} comments`}</span>
        </Link>
      </div>
    </div>
  </div>
);

export default StoryCard;
