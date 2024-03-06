// Nueva forma de importar a partir de ES6

import {getTitle, getAuthor} from "./functions.js"
import {curso} from "./objects.js"



// Anterior forma de importar

//const {getTitle, getAuthor} = require("./functions")
//const {curso} = require("./objects")

const {nombre, autor} = curso




console.log(getTitle());
console.log(getAuthor("Sergie"));
console.log(nombre);
console.log(autor);