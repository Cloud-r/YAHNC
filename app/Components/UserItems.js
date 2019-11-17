import React from "react";
import { serializeDate } from "../helpers/timeConverter";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";

const generateItems = (items, userId) => {
  return items.map(item => {
    if (item.type !== "poll") {
      return (
        <Card className={"user-item-card"}>
          <div className={"user-item-info"}>
            {item.type === "story" ? (
              <>
                <span className="mdi mdi-newspaper"></span>
                <span>
                  <a
                    className={"user-name-display"}
                    href={`/user?userId=${userId}`}
                  >
                    {userId}
                  </a>
                </span>
                <span>created a story</span>
              </>
            ) : (
              <>
                <span className="mdi mdi-comment-text-outline"></span>
                <span>
                  <Link
                    className={"user-name-display"}
                    to={{
                      pathname: "/user",
                      search: `?userId=${userId}`
                    }}
                  >
                    {userId}
                  </Link>
                </span>

                <span>commented</span>
              </>
            )}
            <span>{serializeDate(item.time)}</span>
          </div>
          <div className={"user-item-detail"}>
            {item.title && (
              <>
                <a href={item.url}>{item.title}</a>
              </>
            )}
            {!item.title && (
              <div dangerouslySetInnerHTML={{ __html: item.text }}></div>
            )}
          </div>
        </Card>
      );
    }
  });
};

const userItems = ({ userItems, userId }) => {
  return (
    <div className={"user-items-content"}>
      {generateItems(userItems, userId)}
    </div>
  );
};

export default userItems;
