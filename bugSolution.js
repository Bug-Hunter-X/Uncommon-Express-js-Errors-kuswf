const express = require('express');
const app = express();
const port = 3000;

// Check if port is in use
const isPortTaken = require('is-port-taken');

async function startServer() {
  const isTaken = await isPortTaken(port);
  if (isTaken) {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    return;
  }

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
}

startServer();