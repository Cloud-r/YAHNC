import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StoryCard from './StoryCard';
import { ChangePage } from '../Actions/pageActions';
import PageNavigation from './PageNavigationCard';

const mapStateToProps = (state) => ({
  storyIds: state.tab.storyIds,
  storiesList: state.page.storiesList,
});

const createStoryCards = (stories) =>
  stories.map((details, index) => <StoryCard key={index} info={details} />);

const ContentDiv = ({ storyIds, dispatch, storiesList }) => {
  useEffect(() => {
    dispatch(ChangePage(storyIds, 1));
  }, [storyIds]);
  if (storyIds && storiesList.length > 0) {
    return (
      <>
        <div>{createStoryCards(storiesList)}</div>
        <PageNavigation />
      </>
    );
  }
  return 'Loading...';
};

export default connect(mapStateToProps)(ContentDiv);
