import React from "react";
import { SlowMotionVideo } from "@material-ui/icons";
import { Link } from "react-router-dom";

const HeaderCard = () => (
  <div id="title-div">
    <SlowMotionVideo id="header-icon" />
    <Link
      to={{ pathname: "/" }}
      style={{
        textDecoration: "none",
        color: "white",
        cursor: "pointer"
      }}
    >
      Chronos
    </Link>
  </div>
);

export default HeaderCard;
