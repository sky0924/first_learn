# 10 JSON의 개념과 활용

태그: 2021년 9월 27일

### 서버 통신의 시작

1. client-server
    - HTTP: Hypertext Transfer Protocol
    - AJAX: Asynchronous JavaScript And XML
    - XHR: XML Http Request
    - fetch() API

1. data file format
    - XML: eXtensible Markup Language
    - JSON: JavaScript Object Notation

1. JSON
    - serialize (직렬화하다) → string
    - deserialize (역직렬화하다)

Object to JSON

```jsx
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);

const rabbit = {
	name: 'tori',
	color: 'white',
	size: null,
	birth: new Date(),
	jump: () => {
		console.log(`${name} can jump!`);
	},
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'birth']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'name' ? 'sky' : value;
});
console.log(json);
// -> key: , value: [object Object] 가장 상위인 것부터 전달됨
```

JSON to Object

```jsx
const obj = JSON.parse(json);
console.log(obj);

rabbit.jump();
obj.jump(); // -> error, 함수는 전달되지 않음

console.log(rabbit.birth.getDate());
console.log(obj.birth.getDate()); // -> error
console.log(obj.birth); // birth는 string data 자체이기 때문

// callback 함수 전달
obj = JSON.parse(json, (key, value) => {
	console.log(`key: ${key}, value: ${value}`);
	return key === 'birth' ? new Date(value) : value;
});

// -> key: , value: [object Object] 가장 나중에 출력
```

 * OverLoading: 함수의 이름은 동일하지만, 전달하는 파라미터가 다름
                            → 다른 방식으로 호출 가능

 * Callback: 다른 함수의 파라미터로 함수를 전달 🤔