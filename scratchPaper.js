// let myStrArr = [`one`,`two`,`three`]

// for(let i = 0; i< arr.length; i++)

let myNumArr=[1,2,3,4,5,6]
for(let i = 0; i<myNumArr.length; i++){
    const isOdd = myNumArr[i] % 2 === 1;
    if(isOdd){
        console.log(myNumArr[i] + ` is odd`)
    } if (myNumArr[i] % 2===0) {
        console.log(myNumArr[i]+` is even`)

    }
}

// testing something with arrays real quick

let animalArr = [Fox, Tiger, Bat, Otter]
