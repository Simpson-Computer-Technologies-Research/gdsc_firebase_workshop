import { tob64 } from "./utils.js";
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
app.get("/", async (req, res) => {
  res.send(`Hello ${email}`);
});

/**
 * GET Request endpoint for get a key in the database
 */
app.get("/get", async (req, res) => {
  // Send an http request to the firebase server with the headers and body
  await fetch("http://localhost:9000/get", {
    method: "GET",
    headers,
    body: JSON.stringify(req.body),
  });

  // Return the response
});

/**
 * POST Request endpoint for creating a new key in the database
 */
app.post("/create", async (req, res) => {
  // Send an http request to the firebase server with the headers and body
  await fetch("http://localhost:9000/create", {
    method: "POST",
    headers,
    body: JSON.stringify(req.body),
  });

  // Return the response
});

/**
 * DELETE Request endpoint for deleting a key in the database
 */
app.delete("/delete", async (req, res) => {
  // Send an http request to the firebase server with the headers and body
  await fetch("http://localhost:9000/delete", {
    method: "DELETE",
    headers,
    body: JSON.stringify(req.body),
  });
});

/**
 * PUT Request endpoint for deleting a key in the database
 */
app.put("/delete", async (req, res) => {
  // Send an http request to the firebase server with the headers and body
  await fetch("http://localhost:9000/delete", {
    method: "PUT",
    headers,
    body: JSON.stringify(req.body),
  });
});

/**
 * Start the server and host it on localhost and port 3000
 */
app.listen(3000, () => {
  console.log("Server started on port 3000");
  console.log("Your access token: " + encodedEmail);
});
