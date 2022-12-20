const { createApp } = require("./app");
const connect = require("./schema");

connect();

const app = createApp();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("start");
});
