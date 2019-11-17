import React, { useEffect } from "react";
import StoryCard from "./StoryCard";
import { connect } from "react-redux";
import { LoadStoryFromId, ClearCurrentStory } from "../Actions/pageActions";
import Comment from "./Comment";
import ScaleLoader from "react-spinners/ScaleLoader";

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
  return (
    <div id={"story-with-comments-page"}>
      {story && (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div id={"story-with-comments-page-story-card"}>
            <StoryCard info={story} />
          </div>
          <div id="comment-container">{createComments(story.kids)}</div>
        </div>
      )}
      <ScaleLoader
        sizeUnit={"px"}
        size={50}
        color={"#4fbcff"}
        loading={!story}
      />
    </div>
  );
};

const connectedComponent = connect(mapStateToProps)(StoryWithComments);

export default connectedComponent;
