import React from "react";
import StoryCard from "./StoryCard";

const StoryWithComments = ({ story }) => (
  <div>
    <StoryCard info={story} />
  </div>
);

export default StoryWithComments;
