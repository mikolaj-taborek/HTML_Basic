function NumbersHub(){
    const Sign = String(document.getElementById("sign").value);
    const Num1 = Number(document.getElementById("Num1").value);
    const Num2 = Number(document.getElementById("Num2").value);
    switch(Sign){
        case "+":
            Add(Num1, Num2);
            break;
        case "-":
            Subtraction(Num1, Num2);
            break;
        case "*":
            Multiplication(Num1, Num2);
            break;
        case "/":
            Division(Num1, Num2);
            break;
        case "%":
            Modulo(Num1, Num2);
            break;
        case "^":
            Power(Num1, Num2);
            break;
        default:
            document.getElementById("Result1").value = "Nie podano prawidłowego działania";
    }
}

function Add(Num1, Num2){
    const Result = Num1 + Num2;
    document.getElementById("Result1").value = Result;
}

function Subtraction(Num1, Num2){
    const Result = Num1 - Num2;
    document.getElementById("Result1").value = Result;
}

function Multiplication(Num1, Num2){
    const Result = Num1 * Num2;
    document.getElementById("Result1").value = Result;
}

function Division(Num1, Num2){
    const Result = Num1 / Num2;
    Result.toFixed(3);
    document.getElementById("Result1").value = Result;
}

function Modulo(Num1, Num2){
    const Result = Num1 % Num2;
    document.getElementById("Result1").value = Result;
}

function Power(Num1, Num2){
    let Result = Num1;
    for(i = 1; i < Num2 ; i++){
        Result *= Num1;
    }
    document.getElementById("Result1").value = Result;
}