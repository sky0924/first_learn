# 15 변수 : primitive와 object의 차이점

태그: 2021년 10월 1일

## Primitive Type

- 더이상 쪼개질 수 없는 작은 단위
- 선언 → 메모리 할당
- number, string, boolean, null, undefined, symbol

```jsx
let number = 24;
let number2 = number; // number2에 number의 값(value)이 복사됨
```

## Object Type

- 두 개 이상의 데이터가 포함된 큰 단위
- 선언 → 메모리 할당
- 여러 데이터들을 묶어서 가리키는 주소 존재(ref)

```jsx
let obj = {
	name: 'sky',
	age: 18,
};

let obj2 = obj; // obj2에 obj의 주소(ref)가 복사됨
```

```jsx
const obj3 = {
	name: 'sky',
	age: 18,
};

obj3 = {
	name: 'haneul',
	age: 19,
}; // const이기 때문에 ref가 가리키는 object 자체는 변경 불가

obj3.name = 'haneul'; // 하지만 ref가 가리키는 값은 변경 가능
```