import React from 'react';
import { NavLink } from 'react-router-dom';

const TabNavigationCard = () => (
  <ul id="tab-nav-card-container">
    <li>
      <NavLink activeClassName="selected" to="/stories/top">
        Top
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="selected" to="/stories/new">
        New
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="selected" to="/stories/best">
        Best
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="selected" to="/stories/ask">
        AskHN
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName="selected" to="/comments">
        Commnets
      </NavLink>
    </li>
  </ul>
);

export default TabNavigationCard;
