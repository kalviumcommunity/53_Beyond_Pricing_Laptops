var express = require('express');
const app = express();
const { startDb, closeDb, isConnected } = require('./db');
const Products = require('./schema')
const bodyParser = require('body-parser')
app.use(bodyParser.json()) 
const port = 3130;
const Router = require('./routes')

app.use(express.json())
// Start server and database connection
const startServer = async () => {
    try {
        await startDb();
    } catch (err) {
        console.log("Error starting server:", err);
    }
};

startServer();

// Handling server shutdown and closing database connection
const closeServer = async () => {
    try {
        await closeDb();
        console.log("Database connection closed.");
        process.exit(0)
    } catch (err) {
        console.log("Error closing server:", err);
        process.exit(1)
    }
};
// Handling process termination signals
process.on('SIGINT', closeServer);

module.exports={startServer,closeServer}
