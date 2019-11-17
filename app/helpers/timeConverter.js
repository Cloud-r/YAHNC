import moment from "moment";

const currentTime = moment();

const serializeDate = date => {
  return moment.unix(date).from(currentTime);
};

export { serializeDate };
