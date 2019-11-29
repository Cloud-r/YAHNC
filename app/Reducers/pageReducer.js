const loadReducer = (state = { storiesList: [], pageNo: null }, action) => {
  switch (action.type) {
    case "PAGE_CHANGED":
      return {
        ...state,
        storiesList: state.storiesList.concat(action.data.storiesList),
        pageNo: action.data.pageNo
      };
    case "CLEAR_STORIES":
      return {
        ...state,
        storiesList: []
      };
    case "LOAD_STORY_WITH_COMMENTS":
      return {
        ...state,
        currentStory: action.data.story
      };
    case "LOAD_USER_DATA":
      return {
        ...state,
        userData: action.data.userDetails
      };
    case "CLEAR_CURRENT_STORY":
      return {
        ...state,
        currentStory: null
      };
    case "CLEAR_USER_DATA":
      return {
        ...state,
        userData: undefined
      };
    default:
      return state;
  }
};

export default loadReducer;
