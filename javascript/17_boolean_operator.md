# 17 연산자 : boolean의 모든 것, && 연산자

태그: 2021년 10월 1일

## boolean

[Boolean - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

- false: 0, -0, '', null, undefined, NaN
- true: -1, 'hello', [] (empty array → object 자체이기 때문에 비어있어도 true)

```jsx
if (true) {
	console.log('true!');
} else {
	console.log('false!');
}
```

## && 연산자

```jsx
let num; // undefined
num && console.log(num); // num이 false이면 뒤의 코드는 실행 x
if (num) { console.log(num); } // 같은 코드
```