# 13 JavaScript async와 await, 유용한 Promise APIs

태그: 2021년 9월 28일

Syntactic sugar!

clear style of using promise

## async

- promise 반환

```jsx
async function fetchUser() {
	return 'sky';
}

// function fetchUser() {
// 	return new Promise((resolve, reject) => {
// 		resolve('sky');
// 	};
// }

const user = fetchUser();
user.then(console.log);
console.log(user);

// .then((value) => console.log(value))
// .then(console.log) 생략 버전
```

## await

- async가 있는 함수에만 사용 가능

```jsx
function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
	await delay(3000);
	return '🍎';
}

async function getBanana() {
	await delay(3000);
	return '🍌';
}

// function getBanana() {
// 	return delay(3000)
// 		.then(() => '🍌');
// }
```

```jsx
// function pickFruits() {
// 	return getApple().then(apple => {
// 		return getBanana().then(banana => `${apple} + ${banana}`);
// 	});
// } -> promise hell

async function pickFruits() {
	const applePromise = getApple();
	const bananaPromise = getBanana();
	const apple = await applePromise();
	const banana = await bananaPromise();
	return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
```

## Useful Promise APIs

- all
    
    ```jsx
    function pickAllFruits() {
    	return Promise
    	.all([getApple(), getBanana()])
    	.then(fruits => fruits.join(' + '));
    }
    
    pickAllFruits().then(console.log);
    ```
    
- race
    
    ```jsx
    function pickOnlyOne() {
    	return Promise
    	.race([getApple(), getBanana()]);
    }
    
    pickOnlyOne().then(console.log);
    ```