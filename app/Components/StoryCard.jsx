import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Paper, Typography } from "@material-ui/core";

const currentTime = moment();
const StoryCard = ({
  info: { displayId, id, title, score, by, descendants, url, time }
}) => (
  <Paper className="story-card paper-card">
    <div>
      <div>
        <a className="card-title" href={url}>
          <Typography variant="h6" className="header-line">
            {title}
          </Typography>
        </a>
      </div>
      <div>
        <Typography variant="subtitle1" className="details-line">
          <span>{`${score} points`}</span>
          <span>{`by ${by}`}</span>
          <span>{moment.unix(time).from(currentTime)}</span>
          <Link
            className="comment-link"
            to={{ pathname: "/story", search: `?storyId=${id}` }}
          >
            <span>{`${descendants || 0} comments`}</span>
          </Link>
        </Typography>
      </div>
    </div>
  </Paper>
);

export default StoryCard;
