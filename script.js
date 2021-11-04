console.log("Test");
var price = document.getElementById("price");
var quantity = document.getElementById("quantity");
var butt = document.querySelector("#button");
var result;
function calc(){
    if((/^[1-9][0-9]*$/).test(price.value) && (/^[1-9][0-9]*$/).test(quantity.value)){
        result = price.value*quantity.value;
        document.getElementById("result").innerHTML = result;
    }
    else {
        alert("Некорректный ввод данных. Введите положительные числа ПОЖАЛУЙСТА!!")
    }
}
window.addEventListener("DOMContentLoaded", function(event) {
    //let b = document.getElementById("result");
    butt.addEventListener("click", calc);
});