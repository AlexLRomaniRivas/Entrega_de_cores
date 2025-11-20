const info = {
    personal: {
        nombre: 'Carlos',
        apellido: 'Vega',
        detalles: {
            edad: 30,
            ocupacion: 'Ingeniero'
        }
    }
};
const { personal: { detalles: { edad, salario } } } = info;
console.log(edad);
console.log(salario);


// 1. pienso que no saldra nada
// 2. 30 y undifined
// 3. El 30 aparece porque esa propiedad sí existe en el arreglo mientras que undefined se muestra porque la variable salario nunca recibió un valor

const objetoA = { a: 1, b: 2, c: 3 };
const objetoB = { b: 4, c: 5, d: 6 };
const resultado = { ...objetoA, ...objetoB };
console.log(resultado);

// 1. Se muestran ambos objetos unidos en una solo objeto
// 2. { a: 1, b: 4, c: 5, d: 6 }
// 3. Al utilizar el operador spread los arreglos se combinan pero las variables b y c terminan tomando los valores del objeto B porque el spread aplica las propiedades desde la derecha hacia la izquierda

const verificar = () => {
    if (true) {
        const a = 2;
        let b = 3;
        var c = 4;
    }
    console.log(c);
    console.log(a);
    console.log(b);
}
verificar();

// 1. Aparece solo c
// 2. Solo se muestra el var y menciona que a no está definido
// 3. a y b solo existen en el bloque donde fueron declaradas por eso no aparecen 

const datos = Object.freeze({ nombre: 'Luis', edad: 29 });
datos.edad = 30;
console.log(datos.edad);

// 1. Muestra 29
// 2. 29
// 3. Se utiliza Object.freeze lo que hace que la variable se mantenga a pesar de los cambios

const original = [1, 2, 3];
const nuevo = original.concat(4);
console.log(original);
console.log(nuevo);
// 1. Se muestran 2 arreglos y uno de ellos llevará el cuatro
// 2. [ 1, 2, 3 ][ 1, 2, 3, 4 ]
// 3. Al utlizar concat se combinan los arreglos y se agrega el valor entre paréntesis

const frutas = ['manzana', 'naranja', 'pera', 'mango'];
const [primera, segunda] = frutas;
console.log(primera);
console.log(segunda);
// 1. Se muestran el mismo arreglo dos veces
// 2. manzana , naranja
// 3. Se les asígna variables a los elementos del areglo eso hace que al llamar las variables se muestren

for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 2; i++) {
        console.log(i);
    }
}
// 1. Imprime 1 tres veces
// 2. 0 1 0 1 0 1
// 3. let genera un nuevo valor en cada vuelta del ciclo ya que permite usar la misma variable en iteraciones distintas sin causar conflictos

const numeros1 = [1, 2, 3];
const numeros2 = [3, 4, 5];
const combinados = [...numeros1, ...numeros2];
console.log(combinados);

// 1. [1,2,3,3,4,5]
// 2. [ 1, 2, 3, 3, 4, 5 ]
// 3. A diferencia de los objetos, los elementos de un arreglo se unen de forma normal

const demostracion = () => {
    var nombre = 'Ana';
    let edad = 25;
    if (true) {
        var nombre = 'Luis';
        let edad = 30;
    }
    console.log(nombre);
    console.log(edad);
}
demostracion();

// 1. Luis 25
// 2. Luis 25
// 3. Con var la variable nombre cambia de Ana a Luis en cambio con el let dentro del if se crea otra variable distinta solo para ese bloque