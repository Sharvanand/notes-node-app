const chalk = require("chalk");
const fs = require("fs");
const yargs = require("yargs");
const notes = require("./notes");

// const msg = getNotes();

// Customizing Version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Adding notes",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Adding Body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// Create Remove command
yargs.command({
  command: "remove",
  describe: "Removing a note..",
  builder: {
    title: {
      describe: "It is Title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  }
});

// Create list  command
yargs.command({
  command: "list",
  describe: "Listing notes..",
  handler() {
    notes.listNotes();
  }
});

// Create the read command
yargs.command({
  command: "read",
  describe: "Reading notes",
  builder: {
    title: {
      describe: "read",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNotes(argv.title);
  }
});

console.log(yargs.argv);
