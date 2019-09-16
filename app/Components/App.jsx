import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import HeaderCard from './HeaderCard';
import FooterCard from './FooterCard';
import TabNavigationCard from './TabNavigationCard';
import StoriesTab from './StoriesTab';

const main = () => (
  <div id="main-div">
    <HeaderCard />
    <div id="content-div">
      <BrowserRouter>
        <>
          <TabNavigationCard />
          <Switch>
            <Route path="/stories/:category" component={StoriesTab} />
            <Redirect exact from="/" to="stories/top" />
          </Switch>
        </>
      </BrowserRouter>
    </div>
    <hr id="footer-line" />
    <FooterCard />
  </div>
);

export default main;
