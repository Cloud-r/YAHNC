import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HeaderCard from "./HeaderCard";
import StoriesTab from "./StoriesTab";
import StoryWithComments from "./StoryWIthComments";
import UserPage from "./UserPage";

const main = () => (
  <div id="main-div">
    <div id="content-div">
      <BrowserRouter>
        <>
          <HeaderCard />
          <Switch>
            <Route path="/stories/:category" component={StoriesTab} />
            <Route path="/story" component={StoryWithComments} />
            <Route path="/user" component={UserPage} />
            <Redirect exact from="/" to="stories/top" />
          </Switch>
        </>
      </BrowserRouter>
    </div>
  </div>
);

export default main;
