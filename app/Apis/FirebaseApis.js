import axios from 'axios';

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
  const url = getUrl(type);
  return axios.get(url).then(({ data }) => data);
};

const LoadStoriesFromIds = (startingCount = 0, Ids) => {
  const resultPromise = Ids.map((id) => fetchStoryInstance.get(`${id}.json`));
  return axios
    .all(resultPromise)
    .then((results) => results.map(({ data }, index) => ({ ...data, id: index + startingCount })));
};

export { LoadStories, LoadStoriesFromIds };
