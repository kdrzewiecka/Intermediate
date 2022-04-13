const age = 25;
let yeat = 2022;
const name = "john";



const user = {
    name: "John",
    age: 25,
    "jest adminem": true

     // zeby wyciagnac jest adminem to uzywamy -> console.log(user[jest adminem])
}



console.log(user)
// console.log(typeof console) sprawdzamy czym jest console.jest obiektem'

// tablice w js

const users = ['John', 'Jane', 'Mery', 'Mark'];

const company ={
    name: 'Google',
    workers: [
        {
        name: 'John',
        age: 25,
        }
        {
        name:'John',
        age: 30,
        }

    ]
}

console.log(company.workers[0])

//DOM Document (dokument htmlowy) Object (ze html pobiera sie w modelu obiektu,caly html jest dokumentem)Model 
//console.log(document) 

//document.querySelector("h1").innerText="Hello World!";

function greet(name, age) {
    return {namw: name, age: age}
    console.log('Witaj ' + name + ' masz ' + age + ' lat');
    
}


//to wywoluje finkcje zeby nie pisac ciagle tego co w nawiasie powyzje
//to jest polecenie wykonaania tej funkcji const message...
const message = greet('Jane', 25) 
console.log( message )



//analogicznie do @ mixin
