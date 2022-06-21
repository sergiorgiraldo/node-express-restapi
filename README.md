# Simple Node with Express Server with REST API

### GET Routes

- visit http://localhost:8082
  - /messages
  - /messages/1
  - /users
  - /users/1

### Beyond GET Routes

#### CURL

- Create a message with:
  - `curl -X POST -H "Content-Type:application/json" http://localhost:8082/messages -d '{"text":"Hi again, World"}'`
- Delete a message with:
  - `curl -X DELETE -H "Content-Type:application/json" http://localhost:8082/messages/1`

#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:8082/messages
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "text": "Hi again, World" }`
- Delete a message with:
  - URL: http://localhost:8082/messages/1
  - Method: DELETE

---
# React application consuming messages

My-app folder has an application consuming from the api.

- Start the express API
- Move to the my-app folder and run _npm start_ It runs on port 3000
