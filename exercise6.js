/*let count=0;
while(count<11){
 console.log(count);   
    count++;
}

do{
    if(count%2==0){
    console.log(count)
    }
    count++


}while(count<100);
*/
let number1 =Number(prompt("Enter a number"));
let number2 =Number(prompt("Enter another number"));
let count=1
let temp1=number1
while(count<number2){
    temp1=temp1*number1;
    count=count+1

}
console.log(temp1)

/*
let count =1
let number3 =Number(prompt("Enter a number"));
let temp="*"
do{console.log(temp)
    temp=temp+"*"
    count=count+1


}while(count<number3+1)
*/

