const validator = require("validator");
const fs = require("fs");
const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);
console.log(validator.isEmail("thirusharwan@gmail.com"));
