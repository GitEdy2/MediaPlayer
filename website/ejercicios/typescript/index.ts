console.log('Hello, typescript');

function add(a: number, b:  number) {
    return a + b;
}

const sum = add(2,3);

console.log(sum);

//Boolean
let muted: boolean = true;
muted = false;

//Number
let numerador: number = 42;
let denominador: number = 6;

let resultado = numerador / denominador;

//string 
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
people.push("9000")

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(6);


//Enum
enum Color1 {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color1 = Color1.Azul;

console.log(`Mi color favorito es el ${colorFavorito}`);

//Any
let comodin: any = "Joker"
comodin = { type: 'Wildcard' }

//Object
let someObject: object = {type: 'Wildcart' }

//Funciones
function add2(a: number, b: number): number {
    return a + b;
}

const suma = add2(4,6);


function createAdder (a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);


function fullName (firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const edison = fullName('Edison', 'Proaño');
console.log(edison);


//Interfaces
enum Color2 {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

interface Rectangulo {
    ancho: number
    alto: number
    color: Color2
}

let rect : Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color2.Verde
}

function area(r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return this.color? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());