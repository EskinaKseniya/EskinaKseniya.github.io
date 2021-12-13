

// Элементы формы
const squareInput = document.querySelector('#square-input');
const inputs = document.querySelectorAll('input');

//селектор
const select = document.getElementsByName('myselect')

// Радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
const chType = document.querySelectorAll('input[name="ceiling"]');

// Чекбокс
const ceilings = document.querySelector('input[name="ceiling"]');

const basePrice = 0;
const totalPriceElement = document.querySelector('#total-price');

let selectnow=1;
let radios = document.getElementById('radios');
let checkbox = document.getElementById('checkbox');

function calculate() {
let totalPrice;
let Price;
const reg = /[^0-9]|\b0[0-9]+/;
let price = document.getElementsByName("field1");
let amount = document.getElementsByName("field2");
if(reg.test(parseInt(squareInput.value)) === true){
alert("Повторите ввод данных");
totalPriceElement.innerText = "0";
}
else{
if(selectnow==1){ 
totalPrice=400;
totalPrice *= parseInt(squareInput.value);
}
else if(selectnow==2){ 
totalPrice=1200;
for (const radio of radioType) {
if (radio.checked) {
Price = parseInt(radio.value);
}
}
totalPrice = totalPrice*parseInt(squareInput.value) + Price;
}
else if(selectnow==3){
totalPrice=650;
for (const ceilings of chType) {
if (ceilings.checked) {
totalPrice = totalPrice + parseInt(ceilings.value);
}}
totalPrice *= parseInt(squareInput.value);
}
const formatter = new Intl.NumberFormat('ru');
totalPriceElement.innerText = formatter.format(totalPrice);
}
}
window.addEventListener('DOMContentLoaded', function (event) {
calculate();
radios.style.display = "none";
checkbox.style.display = "none";
select[0].addEventListener("change", function(event) {
let select = event.target;
if (select.value == "1") {
radios.style.display = "none";
checkbox.style.display = "none";
selectnow = 1;
}
else if(select.value == "2") {
radios.style.display = "block";
checkbox.style.display = "none";
selectnow = 2;
}
else {
radios.style.display = "none";
checkbox.style.display = "block";
selectnow = 3;
}
calculate();
});

for (const input of inputs) {
input.addEventListener('input', function () {
calculate();
});
}
});


$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots:true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll:4,
    speed:1000,
    easing:'ease',
    draggable:false,
    waitForAnimate:true,
    responsive:[
      {
        breakpoint:760,
        settings:{
          slidesToShow:2,
          slidesToScroll:2,
        }
      }
    ]
  });
});