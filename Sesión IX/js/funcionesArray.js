/* Generar un objeto */
const person = {
    /* clave: valor */
    firstname: "Yaneth",
    lastname: "Mejia",
    age: 30,
    eyeColor: "brown"
};

/* Métodos para trabajar con objetos */
const personOne = {
    /* clave: valor =>propiedades */
    firstname: "Yaneth",
    lastname: "Mejia",
    age: 30,
    eyeColor: "brown",
    fullname: function() {
        return this.firstname + " " + this.lastname;
    }
};

/* Exiten 2 formas para acceder a las propiedades de un objeto 
    nombreObjeto.propertyName;
    nombreObjeto["propertyName"]
*/
console.log("El color de mis ojos es " + person.eyeColor);
console.log("Tengo " + person.age + " años");
console.log("Me llamo " + person["firstname"]);
console.log("Mi apellido es " + person["lastname"]);
/* Ejemplo del llamado de propiedad que recibe como valor una función anonima */
console.log("Otra vez mi nombre " + personOne.fullname());