import moment from "moment";

const fechaActual = moment();

const cumpleaños = moment("1992-06-17");

console.log(cumpleaños);

if (moment(cumpleaños).isValid()) console.log("Es válido");
else console.log("No es válido");

const dias = fechaActual.diff(cumpleaños, "days");

console.log(dias);
