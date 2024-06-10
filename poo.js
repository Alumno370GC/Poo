class Persona{
constructor (nombre, edad){ /** asigna los valores de los parámetros a las propiedades correspondientes
                                             de la instancia 
                                       utilizando la sintaxis this.*/
           this.nombre =nombre;
           this.edad =edad;

}

//método llamado saludar(). 
saludar(){
console.log(`Hola mi nombre es ${this.nombre} y tengo, ${this.edad} años.`);

}


}
//creamos dos instancias de la clase Persona utilizando el operador new.

const persona1 = new Persona("Juan", 25);
persona1.saludar()//método llamado saludar()

const persona2 = new Persona ("Miguel",34);
persona2.saludar()//método llamado saludar()




class coche {
//Function Car ()
constructor(make, model, year){
this.make = make;
this.model =model;
this.year =year;

}
//método llamado carro(). 
carro(){
    console.log(`Hola mi nombre es ${this.make} y tengo un coche con el modelo, ${this.model}  y su año, ${this.year}`);
    
    }
}

const car1 = new coche ('Eagle', 'Talon TSi', 1993);
car1.carro();






