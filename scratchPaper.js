// let myStrArr = [`one`,`two`,`three`]

// for(let i = 0; i< arr.length; i++)

// let myNumArr=[1,2,3,4,5,6]
// for(let i = 0; i<myNumArr.length; i++){
//     const isOdd = myNumArr[i] % 2 === 1;
//     if(isOdd){
//         console.log(myNumArr[i] + ` is odd`)
//     } if (myNumArr[i] % 2===0) {
//         console.log(myNumArr[i]+` is even`)

//     }
// }

// // testing something with arrays real quick

// let animalArr = [Fox, Tiger, Bat, Otter]
// let favAnimal = animalArr[0]
// let index = 1
// console.log(favAnimal)
// console.log(index)
// error being returned:
// C:\Users\cstra\Desktop\DevAssignments\FollowDemo\scratchPaper.js:18
// let animalArr = [Fox, Tiger, Bat, Otter]
//                  ^

// ReferenceError: Fox is not defined
//     at Object.<anonymous> (C:\Users\cstra\Desktop\DevAssignments\FollowDemo\scratchPaper.js:18:18)
//     at Module._compile (node:internal/modules/cjs/loader:1103:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
//     at node:internal/main/run_main_module:17:47


// function calculateScore(studentScore) {
//     studentScore +=5
//     studentScore *=2
//     return studentScore
// }

// let harryScore = 35
// let hermioneScore = 49
// let ronScore = 15

// console.log(calculateScore(harryScore))
// console.log(calculateScore(hermioneScore))
// console.log(calculateScore(ronScore))
//make an arry and use a loop so you can have a list of everyone's scores

// const dog = {
//     'name': 'Freida',
//     'color': 'brown/black',
//     'hunger': 40,
//     'mood': 'feisty',
//     'age': 9,
//   };
//   console.log(dog.name)

// class Dog {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }

//  bark() {
// console.log('Borf! I am ',this.name,`, the dog!`)
//     }
// }

// const iggy = new Dog(`Iggy`, `white with black spots`);
// const amity = new Dog(`Amity`, `white and brown`)

// person class

// class Developer {
//     constructor(name, eyeColor, height, favLang){
//     this.name = name
//     this.eyeColor = eyeColor
//     this.height = height
//     this.favLang = favLang
//     }
// }

// function sayName(person){
    //     console.log(`My name is ${person.name}`)

class Person {
    constructor (name, eyeColor, height){
        this.name = name;
        this.eyeColor = eyeColor;
        this.height = height;
    }
    sayName(){
        return(`My name is ${this.name}`)
    } 
}
    
class Developer extends Person{
     constructor(name, eyeColor, height, favLang){
        super(name, eyeColor, height);
        this.favLang = favLang
     }
      sayName(){ 
        return(`${super.sayName()} and I'm a developer!`);
      }
    }
                
const me = new Developer(`Chris`, `hazel`, `5'6"`, `JS`);
const spouse = new Person(`Emma`, `blue`, `6'0"`);

 console.log(me.sayName());
 console.log(spouse.sayName());