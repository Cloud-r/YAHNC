import {
  LoadStoriesFromIds,
  LoadComments,
  LoadStory
} from "../Apis/FirebaseApis";

const storiesPerPage = 30;

const ChangePage = (storyIds, page) => {
  const offSet = (page - 1) * storiesPerPage;
  const storiesToLoad = storyIds.slice(offSet, offSet + storiesPerPage);
  return dispatch => {
    LoadStoriesFromIds(offSet + 1, storiesToLoad).then(stories =>
      dispatch({
        type: "PAGE_CHANGED",
        data: {
          pageNo: page,
          storiesList: stories
        }
      })
    );
  };
};

const ClearStories = () => ({
  type: "CLEAR_STORIES"
});

const LoadStoryFromId = storyId => {
  return dispatch => {
    LoadStory(storyId).then(story => {
      LoadComments(story.kids).then(comments => {
        story.kids = comments;
        dispatch({
          type: "LOAD_STORY",
          data: {
            story
          }
        });
      });
    });
  };
};

export { ChangePage, ClearStories, LoadStoryFromId };
