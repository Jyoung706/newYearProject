const keyWordSchema = require("../schema/keywords");

const upsertKeyWord = async (keyword, frequency) => {
  await keyWordSchema.updateOne(
    { keyword },
    { $inc: { frequency: frequency } },
    { upsert: true }
  );
};

module.exports = { upsertKeyWord };
