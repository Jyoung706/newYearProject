const mongoose = require("mongoose");

require("dotenv").config();

const connect = () => {
  mongoose.set("debug", true);
  mongoose.set("strictQuery", true);
  mongoose.connect(
    process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) console.log("mongodb connect error", error);
      else console.log("mongodb connect");
    }
  );
};

mongoose.connection.on("error", (error) => {
  console.log("mongodb connect error", error);
});
mongoose.connection.on("disconnected", () => {
  console.log("mongodb id disconnected. Tying to connect again");
  connect();
});

module.exports = connect;
