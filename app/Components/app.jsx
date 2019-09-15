import React from 'react';
import TabContainer from './Tab';
import HeaderCard from './HeaderCard';
import FooterCard from './FooterCard';

const main = () => (
  <div id="main-div">
    <HeaderCard />
    <div id="content-div">
      <TabContainer />
    </div>
    <hr id="footer-line" />
    <FooterCard />
  </div>
);

export default main;
