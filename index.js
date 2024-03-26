// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");

const show = document.getElementById("show");
let z;
function dis(val){
      show.value += val;
}
function clr(){
    show.value = "";
}
function solve(){

    let x = show.value;
    let y = eval(x);
    show.value = y;
}
function cancel(){
    let temp = show.value;
    temp = temp.toString().slice(0, -1);
    show.value  = temp;
}
