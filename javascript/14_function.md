# 14 자바스크립트 함수 기본편

태그: 2021년 10월 1일

## 함수의 선언과 호출

```jsx
function doSomething() {
	console.log('Do Something..');
}

doSomething();
```

```jsx
function add(a, b) {
	const sum = a + b;
	return sum;
}

add(1, 2);
```

```jsx
function doAdd(add) {
	const sum = add(2, 3)
	console.log(sum);
}

doAdd(add); // 함수 이름만 -> 함수를 '그대로' 전달
doAdd(add()); // 바로 호출 -> 파라미터가 없으므로 실행 x
```

```jsx
const addFun = add;
console.log(addFun);
addFun(3, 4);
```