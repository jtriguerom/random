// Math.random() devuelve número aleatorio entre 0 y 1.
//introducimos un cambio sobre el texto para generar una nueva version

var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
  str = ' MENOR que 0,5';
}

console.log('\n' + numero + str + '\n');
