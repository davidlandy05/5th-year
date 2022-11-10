let a=Number(prompt("Enter a number"));
console.log(a)
let c=0
for(;a>10;c++)(
    
    a=Math.floor(a/10)
)
console.log( " It has "+ c+" digits")

let b=Number(prompt("Enter a number"));
console.log(b)
a=Math.floor(a/10)
lastdigit = b%10
for(;b>10;c++)(
    
    b=Math.floor(b/10)
)
firstdigit =b
console.log("First digit is " + firstdigit)
console.log("Last digit is " + lastdigit)

let d=Number(prompt("Enter a number")); 
console.log(d)
while(d>0){
    lastdigit = d%10

if(lastdigit==1){
 console.log("One");
 }
if(lastdigit==2){
 console.log("Two");
}
 if(lastdigit==3){
console.log("Three");
 }
if(lastdigit==4){
 console.log("Four");
 }
 if(lastdigit==5){
console.log("Five");
 }
 if(lastdigit==6){
 console.log("Six");
 }
 if(lastdigit==7){
 console.log("Seven");
 }
 if(lastdigit=8){
 console.log("Eight");
}
 if(lastdigit==9){
console.log("Nine");
 }
d=Math.floor=(d/10)


}



