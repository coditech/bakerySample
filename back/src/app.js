import express from "express";
import cors from "cors"; // allows cross-domain requests
import path from "path";

const app = express(); // create a new app
app.use(cors()); // allows cross domain requests
app.use(express.json()); // allows POST requests with JSON
app.use(express.urlencoded({ extended: true })); // allows POST requests with GET-like parameters
app.use(express.static(path.join(__dirname, "../public"))); // <-- location of public dir

export default app;
