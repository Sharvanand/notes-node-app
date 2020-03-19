const chalk = require("chalk");
const fs = require("fs");

// Getting notes from the file..
const getNotes = () => {
  return "Your Notes...";
};
// Adding Notes to the JSON file..
const addNotes = (title, body) => {
  const notes = loadNotes();
  const dublicateNote = notes.find(note => note.title === title);

  if (!dublicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
  } else {
    console.log("Note title has been taken..");
  }
};

const saveNotes = notes => {
  const dataChange = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataChange);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

// Remove notes .....

const removeNotes = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed.."));
  } else {
    console.log(chalk.red.inverse("Note not found"));
  }
};

// Listing all the notes..
const listNotes = function() {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your Notes..."));
  notes.forEach(note => {
    console.log(note.title);
  });
};

// Read notes...

const readNotes = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.blue.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not Found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes
};
