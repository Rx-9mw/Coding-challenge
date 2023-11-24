# DAZN Coding Challenge

## The app was created using:
- Node.js
- Express
- Mongodb
- Render

## URL for the API
The deployed version can be accessed through this link:
https://dazn-coding-challenge-api.onrender.com 

## Building the local version:
- Pull the repo unto your machine.
- Open with a code editor.
- Install the dependencies using `npm install`.
- Run the server using `node app.js`.

## Using the api:
You can access the users and their information in the database by sending a request through `/users` by either adding it to the local `localhost:3000` (Runs on port 3000) or the deployed url.

## Requests:

- GET `localhost:3000/users`
  Gets all the users in the database along with the number of current streams and id's.
- GET `localhost:3000/users/:id`
  Gets the user along with the number of his current streams from the database based on the id passed in the url after `/users`.
- POST `localhost:3000/users`
  Creates a new user using the template:
  ```js
  {
    "username": "user",
    "numberOfCurrentStreams": 2
  }
  ```
  The value `numberOfCurrentStreams` can be omitted. When doing so it will default to 0.
- DELETE `localhost:3000/users/:id`
  Finds the user and deletes him from the database based on the id passed in the url after `/users`.
