import { LoadStories } from '../Apis/FirebaseApis';

// Fired when the user clicks on the tab.
// This loads top 500 relevant story ids for that category and passes it on
const ChangeTab = (tab) => (dispatch) => {
  LoadStories(tab).then((storyIds) => {
    dispatch({
      type: 'TAB_SWITCH',
      data: {
        tab,
        storyIds,
      },
    });
  });
};

const ClearIds = () => ({
  type: 'CLEAR_STORIES',
});

export { ChangeTab, ClearIds };
