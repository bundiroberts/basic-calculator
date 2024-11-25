const result = document.getElementById('result');

function appendToDisplay(input){
     result.value += input;
}

//--function--//
//clear
//result.value 
//eval(calculate)


function clearDisplay(){
    result.value = "";
}

function calculate(){

   try{
     result.value = eval(result.value);

   }
   catch(error){
    result.value ="error";
   }
    result.value = eval(result.value);
}