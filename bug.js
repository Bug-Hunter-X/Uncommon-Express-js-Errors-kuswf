const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error:  If the port is in use by another process this will throw an error and the server won't start.
//Another uncommon error: If there is a syntax error in the express app configuration it will throw an error and the server will not start. 
//Another uncommon error: If there is a problem with the dependencies, it will not start the server. 
//Another uncommon error: A middleware function might throw an error that is not handled correctly. For example, the next() function might not be called correctly. 