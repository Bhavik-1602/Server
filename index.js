const jsonServer = require('json-server');
const path = require('path');
const cors = require("cors")
// Create the server
const server = jsonServer.create();

// Set the JSON file as the database
const router = jsonServer.router(path.join(__dirname, 'db.json'));

// Middleware for default settings
const middlewares = jsonServer.defaults();

// Use the middlewares
server.use(cors())
server.use(middlewares);

// Use the router
server.use(router);

// Start the server
const PORT = 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running at http://localhost:${PORT}`);
});