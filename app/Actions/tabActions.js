import { LoadStories } from "../Apis/FirebaseApis";
// Fired when the user clicks on the tab.
// This loads top 500 relevant story ids for that category and passes it on

const ChangeTab = (tab) => (dispatch) => {
  LoadStories(tab).then((storyIds = []) => {
    dispatch({
      type: "TAB_SWITCH",
      data: {
        tab,
        storyIds,
        totalPages: Math.floor(storyIds.length / 30) + (storyIds.length % 30 ? 1 : 0)
      }
    });
  });
};

export { ChangeTab };
