/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { ClearStories } from "../Actions/pageActions";

const mapStateToProps = (state, props) => ({
  showNext: state.tab.totalPages >= state.page.pageNo + 1,
  showBack: state.page.pageNo !== 1,
  currentPage: state.page.pageNo,
  currentLocation: props.match.url
});

const PageNavigation = ({
  showBack,
  showNext,
  currentPage,
  currentLocation,
  dispatch
}) => (
  <div id="page-nḁvigation">
    {showBack && (
      <span className="bottom-navigation-button" id="back-button">
        <Link
          to={{ pathName: currentLocation, search: `?p=${currentPage - 1}` }}
          onClick={dispatch.bind(this, ClearStories())}
        >
          Back
        </Link>
      </span>
    )}
    {showNext && (
      <span className="bottom-navigation-button" id="next-button">
        <Link
          to={{ pathName: currentLocation, search: `?p=${currentPage + 1}` }}
          onClick={dispatch.bind(this, ClearStories())}
        >
          Next
        </Link>
      </span>
    )}
  </div>
);

export default withRouter(connect(mapStateToProps)(PageNavigation));
