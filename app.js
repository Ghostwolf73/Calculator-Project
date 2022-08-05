const selectSound = new Audio('./Sounds/select.mp3');
const equalSound = new Audio('./Sounds/start.mp3');

function display(val){

    document.getElementById('result').value += val

    return val

}

function deleteVal(val){
    var val = document.getElementById('result').value;
    document.getElementById("result").value = val.substr(0, val.length - 1);
    return val
}

function clearScreen(){

    document.getElementById('result').value = ''

}

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

function percentage(){
    let perc = (val / 100) * val;

    return perc;
}

let equal = document.querySelector('.equal-sign');
equal.addEventListener('click', ()=>{
    equalSound.play();
})

let buttons = document.querySelector('.buttons');

buttons.addEventListener('click', ()=>{
    selectSound.play();
})