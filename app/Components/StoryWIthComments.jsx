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
      <div id={"story-with-comments-page"}>
        <div id={"story-with-comments-page-story-card"}>
          <StoryCard info={story} />
        </div>
        <div id="comment-container">{createComments(story.kids)}</div>
      </div>
    );
  }
  return <div>Loading...</div>;
};

const connectedComponent = connect(mapStateToProps)(StoryWithComments);

export default connectedComponent;
