/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

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
}) => <div id="page-nḁvigation">{showNext && <LoadingSpinner />}</div>;

export default withRouter(connect(mapStateToProps)(PageNavigation));
