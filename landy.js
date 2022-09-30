let number= Number(prompt("enter a number 1-10"));

console.log(number);

if (number %2==0){
    console.log("This is an even number")
} else{
    console.log("This number is odd")
}

let higher= Number(prompt("Enter a number"));

console.log(higher);

let lower= Number(prompt("Enter another number"));

if (higher>lower){
    console.log("Number 1 is higher than number 2")
} else if(higher<lower){
    console.log("Number 2 is higher than number 1")
} else{
    console.log("The numbers entered are equal");
}

let number1= Number(prompt("Enter your first number"))
console.log(number1)
let number2= Number(prompt("Enter your second number"))
console.log(number2)
let number3= Number(prompt("Enter your third number"))
console.log(number3)

if(number1>number2){
    if(number1>number3){
    console.log("Number 1 is the highest number");
    }
}
 if(number2>number1){
    if(number2>number3){
     console.log("Number 2 is the highest number");
    }
}
if(number3>number2){
    if(number3>number1){
    console.log("Number 3 is the highest number");
    }
}
  else if(number2==number3){
  if(number1==number3)
  if (number1==number2){
     console.log("All numbers have equal value");
  }

}

let number4= Number(prompt("How long is the first side"))
let number5= Number(prompt("How long is the second side side"))
let number6= Number(prompt("How long is the third side"))

if (number4==number5){
if (number5==number6) 
if (number6==number6){
    console.log("This is a equailteral triangle")
}
}
