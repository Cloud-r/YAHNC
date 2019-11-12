import React, { useEffect } from "react";
import StoryCard from "./StoryCard";
import { connect } from "react-redux";
import { LoadStoryFromId, ClearCurrentStory } from "../Actions/pageActions";
import Comment from "./Comment";

const mapStateToProps = ({ page: { currentStory: story } }) => {
  let params = new URL(document.location).searchParams;
  let storyId = params.get("storyId");
  return {
    story,
    storyId
  };
};

const createComments = comments => {
  if (comments) {
    return comments.map(comment => (
      <Comment comment={comment} key={comment.id}></Comment>
    ));
  }
};
const StoryWithComments = ({ story, storyId, dispatch }) => {
  useEffect(() => {
    dispatch(ClearCurrentStory());
    dispatch(LoadStoryFromId(storyId));
  }, []);
  if (story) {
    return (
      <div>
        <StoryCard info={story} />
        {createComments(story.kids)}
      </div>
    );
  }
  return <div>Loading...</div>;
};

const connectedComponent = connect(mapStateToProps)(StoryWithComments);

export default connectedComponent;
