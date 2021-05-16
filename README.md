# Notes Web App

Full web app to take notes with authentication.

## Run Locally

1. Install both:

   - [Node.js](https://nodejs.org/es/download/)
   - [MongoDB](https://www.mongodb.com/try/download/community)

   You will need to have MongoDB running on port 27017.

1. Clone the project:

   ```bash
   git clone https://github.com/AloisCRR/notes-web-app.git
   ```

1. Go to the project directory:

   ```bash
   cd notes-web-app
   ```

1. Install dependencies:

   ```bash
   npm install
   ```

1. Start the dev server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

## Screenshots

Initial screen

![Screenshot](https://imgur.com/hp6XUzD.png)

Sign up

![Screenshot](https://imgur.com/JVWImML.png)

Sign in

![Screenshot](https://imgur.com/MQIOrbp.png)

Add note

![Screenshot](https://imgur.com/A4xRDO4.png)

All notes

![Screenshot](https://imgur.com/IfS38O0.png)

Edit notes

![Screenshot](https://imgur.com/gyZYl5X.png)

## Tech Stack

| Name                                                            | Description                         |
| --------------------------------------------------------------- | ----------------------------------- |
| [Node.js](https://nodejs.org/es/download/)                      | Template rendering, business logic  |
| [MongoDB](https://www.mongodb.com/try/download/community)       | Database                            |
| [Express](https://expressjs.com/es/api.html)                    | HTTP Server                         |
| [Handlebars](https://devdocs.io/handlebars/)                    | Template engine                     |
| [Express sessions](https://github.com/expressjs/session#readme) | Required by passport session        |
| [Mongoose](https://mongoosejs.com/docs/api.html)                | ODM (Object Data Modeling)          |
| [Passport local](http://www.passportjs.org/docs/)               | Handles auth logic                  |

## Roadmap

- [x] App functionality
- [ ] Testing
- [ ] Hosting, domain, etc.
- [ ] CI/CD
