
var ArrayExemplo = [1,2,3,4,5]

var nomes =["juliana", "bruna", "yago"]

var arrayMisto = [ "juliana", 25, false, true, null]

var vazio = [];

//---------------posição-----------//

// 0,1,2,3...
// nomeDoArray[nº da posição]
// array[1]

console.log(nomes[0]);
console.log(arrayMisto[1]);

//--------- comprimento do array ------//

// numero de itens dentro do array = LENGTH;
// console.log(ARRAY.LENGTH)

console.log(ArrayExemplo.length);

// ------ manipulando o array ----- //

// incluir um item na ultima posição do array
// array.push(item);

//retirar um item na ultima posição do array
// array.pop();

var arrayAletorio = [64, 42, 39,21, 12];

function somar(array){
  var resultado = array[0] + array[1] + array[2] + array[3] + array[4]
  console.log(resultado);
}

somar(arrayAletorio);

var NotasMatematica = [6,8,7.5]

function media(notas){
  var resultado = notas[0] + notas[1] + notas[2];
  resultado = resultado / notas.length;
  console.log(resultado);
}

media(NotasMatematica);





function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}