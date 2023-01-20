const { createApp } = require('./app');
const connect = require('./schema');

connect();

const app = createApp();
const PORT = process.env.PORT;

//health check
app.get('/health', (req, res) => {
  res.status(200).json('health check');
});

app.listen(PORT, () => {
  console.log('start');
});
