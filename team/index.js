import express from "express";
import { getAuthValue, from64 } from "./utils";

/**
 * Create a new express app. This will be used to manage the routes
 * and hosting the actual server on a defined port
 */
const app = express();

/**
 * Get a key in the firebase database for the specific user
 * @header Authorization - The authorization header
 * @body {string} key - The key to get
 * @returns {object} The response object
 */
app.get("/get", (req, res) => {
  // Get the request headers from the request
  const headers = req.headers;
  const encodedEmail = getAuthValue(headers.authorization);

  // Get the request body from the request
  const body = req.body;
  const key = body.key;

  // Get the key from the firebase database
  const data = {
    documentId: encodedEmail,
    key: key,
  };

  // Check if the key exists in the database, if not, return an error
  const doesNotExist = false;
  if (doesNotExist) {
    return res.status(400).send({
      status: 400,
      response_type: "case",
      response: `error - key: ${key} does not exist in the database`,
    });
  }

  // Get from firebase db TODO: implement
});

/**
 * Create a new key in the firebase database for the specific user
 * @header Authorization - The authorization header
 * @body {string} key - The key to create
 * @body {string} value - The value to create
 * @returns {object} The response object
 */
app.post("/create", (req, res) => {
  // Get the request headers from the request
  const headers = req.headers;
  const encodedEmail = getAuthValue(headers.authorization);
  const email = from64(encodedEmail);

  // Get the request body from the request
  const body = req.body;
  const key = body.key;
  const value = body.value;

  // Create a new key in the firebase database for the encoded email
  const data = {
    documentId: encodedEmail,
    student_email: email,
    key: key,
    value: value,
  };

  // Check if the key already exists in the database, if so, return an error
  const alreadyExists = false;
  if (alreadyExists) {
    return res.status(400).send({
      status: 400,
      response_type: "case",
      response: `error - key: ${key} already exists in the database`,
    });
  }

  // Add to firebase db TODO: implement
});

/**
 * Delete a key in the firebase databse for the specific user
 * @header Authorization - The authorization header
 * @body {string} key - The key to delete
 * @returns {object} The response object
 */
app.delete("/delete", (req, res) => {
  // Send an http request to the firebase server with the headers and body
  const headers = req.headers;
  const encodedEmail = getAuthValue(headers.authorization);

  // Get the request body from the request
  const body = req.body;
  const key = body.key;

  // Delete the key from the firebase database
  const data = {
    documentId: encodedEmail,
    key: key,
  };

  // Check if the key exists in the database, if not, return an error
  const doesNotExist = false;
  if (doesNotExist) {
    return res.status(400).send({
      status: 400,
      response_type: "case",
      response: `error - key: ${key} does not exist in the database`,
    });
  }

  // Delete from firebase db TODO: implement
});

/**
 * Update a key in the firebase databse for the specific user
 * @header Authorization - The authorization header
 * @body {string} key - The key to update
 * @body {string} value - The value to update
 * @returns {object} The response object
 */
app.put("/update", (req, res) => {
  // Send an http request to the firebase server with the headers and body
  const headers = req.headers;
  const encodedEmail = getAuthValue(headers.authorization);

  // Get the request body from the request
  const body = req.body;
  const key = body.key;
  const value = body.value;

  // Update the key in the firebase database
  const data = {
    documentId: encodedEmail,
    key: key,
    value: value,
  };

  // Check if the key exists in the database, if not, return an error
  const doesNotExist = false;
  if (doesNotExist) {
    return res.status(400).send({
      status: 400,
      response_type: "case",
      response: `error - key: ${key} does not exist in the database`,
    });
  }

  // Update in firebase db TODO: implement
});

/**
 * Start the server and host it on localhost and port 3000
 */
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
