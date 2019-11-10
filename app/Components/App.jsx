import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HeaderCard from "./HeaderCard";
import TabNavigationCard from "./TabNavigationCard";
import StoriesTab from "./StoriesTab";
import StoryWithComments from './StoryWIthComments';

const main = () => (
  <div id="main-div">
    <HeaderCard />
    <div id="content-div">
      <BrowserRouter>
        <>
          <TabNavigationCard />
          <Switch>
            <Route path="/stories/:category" component={StoriesTab} />
            <Route path="/story" component={StoryWithComments} />
            <Redirect exact from="/" to="stories/top" />
          </Switch>
        </>
      </BrowserRouter>
    </div>
  </div>
);

export default main;
