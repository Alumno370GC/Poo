const frutas = ["Banana","apple", "strawberry"];
const arrayReferencia =frutas;
frutas.push("watermelon");
console.log(arrayReferencia);

// construye un nuevo array con los resultados
//esto lo hace sin mutar el arreglo original
const nuevoArray =frutas.map((item)=>item);
frutas.push("watermelon");
console.log(nuevoArray);


//Devolver solo el name en un nuevo array

const user = [

{ name: "Jhon", age: 34},
{ name: "Amy", age: 24},
{ name: "campercat", age: 10},

];


const names = user.map((user)=>user.name);
console.log(names);

//devolver nuevo array con numeros *2
const numeros = [1,2,3,4,5,6,7,8,9,10];
const numerosPordos = numeros.map((item)=> item *2) ;
console.log(numerosPordos );



//El methodo filter() crea un nuevo array con todos los elementos que cumplan la condicion
//implementada por la funcion

const usuarios =[
{uid: 1, name: "Jhon", age: 43},
{uid: 1, name: "Amy", age: 43},
{uid: 1, name: "Campercapt", age: 10}

];

const mayor = user.filter((user)=> user.age >30);
console.log(mayor);


