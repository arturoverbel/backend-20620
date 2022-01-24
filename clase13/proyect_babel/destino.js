"use strict";

var lista = ["Alejandro", "Facundo", "Gabriel"];
lista.map(function (x) {
  return "".concat(x, "_").concat(x);
}).forEach(function (x) {
  return console.log(x);
});
