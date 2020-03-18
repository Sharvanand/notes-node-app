const fs = require("fs");
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);
