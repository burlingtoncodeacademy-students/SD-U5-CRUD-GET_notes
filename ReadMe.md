# Notes
There are two different branches associated with this lesson.
- Main
  - This branch provides the base notes of material not filled out.
- Completed
  - This branch includes all the added notes for you to review and compare with your own code-along.

### Before Getting Started
- **Postman** is installed. Download link below.
- **Nodemon** is installed. Download link below.
- **MongoDB** is installed. Download link below.
- **Mongo Compass** is installed. Download link below.

### Topics Covered
- CRUD
  - GET requests
  - Get All Movies
  - Get One Movie by ID
  - Get Movies by Genre

### What Should Already Be Understood
- Express server setup and spin-up
- Basic file / folder structuring
- node package manager (npm)
- Routes/Controllers
- Models/Schema structure

## Files / Folders in this Lesson
- controllers
  - `user.controller.js`
  - `movie.controller.js` (incomplete)
- models
  - `user.model.js`
  - `movie.model.js`
- `.gitignore`
- `app.js`
- `example.env`
  - `.env` will need to be included if cloned.
- `package.json`
- `notes.md`

1. If this repo is cloned, be sure to run `npm install` within the project folder to install all dependencies within `package.json`. This will add the `node_modules` necessary to the project.

## Resources
- [Mongoose Documentation](https://mongoosejs.com/docs/api/document.html#Document.prototype.save)
- [findOne](https://www.mongodb.com/docs/manual/reference/method/db.collection.findOne/)
- [find](https://www.mongodb.com/docs/manual/reference/method/db.collection.find/)
- Downloads:
  - [Postman Download](https://www.postman.com/downloads/)
  - [npm](https://www.npmjs.com/)
  - [Nodemon](https://nodemon.io/)
  - [How to Install MongoDB Video](https://www.loom.com/share/23f358e7221048748b433e4f5fd8c83a?sid=209f37ae-1e2f-47a4-a726-06829a1a73da)
  - [MongoDB Community](https://www.mongodb.com/try/download/community)
  - [MongoDB Compass](https://www.mongodb.com/try/download/compass)

# Challenge
Create functions that handle the success responses to the client as well as any incomplete issues.