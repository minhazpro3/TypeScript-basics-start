const a: string ="Hello World"


// types of typescript: string, number, array, null, undefine, boolean, never,unknown, any
// 


function getLowerCase (str: string){
    return str.toLowerCase()
}

console.log(getLowerCase("HELLO"))
console.log(getLowerCase(""))

const b: number = 250

function add(number1:number, number2:number){
    return number1+number2
}

const subtract = (number1:number, number2:number) =>{
    return number1 - number2
}



add(23,3)
subtract(5,3)


// array <T>
// Generic array type
const arr2: Array<number|string> =[123,"Minhaz"]
// finished

const arr: number[]=[23,34,45,56]

const arr1: string[]=["23","34","45","56"]

type numberAndString = number | string | boolean;
const id: numberAndString =34 


interface IPerson {
    name: string,
    age: number,
    hobby?: string
}

const person1: IPerson ={
    name: "Shakib",
    age: 45,
    hobby: "travelling"
}
const person2: IPerson ={
    name: "Rakib",
    age: 45,
    hobby: "Programming"
}

const personArray: Array<IPerson>= [person1,person2]


enum colors {
    colors1= "#ddd3de",
    colors2= "#ddd3ee",
    colors3= "#fffff"
}

console.log(colors.colors2)



// generic function

// function _concat<T>( a:T, b:T){
//     return a+b;
// }

// _concat<number>(2,4)
// _concat<string>("Minhaz","Uddin")

