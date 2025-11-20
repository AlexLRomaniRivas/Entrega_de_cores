//  Ejercicio 1:
const conver = input => (input*9/5)+32;
console.log(conver(95))

//  Ejercicio 2:
const gen = (nom,age)=> `Hola ${nom},tienes ${age} años de edad`
console.log(gen("Laura","15"));

//  Ejercicio 3:
const convermilla = input => (input*1.60934);
console.log(convermilla(18))

//  Ejercicio 4:
const clima = input => input == "lluvioso"?" llevar un paraguas": input=="soleado"?" llevar un sombrero":"Toma tus propias precausiones";
console.log(clima("soleado"));