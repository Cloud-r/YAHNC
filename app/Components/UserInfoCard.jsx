import React from "react";
import { Card } from "@material-ui/core";
import { serializeDate } from "../helpers/timeConverter";

const UserInfoCard = ({ userData: { id, created, karma, about } }) => {
  return (
    <Card className={"user-profile-card"}>
      <div className={"upper-part"}></div>
      <div className={"user-image"}>
        <Card
          className={"avatar-holder"}
          style={{
            backgroundImage: `url("./avatars/${(karma % 10) +
              1}.png")`
          }}
        ></Card>
        <div>{`u/${id}`}</div>
      </div>

      <div className={"lower-part"}>
        <div className={"user-info-holder"}>
          <div className={"karma-holder"}>
            <b>Karma</b>
            <div>{karma}</div>
          </div>
          <div className={"created-holder"}>
            <b>Created</b>
            <div>{serializeDate(created)}</div>
          </div>
          <div
            className={"about-holder"}
            dangerouslySetInnerHTML={{ __html: about }}
          />
        </div>
      </div>
    </Card>
  );
};

export default UserInfoCard;
