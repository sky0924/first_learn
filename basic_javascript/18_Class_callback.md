# 18 클래스 : Class 예제와 callback 함수

태그: 2021년 10월 1일

## Class

```jsx
class Counter {
	constructor() {
		this.counter = 0;
	}

	increase() {
		this.counter++;
		console.log(this.counter);
		if(this.counter % 5 === 0) {
			console.log(`oh! It's ${num}`);
		}
	}
}

const cnt = new Counter();

cnt.increase();
```

## Callback 1

```jsx
class Counter {
	constructor() {
		this.counter = 0;
	}

	increase(fiveTimes) {
		this.counter++;
		console.log(this.counter);
		if(this.counter % 5 === 0) {
			fiveTimes(this.counter);
		}
	}
}

const cnt = new Counter();

function printSomething(num) {
	console.log(`oh! It's ${num}`);
}
function alertSomething(num) {
	alert(`oh! It's ${num}`);
}

cnt.increase(printSomething);
// cnt.increase(alertSomething);
```

## Callback 2

```jsx
class Counter {
	constructor(cbFn) {
		this.counter = 0;
		this.callback = cbFn;
	}

	increase() {
		this.counter++;
		console.log(this.counter);
		if(this.counter % 5 === 0) {
			this.callback(this.counter);
		}
	}
}

function printSomething(num) {
	console.log(`oh! It's ${num}`);
}
function alertSomething(num) {
	alert(`oh! It's ${num}`);
}

const cnt = new Counter(printSomething);
// const cnt = new Counter(alertSomething);

cnt.increase();
```

## Callback 3

```jsx
class Counter {
	constructor(cbFn) {
		this.counter = 0;
		this.callback = cbFn;
	}

	increase() {
		this.counter++;
		console.log(this.counter);
		if(this.counter % 5 === 0) {
			this.callback && this.callback(this.counter);
		}
	}
}

function printSomething(num) {
	console.log(`oh! It's ${num}`);
}
function alertSomething(num) {
	alert(`oh! It's ${num}`);
}

const cnt = new Counter();

cnt.increase();
```