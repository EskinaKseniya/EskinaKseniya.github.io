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
        alert("Некорректный ввод данных. Введите положительные числа ПОЖАЛУЙСТА!!");
    }
}
window.addEventListener("DOMContentLoaded", function() {
    butt.addEventListener("click", calc);
});


///////////////////////////////////////////////////////////////////////////////////////
var butt1 = document.querySelector("#button1");
var s =  document.getElementById("sweet");
var quantity1 = document.getElementById("quantity1");
function Sweets()
{
document.getElementById("adress").innerHTML = document.getElementById(s.value).innerHTML;
}
function Result()
{
var ans = document.getElementById("answer");
if((/^[1-9][0-9]*$/).test(quantity1.value)){
    if(s.value == 400)
    ans.innerHTML=parseInt(s.value)*parseInt(quantity1.value);
    else{
        if(s.value == 1200){
            var inp = document.getElementsByName('tort');
            for (var i = 0; i < inp.length; i++) {
                if (inp[i].type == "radio" && inp[i].checked) {
                    ans.innerHTML=parseInt(s.value)*parseInt(quantity1.value)+ parseInt(inp[i].value);
                }
            }
        }
        else{
            if(s.value == 650){
                var inp1 = document.getElementsByName('buns');
                var dopbuns = 0;
                for (var j = 0; j < inp1.length; j++) {
                    if (inp1[j].type == "checkbox" && inp1[j].checked) {
                        dopbuns+= parseInt(inp1[j].value);
                    }
                }
                ans.innerHTML=(dopbuns + parseInt(s.value))*parseInt(quantity1.value);
            }
        }
    }
}
else {
    alert("Некорректный ввод данных. Введите положительные числа ПОЖАЛУЙСТА!!");
}
}
window.addEventListener("DOMContentLoaded", function() {
    butt1.addEventListener("click", Result);
});