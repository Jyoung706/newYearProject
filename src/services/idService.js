const { v4: uuidv4 } = require("uuid");

const idCreateService = () => {
  return uuidv4();
};

module.exports = { idCreateService };
