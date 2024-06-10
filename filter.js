const user = [
{ uid: 1, name: "John", age: 34 },
{ uid: 2, name: "Amy", age: 20 },
{ uid: 3, name: "camperCat", age: 10 },

];

const mayor = user.filter((user)=>user.age >= 30);
console.log(mayor);

//Eliminar un usuario por id

const Usuarios =[

    { uid: 1, name: "John", age: 24 },
    { uid: 2, name: "luis", age: 14 },
    { uid: 3, name: "pepe", age: 4 },

];

const EliminacionPorId =user.filter((user)=>user.uid !==2);
console.log(EliminacionPorId);