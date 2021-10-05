
'use strict';

// 1. Declaration
const arr1 = new Array();
const arr2 = [9, 24];


// 2. Index Position
const fruits = ['🍏', '🍎'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);


// 3. Looping over an array
// a. for
for (let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}

// b. for-of
for (let fruit of fruits)
{
    console.log(fruit);
}

// c. for-in
for (let fruit in fruits)
{
    console.log(fruits[fruit]);
}

// d. forEach
fruits.forEach( (fruit, index, array) => console.log(fruit, index, array) );


// 4. Addtion, Deletion, Copy
// a. push (add to end)
fruits.push('🍐', '🍊');
console.log(fruits);

// b. pop (remove to end)
fruits.pop();
fruits.pop();
console.log(fruits);

// c. unshift (add to front)
fruits.unshift('🍋', '🍌');
console.log(fruits);

// d. shift (remove to front)
fruits.shift();
fruits.shift();
console.log(fruits);

// ⚠️ shift & unshift are slower than push & pop

// e. splice (remove by index)
fruits.splice(3, 1);
fruits.splice(3);
console.log(fruits);

// f. concat (combine two arrays -> new one)
const fruits2 = ['🍈', '🍒'];
const newFruits = fruits.concat(fruits2);
console.log(fruits);
console.log(fruits2);
console.log(newFruits);


// 5. Searching
// a. indexOf -> (first) index number or -1
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍊'));

// b. includes -> boolean (true or false)
console.log(fruits.includes('🍎'));
console.log(fruits.includes('🍊'));

// c. lastIndexOf -> (last) index number or -1
fruits.push('🍎', '🍓', '🍎');
console.log(fruits.lastIndexOf('🍎'));
