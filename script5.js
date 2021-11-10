/*
Ej-5  1 str = "origin"
eliminar las vocales del string
output => rgn*/

let string = 'origin';

function deleteVowels(str){
    let res = str.replace(/[aeiou]/g,'')
    return res;
}

const string2 = deleteVowels(string);
console.log(string2)