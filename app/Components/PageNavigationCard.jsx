/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import { ChangePage } from '../Actions/pageActions';

const mapStateToProps = (state) => ({
  storyIds: state.tab.storyIds,
  showNext: state.tab.totalPages >= state.page.pageNo + 1,
  showBack: state.page.pageNo !== 1,
  currentPage: state.page.pageNo,
});

const navButtonClick = (storyIds, toPage, dispatch) => {
  dispatch(ChangePage(storyIds, toPage));
};
const PageNavigation = ({ showBack, showNext, currentPage, dispatch, storyIds }) => (
  <div id="page-navigation">
    {showBack && (
      <span
        id="back-button"
        onClick={navButtonClick.bind(this, storyIds, currentPage - 1, dispatch)}
      >
        Back
      </span>
    )}
    {showNext && (
      <span
        id="next-button"
        onClick={navButtonClick.bind(this, storyIds, currentPage + 1, dispatch)}
      >
        Next
      </span>
    )}
  </div>
);

export default connect(mapStateToProps)(PageNavigation);
