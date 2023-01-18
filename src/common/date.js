const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return new Date(Date.UTC(year, month, day, hours, minutes));
};

const getCurrentTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();

  return new Date(Date.UTC(year, month, day, hours));
};

const getPreviousTime = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours() - 1;

  return new Date(Date.UTC(year, month, day, hours));
};

module.exports = { getCurrentDate, getCurrentTime, getPreviousTime };
