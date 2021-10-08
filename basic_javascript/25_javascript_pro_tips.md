# 25 JavaScript 프로처럼 쓰는 팁

태그: 2021년 10월 8일

## Ternary Operator

```jsx
// Bad Code
function getResult(score) {
	let result;
	if (score > 5) {
		result = '👍';
	} else if (score <= 5) {
		result = '👎';
	}
	return result;
}

// Good Code
function getResult(score) {
	return score > 5 ? '👍' : '👎';
}
```

## Nullish Coalescing Operator

```jsx
// Bad Code
function printMessage(text) {
	let message = text;
	if (text == null || text == undefined) {
		message = 'Nothing to display';
	}
}

// Good Code
function printMessage(text) {
	const message = text ?? 'Nothing to display';
}
```

### Default Parameter

```jsx
function printMessage(text = 'Nothing to display') {
	const message = text;
}
```

### Logical OR Parameter

```jsx
function printMessage(text) {
	const message = text || 'Nothing to display';
}
```

## Object Destructuring

```jsx
const person = {
	name: 'sky',
	age: '19',
	phone: '010-8248-7929',
};

// Bad Code
function displayPerson(person) {
	displayAvatar(person.name);
	displayName(person.name);
	displayProfile(person.name, person.age);
}

// Good Code
function displayPerson(person) {
	const { name, age } = person;
	displayAvatar(name);
	displayName(name);
	displayProfile(name, age);
}
```

[구조 분해 할당 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Spread Syntax

```jsx
const item = { type: 'shirt', size: 'M'};
const detail = { price: 12000, made: 'Korea', gender: 'F'};

// Bad Code
item['price'] = detail.price;

const newObject1 = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

const newObject2 = {
	type: item.type,
	size: item.type,
	price: detail.price,
	made: detail.made,
	gender: detail.gender,
};

// Good Code
const shirt1 = Object.assign(item, detail);

const shirt2 = {...item, ...detail};
const shirt3 = {...item, ...detail, price: 15000};
```

### Spread Syntax - Array

```jsx
let fruits = ['🍊', '🍋', '🥝'];
const fruits2 = ['🍇', '🥥'];

// fruits.push('🫐');
fruits = [...fruits, '🫐'];

// fruits.unshift('🍎');
fruits = ['🍎', ...fruits];

// fruits.concat(fruits2);
combined = [...fruits, ...fruits2];
```

## Optional Chaining

```jsx
const hah = {
	name: 'sky',
	age: 19,
};
const neul = {
	name: 'sky',
	age: 19,
	job: {
		title: 'Software Engineer',
	},
};

// Bad Code
function displayJobTitle(person) {
	if (person.job && person.job.title) {
		console.log(person.job.title);
	}
}

// Good Code
function displayJobTitle(person) {
	if (person.job?.title) {
		console.log(person.job.title);
	}
}

// (+) Nullish coalescing
function displayJobTitle(person) {
	const title = person.job?.title ?? 'No Job Yet';
	console.log(title);
}
```

## Template Literals

```jsx
const person = {
	name: 'sky',
	score: 9,
};

// Bad Code
console.log('Hello' + person.name + ', Your current score is: ' + person.score);

// Good Code
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

function greetings(person) {
	const { name, score } = person;
	console.log(`Hello ${name}, Your current score is: ${score}`);
}
```

## Loops

```jsx
const items = [1, 2, 3, 4, 5, 6];

// Bad Code
function getAllEvens(items) {
	const result = [];
	for (let i = 0; i < items.length; i++) {
		if (items[i] % 2 === 0) {
			result.push(items[i]);
		}
	}
	return result;
}

function multiplyByFour(items) {
	const result = [];
	for (let i = 0; i < items.length; i++) {
		result.push(items[i] * 4);
	}
	return result;
}

function sumArray(items) {
	let sum = 0;
	for (let i = 0; i < items.length; i++) {
		sum += items[i];
	}
	return sum;
}

// Good Code
function getAllEvens(items) {
	return items.filter((num) => num % 2 === 0);
}

function multiplyByFour(items) {
	return items.map((num) => num * 4);
}

function sumArray(items) {
	items.reduce((a, b) => a + b, 0);
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(muliple);
```

```jsx
// Better Code
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);

// Chaining
const result = items
	.filter((num) => num % 2 === 0)
	.map((num) => num * 4)
	.reduce((a, b) => a + b, 0);
```

## Promise - Async & Await

```jsx
// Bad Code
function displayUser() {
	fetchUser()
		.then((user) => {
			fetchProfile(user)
				.then((profile) => {
					updateUI(user, profile);
				});
		});
}

// Good Code
async function displayUser() {
	const user = await fetchUser();
	const profile = await fetchProfile(user);
	updateUI(user, profile);
}
```

### Bonus Quiz

```jsx
// Remove Duplicates
const array = ['🍎', '🍋', '🍊', '🍌', '🍎', '🍌'];
console.log([...new Set(array)]);
```