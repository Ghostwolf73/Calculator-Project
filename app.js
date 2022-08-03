let num1, num2;

function add (num1, num2){
    let sum = parseInt(num1) + parseInt(num2);
    return sum;
}

function subtract (num1, num2){
    let difference = num1 - num2;
    return difference;
}

function multiply (num1, num2){
    let multiple = num1 * num2;
    return multiple;
}

function division (num1, num2){
    let divided = num1 / num2;
    return divided;
}

function operate (){
    num1 = prompt("enter your first number");
    let operator = prompt("enter your operator");
    num2 = prompt("enter your second nuumber");

    if(operator === "+"){
       alert(add(num1, num2));
    }
    else if (operator === "-"){
       alert(subtract(num1, num2)); 
    }
    else if (operator === "*"){
       alert(multiply(num1, num2));
    }
    else if (operator === "/"){
       alert(division(num1, num2));
    }

}

// operate();