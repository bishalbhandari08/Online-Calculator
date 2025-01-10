const display = document.getElementById("display");

resultDisplay = false;

function values(value){
    if(resultDisplay === true){
        display.value = value;
        resultDisplay = false;
    }
    else{
        display.value += value;
    }
}

function clearDisplay(){
    display.value = "";
    resultDisplay = false;
}

function calculate(){
    try{
        display.value = eval(display.value)
        resultDisplay = true;
    }
    catch(error){
        display.value = "Syntax Error"
        resultDisplay = true;
        setTimeout( () => {
            display.value = "";
        }, 1000)  
    }    
}