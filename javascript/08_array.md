# 08 Array의 개념

태그: 2021년 9월 24일

**Array**

- index로 접근 → 삽입, 삭제가 용이

1. Declaration

    ```jsx
    const arr1 = new Array();
    const arr2 = [9, 24];
    ```

1. Index Position

    ```jsx
    const fruits = ['🍎', '🍌'];
    console.log(fruits);
    console.log(fruits.length);
    console.log(fruits[0]);
    console.log(fruits[fruits.length - 1]);
    ```

1. Looping over an array

    ```jsx
    for (let i = 0; i < fruits.length; i++) {
    	console.log(fruits[i]);
    }
    ```

    ```jsx
    for (let fruit of fruits) {
    	console.log(fruit);
    }
    ```

    ```jsx
    fruits.forEach(function (fruit) {
    	console.log(fruit);
    });

    // arrow function
    fruits.forEach((fruit) => console.log(fruit));
    ```

1. Addtion, Deletion, Copy

    ```jsx
    fruits.push('🍇', '🍑');
    console.log(fruits);
    ```

    ```jsx
    fruits.pop();
    console.log(fruits);
    ```

    ```jsx
    fruits.unshift('🍓');
    console.log(fruits);
    ```

    ```jsx
    fruits.shift();
    console.log(fruits);
    ```

    - shift & unshift are slower than push & pop
    → 기존의 데이터들을 하나씩 뒤로 shift하기 때문

    ```jsx
    fruits.splice(3); // index가 3인 data부터 모두 지워짐 (개수 미지정)
    fruits.splice(3, 1); // index가 3인 data 하나가 지워짐
    fruits.splice(3, 1, '🍋'); // index가 3인 data 하나가 지워지고, 그 자리에 '🍋'를 추가
    ```

    ```jsx
    const fruits2 = ['🍒', '🍊'];
    const newFruits = fruits.concat(fruits2);
    console.log(newFruits);
    ```

1. Searching

    ```jsx
    console.log(fruits.indexOf('🍎')); // -> 0
    console.log(fruits.indexOf('🫐')); // -> -1 (없으면 -1 반환)
    ```

    ```jsx
    console.log(fruits.includes('🍎')); // -> true
    console.log(fruits.includes('🫐')); // -> false
    ```

    ```jsx
    console.log(fruits.lastIndexOf('🍎')); // -> 0
    ```