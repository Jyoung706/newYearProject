const keyWordSchema = require("../schema/keywords");

const upsertKeyWord = async (keyword, frequency) => {
  await keyWordSchema.updateOne(
    { keyword },
    { $inc: { frequency: frequency } },
    { upsert: true }
  );
};

const findUsuallyKeyword = async () => {
  return await keyWordSchema.find({}).sort({ frequency: -1 }).limit(10);
};

module.exports = { upsertKeyWord, findUsuallyKeyword };
