function generate(){
    let arr = [];
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));
    arr.push(Math.round(Math.random()*10));

    document.querySelector('.arr').innerHTML ="Сгенерировали: " + arr;

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