/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ContentDiv from './ContentDiv';
import { ChangeTab, ClearIds } from '../Actions/tabActions';

const mapStateToProps = (state) => ({
  storyList: state.tab.storyIds,
});

const PageTab = ({ dispatch }) => {
  useEffect(() => {
    dispatch(ChangeTab('TOP'));
  }, []);
  const handleTabChange = (tab) => {
    dispatch(ClearIds());
    dispatch(ChangeTab(tab));
  };
  return (
    <>
      <div id="tab-container">
        <span onClick={handleTabChange.bind(this, 'TOP')}>Top</span>
        <span onClick={handleTabChange.bind(this, 'NEW')}>New</span>
        <span onClick={handleTabChange.bind(this, 'BEST')}>Best</span>
        <span onClick={handleTabChange.bind(this, 'PAST')}>Past</span>
        <span onClick={handleTabChange.bind(this, 'COMMENTS')}>Comments</span>
        <span onClick={handleTabChange.bind(this, 'ASK')}>AskHN</span>
      </div>
      <ContentDiv />
    </>
  );
};

export default connect(mapStateToProps)(PageTab);
