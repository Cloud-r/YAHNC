import axios, { CancelToken } from "axios";

let loadTabCancel;
let loadStoriesCancel;

const fetchStoryInstance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/item/"
});

const fetchUserDetails = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0/user/"
});

const getUrl = type => {
  switch (type) {
    case "top":
      return "https://hacker-news.firebaseio.com/v0/topstories.json";
    case "new":
      return "https://hacker-news.firebaseio.com/v0/newstories.json";
    case "best":
      return "https://hacker-news.firebaseio.com/v0/beststories.json";
    case "ask":
      return "https://hacker-news.firebaseio.com/v0/askstories.json";
    case "show":
      return "https://hacker-news.firebaseio.com/v0/showstories.json";
    case "jobs":
      return "https://hacker-news.firebaseio.com/v0/jobstories.json";
    default:
      return "https://hacker-news.firebaseio.com/v0/topstories.json";
  }
};
const LoadStories = type => {
  if (loadTabCancel) {
    loadTabCancel.cancel();
  }
  loadTabCancel = CancelToken.source();
  const url = getUrl(type);
  return axios
    .get(url, { cancelToken: loadTabCancel.token })
    .then(({ data }) => data)
    .catch(err => {
      if (axios.isCancel(err)) {
        console.log("cancelled");
      } else {
        console.log(err);
      }
    });
};

const LoadStoriesFromIds = (startingCount = 0, Ids) => {
  if (loadStoriesCancel) {
    loadStoriesCancel.cancel();
  }
  loadStoriesCancel = CancelToken.source();
  const resultPromise = Ids.map(id =>
    fetchStoryInstance.get(`${id}.json`, {
      cancelToken: loadStoriesCancel.token
    })
  );
  return axios
    .all(resultPromise)
    .then(results =>
      results.map(({ data }, index) => ({
        ...data,
        displayId: index + startingCount
      }))
    )
    .catch(err => {
      if (axios.isCancel(err)) {
        console.log("cancelled");
      } else {
        console.log(err);
      }
    });
};

const LoadComments = (commentIds = []) => {
  const promiseList = commentIds.map(id =>
    fetchStoryInstance.get(`${id}.json`)
  );
  return axios
    .all(promiseList)
    .then(comments => {
      const childPromiseList = [];
      comments.forEach(({ data: comment }) => {
        if (comment.kids) {
          let promise = LoadComments(comment.kids);
          promise.then(data => {
            comment.kids = data;
          });
          childPromiseList.push(promise);
        }
      });
      return axios
        .all(childPromiseList)
        .then(() => comments.map(({ data }) => data));
    })
    .catch(() => console.log("comment load failed"));
};

const LoadStory = storyId => {
  return fetchStoryInstance.get(`${storyId}.json`).then(({ data }) => data);
};

const LoadUserDetails = userId => {
  return fetchUserDetails.get(`/${userId}.json`).then(({ data }) => data);
};

export { LoadStories, LoadStoriesFromIds, LoadComments, LoadStory, LoadUserDetails };
