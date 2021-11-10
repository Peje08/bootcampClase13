/*Ej-2 cadena = "javascript";  dada la anterior cadena colocar la ultima letra en mayúscula
output => javascripT*/



let text = 'javascript'
let text2 = text.charAt(9).toLocaleUpperCase();

console.log((text.slice(0,9)) + text2);