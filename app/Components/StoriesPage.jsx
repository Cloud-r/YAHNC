import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import StoryCard from "./StoryCard";
import { ChangePage } from "../Actions/pageActions";
import PageNavigation from "./PageNavigationCard";
import LoadingSpinner from "./LoadingSpinner";
import TabNavigationCard from "./TabNavigationCard";

const mapStateToProps = (state, props) => ({
  storyIds: state.tab.storyIds,
  storiesList: state.page.storiesList
});

const createStoryCards = (stories, page) =>
  stories.map((details, index) => {
    return (
      <div
        className={`intersection-observer-wrapper-${Math.floor(index / 30) +
          1}`}
      >
        <StoryCard key={details.displayId} info={details} />
      </div>
    );
  });

let intersectionObserverOptions = {
  rootMargin: "0px",
  threshold: 1
};

let intersectionObserver;
let pagesLoaded = 1;
let storiesViewed = 0;
let currentStoryIds = [];

// Get the page number from the address bar or the link
const StoriesTab = props => {
  let { storyIds, dispatch, storiesList = [] } = props;
  var intersectionObsFn = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        storiesViewed++;
        observer.unobserve(entry.target);
      }
    });
    if (storiesViewed > 22) {
      dispatch(ChangePage(currentStoryIds, pagesLoaded + 1));
      pagesLoaded++;
      storiesViewed = 0;
    }
  };

  // by default load the first page
  useEffect(() => {
    currentStoryIds = storyIds;
    pagesLoaded = 1;
    storiesViewed = 0;
    dispatch(ChangePage(storyIds, pagesLoaded));
  }, [storyIds]);

  //add observers
  useEffect(() => {
    intersectionObserver = new IntersectionObserver(
      intersectionObsFn,
      intersectionObserverOptions
    );
  }, []);

  //adding observers to the story cards
  useEffect(() => {
    console.log(storyIds);
    document
      .querySelectorAll(`.intersection-observer-wrapper-${pagesLoaded}`)
      .forEach(element => {
        intersectionObserver.observe(element);
      });
  }, [storiesList]);

  // if the story ids and the story data are available load the data
  return (
    <div id="story-card-container">
      <div id="left-panel">
        <TabNavigationCard />
      </div>
      <div id="middle-panel">
        {storyIds && storiesList.length > 0 && (
          <>
            {createStoryCards(storiesList, pagesLoaded)}
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
