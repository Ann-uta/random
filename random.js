
function generate(){
    return Math.round(Math.random()*20 - 10);
}

function generateArray() {
    let arr = [];
    for (let i = 0; i < 10; i++){
        let number = generate();
        arr.push(number);
    }
    document.querySelector('.arr').innerHTML ="Сгенерировали: " + arr;

    //нахождение мин и макс через цикл
/*let min = arr[0];
let max = arr[0];

for (let i = 0; i < arr.length; i++){
    let item = arr[i];

    if (item < min) {
        min = item;
    } else if (item > max){
        max = item;
    }
}return[min, max];*/

let min = Math.min(...arr);
document.querySelector('.min').innerHTML = "Минимальное: " + min.toString();
    
let max = Math.max(...arr);
document.querySelector('.max').innerHTML = "Максимальное: " + max.toString();

    function average(arr) {
        let sum = 0;
        for(i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }
    function sum(arr) {
        let sum = 0;
        for(i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    function multiply(arr) {
        let mul = 1;        
        for (let item of arr) {
            mul *= item;
        }
        return mul;
    }
    
    document.querySelector('.average').innerHTML = "Среднее арифметическое: " + average(arr);
    document.querySelector('.sum').innerHTML = "Сумма чисел: " + sum(arr);
    document.querySelector('.multiply').innerHTML = "Произведение чисел: " + multiply(arr);
}


