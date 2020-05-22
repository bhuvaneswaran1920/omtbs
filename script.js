arrayAlphabet=new Array();
    arrayAlphabet[0]='a';
    arrayAlphabet[1]='b';
    arrayAlphabet[2]='c';
    arrayAlphabet[3]='d';
    arrayAlphabet[4]='e';
    arrayAlphabet[5]='f';
    arrayAlphabet[6]='g';
    arrayAlphabet[7]='h';
    arrayAlphabet[8]='i';
    arrayAlphabet[9]='j';
    arrayAlphabet[10]='k';
    arrayAlphabet[11]='l';
    arrayAlphabet[12]='m';
    arrayAlphabet[13]='n';
    arrayAlphabet[14]='o';
    arrayAlphabet[15]='p';
    arrayAlphabet[16]='q';
    arrayAlphabet[17]='r';
    arrayAlphabet[18]='s';
    arrayAlphabet[19]='t';
    arrayAlphabet[20]='u';
    arrayAlphabet[21]='v';
    arrayAlphabet[22]='w';
    arrayAlphabet[23]='x';
    arrayAlphabet[24]='y';
    arrayAlphabet[25]='z';


function buttonClick1(){
    
    var randomLetter1 = Math.floor(Math.random() * 26);
    var randomLetter2 = Math.floor(Math.random() * 26);
    var randomLetter3 = Math.floor(Math.random() * 26);
    var randomNum1 = Math.floor(Math.random() * 10);
    var randomNum2 = Math.floor(Math.random() * 10);
    var randomNum3 = Math.floor(Math.random() * 10);
    alert("your free coupon code is: "+arrayAlphabet[randomLetter1]+""+randomNum1+""+arrayAlphabet[randomLetter2]+""+randomNum2+""+arrayAlphabet[randomLetter3]+""+randomNum3);
}   

 document.getElementById('b1').addEventListener('click',buttonClick1);

 







 function buttonClick2(){
    
    var randomLetter1 = Math.floor(Math.random() * 26);
    var randomLetter2 = Math.floor(Math.random() * 26);
    var randomLetter3 = Math.floor(Math.random() * 26);
    var randomLetter4 = Math.floor(Math.random() * 26);
    var randomLetter5 = Math.floor(Math.random() * 26);
    var randomNum1 = Math.floor(Math.random() * 10);
    var randomNum2 = Math.floor(Math.random() * 10);
    var randomNum3 = Math.floor(Math.random() * 10);
    var randomNum4 = Math.floor(Math.random() * 10);
    var randomNum5 = Math.floor(Math.random() * 10);
    alert("Thankyou for becoming our prime coustomer.."+"\n"+"your coupon code is: "+arrayAlphabet[randomLetter1]+""+randomNum1+""+arrayAlphabet[randomLetter2]+""+randomNum2+""+arrayAlphabet[randomLetter3]+""+randomNum3+""+arrayAlphabet[randomLetter4]+""+randomNum4+""+arrayAlphabet[randomLetter5]+""+randomNum5);
}   

 document.getElementById('b2').addEventListener('click',buttonClick2);

 function buttonClick3(){
    alert("logged out successfully!");
}
document.getElementById("logout").addEventListener('click',buttonClick3);