let array="1234567892"
let j = array.length-1;
let posn=0;
for( i=j;i>=0;i--){
    posn++;
    //document.write("i:  ",i,"  posn:", posn, "  Posn%2 :", posn%2, "  Array:",array[i]);
    //document.write("<br>");

    if(posn%2 == 0)
    {
    let double=array[i]*2;
    document.write(array[i]," --> ",double)
    document.write("<br>")
    }    


}

