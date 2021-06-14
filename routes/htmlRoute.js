const path = require("path");   //Declared variables for this file

module.exports = (app) => {   //Modules to be exported to their applicable locations
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
