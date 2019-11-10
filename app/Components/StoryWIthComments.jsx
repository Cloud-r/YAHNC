import React, { useEffect } from "react";
import StoryCard from "./StoryCard";
import { connect } from "react-redux";
import { LoadStoryFromId } from "../Actions/pageActions";

const mapStateToProps = (
  { page: { comments, currentStory: story } },
  { location }
) => {
  let params = new URL(document.location).searchParams;
  let storyId = params.get("storyId");
  return {
    story,
    comments,
    storyId
  };
};

const createComments = comments => {
  return comments.map(comment => <div comment={comment}></div>);
};
const StoryWithComments = ({ story, comments, storyId, dispatch }) => {
  useEffect(() => {
    dispatch(LoadStoryFromId(storyId));
  }, []);
  if (story && comments) {
    return (
      <div>
        <StoryCard info={story} />
        {createComments(comments)}
      </div>
    );
  }
  return <div>Loading...</div>;
};

const connectedComponent = connect(mapStateToProps)(StoryWithComments);

export default connectedComponent;
