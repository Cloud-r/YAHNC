const TabReducer = (store = { tab: 'TOP', storyIds: [] }, action) => {
  switch (action.type) {
    case 'TAB_SWITCH':
      return { ...store, tab: action.data.tab, storyIds: action.data.storyIds };
    case 'CLEAR_STORIES':
      return {
        ...store,
        storyIds: [],
      };
    default:
      return store;
  }
};

export default TabReducer;
