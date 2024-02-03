var express = require('express');
const app = express();
const { startDb, closeDb, isConnected } = require('./db');
const port = 3130;

// Start server and database connection
const startServer = async () => {
    try {
        await startDb();
        app.get('/', (req, res) => {
            res.send(`Database connection status: ${isConnected() ? "Connection successful" : "Connection Unsuccessful"}`);
        });

        app.get('/ping', (req, res) => {
            res.send("pong");
        });

        app.listen(port, () => {
            console.log("Server is running on port 3130...");
        });
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


