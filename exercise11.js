
let myArray4=[];

for(let i=0;i<10;i++){
    myArray4[i]=i;
}
document.write("<br>");
document.write(myArray4);
document.write("<br>");
document.write(myArray4.length);

document.write("<br>");
let myArray = new Array("dogs","cats",-2,-1,-3);
document.write(myArray);
for(let b =0; b<myArray.length+1; b++){
    if(typeof(myArray[b])=="numbers"){
        if(myArray[b]<0){document.write(myArray[b])}
    
    }
}

