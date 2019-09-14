const loadReducer = (state = { storiesList: [], pageNo: null, overAllStories: {} }, action) => {
  switch (action.type) {
    case 'PAGE_CHANGED':
      return {
        ...state,
        overAllStories: {
          ...state.overAllStories,
          pageNo: action.data.storiesList,
        },
        storiesList: action.data.storiesList,
        pageNo: action.data.pageNo,
      };
    default:
      return state;
  }
};

export default loadReducer;
