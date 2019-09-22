import axios, { CancelToken } from 'axios';

let loadTabCancel;
let loadStoriesCancel;

const fetchStoryInstance = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/item/',
});

const getUrl = (type) => {
  switch (type) {
    case 'top':
      return 'https://hacker-news.firebaseio.com/v0/topstories.json';
    case 'new':
      return 'https://hacker-news.firebaseio.com/v0/newstories.json';
    case 'best':
      return 'https://hacker-news.firebaseio.com/v0/beststories.json';
    default:
      return 'https://hacker-news.firebaseio.com/v0/topstories.json';
  }
};
const LoadStories = (type) => {
  if (loadTabCancel) {
    loadTabCancel.cancel();
  }
  loadTabCancel = CancelToken.source();
  const url = getUrl(type);
  return axios
    .get(url, { cancelToken: loadTabCancel.token })
    .then(({ data }) => data)
    .catch((err) => {
      if (axios.isCancel(err)) {
        console.log('cancelled');
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
  const resultPromise = Ids.map((id) =>
    fetchStoryInstance.get(`${id}.json`, { cancelToken: loadStoriesCancel.token }),
  );
  return axios
    .all(resultPromise)
    .then((results) => results.map(({ data }, index) => ({ ...data, id: index + startingCount })))
    .catch((err) => {
      if (axios.isCancel(err)) {
        console.log('cancelled');
      } else {
        console.log(err);
      }
    });
};

export { LoadStories, LoadStoriesFromIds };
