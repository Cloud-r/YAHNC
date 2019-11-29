import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "@material-ui/core";

const TabNavigationCard = () => (
  <Card id="tab-navigation-container">
    <ul id="tab-nav-card-container">
      <li>
        <NavLink activeClassName="selected" to="/stories/top">
          <span className="mdi mdi-trending-up"></span> Top
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/stories/new">
          <span className="mdi mdi-new-box"></span> New
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/stories/best">
          <span className="mdi mdi-thumb-up-outline"></span> Best
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/stories/ask">
          <span className="mdi mdi-comment-question-outline"></span> Ask
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/stories/show">
          <span className="mdi mdi-presentation"></span> Show
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to="/stories/jobs">
          <span className="mdi mdi-briefcase"></span> Jobs
        </NavLink>
      </li>
    </ul>
  </Card>
);

export default TabNavigationCard;
