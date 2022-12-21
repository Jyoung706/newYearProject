const asyncWrap = (controller) => {
  return async (req, res) => {
    try {
      await controller(req, res);
    } catch (err) {
      console.log(err);
      res.status(err.statusCode ? err.statusCode : 500).json(err.message);
    }
  };
};

module.exports = asyncWrap;
