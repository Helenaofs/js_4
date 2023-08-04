// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);
    } 
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3,2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов

function createArray() {
    let arr = [];
    let arrayLength = 5;
    for (let i = 0; i < arrayLength; i++) {
        arr.push(Math.ceil(Math.random() * 9))
    }
    return arr;
}
const result = createArray();
console.log(result);

// 1. Рассчитать сумму элементов этого массива

function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum +=arr[i];        
    }
    return sum;
}
console.log(`Сумма элементов массива равна ${getSum(result)}`);

// 2. Найти минимальное число

function findMinNum(arr) {
    const minNum = Math.min(...arr);
    return minNum;
}
console.log(`Минимальное число массива ${findMinNum(result)}`);

// 3. Найти есть ли в этом массиве число 3

function findNum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 3) {
            count++
        }        
    }
    return count;
}
console.log(`В массиве чисел "3" равно ${findNum(result)}`);
