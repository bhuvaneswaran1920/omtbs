function getInputValue(){
    var inputVal = document.getElementById("myInput").value;
    alert("thankyou for choosing dream world"+"\n"+"dream world welcomes you "+inputVal);
}    

document.getElementById("b4").addEventListener('click',getInputValue);