# 12 Promise의 개념과 활용

태그: 2021년 9월 27일

### Promise

- asynchronous callback 대신 사용

1. state
    - pending → fulfilled or rejected
2. Producer-Consumer

### Producer

```jsx
const promise = new Promise((resolve, reject) => {
	console.log('doing something...');
	setTimeout(() => {
		resolve('sky');
		// reject(new Error('no network'));
	}, 2000);
});
```

### Consumers: then, catch, finally

```jsx
promise
	.then((value) => {
		console.log(value);
	})
	.catch(error => {
		console.log(error);
	})
	.finally(() => {
		console.log('finally');
	});
```

### Promise chaining

```jsx
const fetchNumber = new Promise((resolve, reject) => {
	setTimeout(() => resolve(1), 1000);
});

fetchNumber
	.then(num => num * 2)
	.then(num => num * 3)
	.then(num => {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(num - 1), 1000);
		});
	})
	.then(num => console.log(num));
```

### Error Handling

```jsx
const getHen = () => new Promise((resolve, reject) => {
	setTimeout(() => resolve('🐓'), 1000);
});
const getEgg = hen => new Promise((resolve, reject) => {
	setTimeout(() => resolve(`${hen} => 🥚`), 1000);
});
const cook = egg => new Promise((resolve, reject) => {
	setTimeout(() => resolve(`${egg} => 🍳`), 1000);
});

getHen()
.then(getEgg)
.catch(error => {
	return '🍞';
})
****.then(cook)
****.then(console.log)
.catch(console.log);
// .then(hen => getEgg(hen))
// .then(egg => cook(egg))
// .then(meal => console.log(meal));
```

- promise를 이용하여 callback hell 탈출하기 😇