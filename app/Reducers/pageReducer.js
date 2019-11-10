const loadReducer = (state = { storiesList: [], pageNo: null }, action) => {
  switch (action.type) {
    case "PAGE_CHANGED":
      return {
        ...state,
        storiesList: action.data.storiesList,
        pageNo: action.data.pageNo
      };
    case "CLEAR_STORIES":
      return {
        ...state,
        storiesList: []
      };
    default:
      return state;
  }
};

export default loadReducer;
