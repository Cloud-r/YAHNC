import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StoryCard from './StoryCard';
import { ChangePage } from '../Actions/pageActions';

const mapStateToProps = (state, props) => ({
  storyIds: state.tab.storyIds,
  storiesList: state.page.storiesList,
  pageNo: state.page.pageNo,
  props,
});

const createStoryCards = (stories) =>
  stories.map((details, index) => <StoryCard key={index} info={details} />);

const ContentDiv = ({ storyIds, dispatch, storiesList, pageNo }) => {
  useEffect(() => {
    dispatch(ChangePage(storyIds, 1));
  }, [storyIds]);
  if (storyIds && storiesList.length > 0) {
    return (
      <>
        <div>{createStoryCards(storiesList)}</div>
        <div>more...</div>
      </>
    );
  }
  return 'Loading...';
};

export default connect(mapStateToProps)(ContentDiv);
