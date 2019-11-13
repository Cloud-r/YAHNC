import React, { useEffect } from "react";
import { connect } from "react-redux";
import StoriesPage from "./StoriesPage";
import { ChangeTab } from "../Actions/tabActions";
import { ClearStories } from "../Actions/pageActions";

const mapStateToProps = (state, props) => ({
  category: props.match.params.category,
  pageToLoad: Number(new URLSearchParams(props.location.search).get("p")) || 1
});

const StoriesTab = ({ category = "top", pageToLoad, dispatch }) => {
  useEffect(() => {
    dispatch(ClearStories());
    dispatch(ChangeTab(category));
  });
  return <StoriesPage pageToLoad={pageToLoad} />;
};

// TODO check if this has to be connected to the store
export default connect(mapStateToProps)(StoriesTab);
