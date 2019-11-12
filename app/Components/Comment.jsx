import React from "react";
import moment from "moment";
import { Paper } from "@material-ui/core";

const currentTime = moment();
const createSubComments = comments => {
  if (comments) {
    return comments.map(comment => (
      <Comment comment={comment} key={comment.id}></Comment>
    ));
  }
};
const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <Paper className="comment-card">
        <div className="comment-user-info">{`by ${comment.by} ${moment
          .unix(comment.time)
          .from(currentTime)}`}</div>
        <div
          className="comment-data"
          dangerouslySetInnerHTML={{ __html: comment.text }}
        ></div>
      </Paper>

      <div className="comment-children">{createSubComments(comment.kids)}</div>
    </div>
  );
};

export default Comment;
