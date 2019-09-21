/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StoryCard from './StoryCard';
import { ChangePage } from '../Actions/pageActions';
import PageNavigation from './PageNavigationCard';
import LoadingSpinner from './LoadingSpinner';

const mapStateToProps = (state, props) => ({
  storyIds: state.tab.storyIds,
  storiesList: state.page.storiesList,
  pageToLoad: props.pageToLoad,
});

const createStoryCards = (stories) =>
  stories.map((details, index) => <StoryCard key={index} info={details} />);

// Get the page number from the address bar or the link
const StoriesTab = ({ storyIds, pageToLoad, dispatch, storiesList = [] }) => {
  // by default load the first page
  useEffect(() => {
    dispatch(ChangePage(storyIds, pageToLoad));
  }, [storyIds]);

  // if the story ids and the story data are available load the data
  if (storyIds && storiesList.length > 0) {
    return (
      <>
        <div>{createStoryCards(storiesList)}</div>
        <PageNavigation />
      </>
    );
  }

  return <LoadingSpinner />;
};

export default connect(mapStateToProps)(StoriesTab);
