/*Ej-3 arr = ["foo", "bar", "baz", "qux", "origin"]
buscar en el array el elemento baz y mostrarlo console
output =>  baz*/

let arr = ["foo", "bar", "baz", "qux", "origin"];


function search(word){
    return word === 'baz'
}

console.log(arr.find(search));