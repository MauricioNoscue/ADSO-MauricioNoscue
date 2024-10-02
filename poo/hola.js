class persona{
    #nombre;
    #edad;
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }
    setnombre(name){
        this.#nombre = name;
    }
    getnombre(){
        return this.#nombre;
    }
    getedad(){
        return this.#edad;
    }
    setedad(age){
        this.#edad = age;
    }
    
     saludar(){
        return `Hola soy ${this.#nombre}`
     }
}
const persona1 = new persona('Maria', '17');
console.log(persona1.getnombre());
console.log(persona1.getedad());
persona1.setnombre("Mauro")
persona1.setedad(18)
console.log(persona1.getnombre());
console.log(persona1.getedad());

class estudiante extends persona{
    constructor(nombre, edad, grado){
        super(nombre,edad)
        this.grado = grado;
    }
    
    estudiar(){
        return `Estoy estudiando`;
    }
} 
const estudiante1 = new estudiante('Isabel','17','Octavo');

console.log(estudiante1.grado);
console.log(estudiante1.getnombre());
console.log(estudiante1.getedad());
console.log(estudiante1.saludar());
console.log(estudiante1.estudiar());
