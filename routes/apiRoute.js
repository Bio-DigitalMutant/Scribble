const fs = require("fs");   //Declarations of variables for this file
var notesData = getNotes();

function getNotes() {
  let text = fs.readFileSync("./db/db.json", "UTF-8");    //GET function to populate the browser with saved notes
  let notes = JSON.parse(text);
  for (let i = 0; i < notes.length; i++) {
    notes[i].id = "" + i;
  }
  return notes;
}

module.exports = (app) => {   //Exported module with various functions contained. Primarily GET, POST and DELETE
  app.get("/api/notes", (req, res) => {
    notesData = getNotes();
    res.json(notesData);
  });

  app.get("api/notes", (req, res) => {
    notesData.push(req.body);
    res.json(true);
  });

  app.post("/api/notes", (req, res) => {
    notesData.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(notesData), "UTF-8");
    res.json(true);
  });

  app.delete("/api/notes/:id", function (req, res) {    //DELETE function identifying specific notes by generating ID
    const noteID = req.params.id;

    let note = notesData.filter((note) => {
      return note.id === noteID;
    })[0];

    const IDList = notesData.indexOf(note);

    notesData.splice(IDList, 1);

    fs.writeFileSync("./db/db.json", JSON.stringify(notesData), "utf8");
    res.json("This note has been deleted.");    //DELETE confirmation message
  });
};
