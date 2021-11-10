/*Ej-1  cadena = "javascript"; dada la anterior cadena colocar la primera letra en mayúscula
     output => Javascript*/

let txt = 'javascript'
let txt2 = txt.charAt(0).toLocaleUpperCase()

console.log(txt2 + (txt.slice(1)))