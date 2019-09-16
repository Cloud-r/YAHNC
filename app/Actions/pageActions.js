import { LoadStoriesFromIds } from '../Apis/FirebaseApis';

const ChangePage = (storyIds, page) => {
  const offSet = (page - 1) * 30;
  const storiesToLoad = storyIds.slice(offSet, offSet + 30);
  return (dispatch) => {
    LoadStoriesFromIds(offSet + 1, storiesToLoad).then((stories) =>
      dispatch({
        type: 'PAGE_CHANGED',
        data: {
          pageNo: page,
          storiesList: stories,
        },
      }),
    );
  };
};

const ClearStories = () => ({
  type: 'CLEAR_STORIES',
});

export { ChangePage, ClearStories };
