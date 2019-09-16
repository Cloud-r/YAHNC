/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import StoriesPage from './StoriesPage';
import { ChangeTab } from '../Actions/tabActions';
import { ClearStories } from '../Actions/pageActions';

const mapStateToProps = (state, props) => ({
  category: props.match.params.category,
});

// TODO Make data load based on the location attr in the html and remanme it from change tab
// Load the approppriate stories for the selected category ex:hot,new etc
// By default load the top category
const StoriesTab = ({ category = 'top', dispatch }) => {
  useEffect(() => {
    dispatch(ClearStories());
    dispatch(ChangeTab(category));
  });
  return <StoriesPage />;
};

// TODO check if this has to be connected to the store
export default connect(mapStateToProps)(StoriesTab);
