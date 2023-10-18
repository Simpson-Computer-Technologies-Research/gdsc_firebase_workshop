import { tob64 } from "./utils";
import express from "express";

// CHANGE TO YOUR SCHOOL EMAIL
const encodedEmail = tob64("YOUR SCHOOL EMAIL");

// DO NOT CHANGE THESE VARIABLES
const app = express(); // A new express app
const headers = {
  // Headers that will be used for all requests
  "Content-Type": "application/json",
  Authorization: `Basic ${encodedEmail}`,
};

/**
 * Home page route for first interaction with express and requests
 */
app.get("/", (req, res) => {
  res.send(`Hello ${email}`);
});

/**
 * POST Request endpoint for creating a new key in the database
 */
app.post("/create", (req, res) => {
  // Send an http request to the firebase server with the headers and body
});

/**
 * DELETE Request endpoint for deleting a key in the database
 */
app.delete("/delete", (req, res) => {
  // Send an http request to the firebase server with the headers and body
});

/**
 * PUT Request endpoint for deleting a key in the database
 */
app.put("/delete", (req, res) => {
  // Send an http request to the firebase server with the headers and body
});

/**
 * Start the server and host it on localhost and port 3000
 */
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
