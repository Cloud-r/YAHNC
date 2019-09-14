import React from 'react';
import TabContainer from './Tab';

const main = () => (
  <div id="main-div">
    <div id="title-div">Hacker News</div>
    <div id="content-div">
      <TabContainer />
    </div>
    <hr id="footer-line" />
    <div id="footer-div">Guidelines blah blah blah</div>
  </div>
);

export default main;
