console.log('hola desde el archivo');

var nombre = 'Pedro';
console.log(nombre);

nombre = 'Otro Nombre';
console.log(nombre);

const id = 1645;
console.log(id);

id = 888;

var numero = 58945;

console.log(String(numero));
console.log(+numero);
console.log(typeof(+numero));

console.log(Number(numero));
console.log(typeof(Number(numero)));


var condicion2 = 1;


var respuesta =1;
if(respuesta ===3){
    console.log('Respuesta correcta');
}else if(respuesta === 2){
    console.log('casi');
}else {
    console.log('Respuesta incorrecta');
}

var respuesta2 = 398;

switch(respuesta2){
    case 3:
        console.log('Respuesta correcta!');
        break;
    case 2:
        console.log('Casi');
        break;
    default:
        console.log('Mal!');    
}


for(var i=0; i <= 10; i++){
    console.log(i);
}

var a = 1;
while(a<=10){
    console.log(a);
    1++
}

do{
    console.log(a)
}while(a != 0)

var name1 = 'Raul'

function primeraFuncion(name1) {
    
   console.log('Hola que tal?' +name1 );
}

var segundafuncion = function (edad){
    console.log('Esta es una expresion de funcion' + edad);
}

segundafuncion(15)

(function (name1){
    console.log('Hola, que tal' +name1);
})('Karen')