import React, { useEffect } from "react";
import { connect } from "react-redux";
import StoryCard from "./StoryCard";
import { ChangePage } from "../Actions/pageActions";
import PageNavigation from "./PageNavigationCard";
import LoadingSpinner from "./LoadingSpinner";
import TabNavigationCard from "./TabNavigationCard";

const mapStateToProps = (state, props) => ({
  storyIds: state.tab.storyIds,
  storiesList: state.page.storiesList,
  pageToLoad: props.pageToLoad
});

const createStoryCards = stories =>
  stories.map(details => <StoryCard key={details.displayId} info={details} />);

// Get the page number from the address bar or the link
const StoriesTab = ({ storyIds, pageToLoad, dispatch, storiesList = [] }) => {
  // by default load the first page
  useEffect(() => {
    dispatch(ChangePage(storyIds, pageToLoad));
  }, [storyIds]);

  // if the story ids and the story data are available load the data
  return (
    <div id="story-card-container">
      <div id="left-panel">
        <TabNavigationCard />
      </div>
      <div id="middle-panel">
        {storyIds && storiesList.length > 0 && (
          <>
            {createStoryCards(storiesList)}
            <PageNavigation />
          </>
        )}
        {(!storyIds || storiesList.length == 0) && <LoadingSpinner />}
      </div>

      <div id="right-panel"></div>
    </div>
  );
};

export default connect(mapStateToProps)(StoriesTab);
