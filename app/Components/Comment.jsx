import React, { useState } from "react";
import moment from "moment";
import { Paper, Slider, Typography } from "@material-ui/core";
import Link from "react-router-dom/Link";

const currentTime = moment();
const createSubComments = comments => {
  if (comments) {
    return comments.map(comment => (
      <Comment comment={comment} key={comment.id}></Comment>
    ));
  }
};

const Comment = ({ comment }) => {
  const [visibility, setVisibility] = useState(true);
  return (
    <div className="comment">
      <Paper className="comment-card">
        <div className="comment-user-info">
          <span>by</span>
          <span>
            <Link
              className={"user-name-display"}
              to={{
                pathname: "/user",
                search: `?userId=${comment.by}`
              }}
            >
              {comment.by}
            </Link>
          </span>
          <span>{moment.unix(comment.time).from(currentTime)}</span>
          {!visibility && (
            <span
              className={"comment-expander mdi mdi-plus-box-outline"}
              onClick={setVisibility.bind(this, true)}
            >
              {" "}
            </span>
          )}
        </div>
        {visibility && (
          <div
            className="comment-data"
            dangerouslySetInnerHTML={{ __html: comment.text }}
          ></div>
        )}
      </Paper>
      {visibility && (
        <div className={"comment-children-container"}>
          <div
            className={"comment-minimizer"}
            onClick={setVisibility.bind(this, false)}
          />
          <div className="comment-children">
            {createSubComments(comment.kids)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
