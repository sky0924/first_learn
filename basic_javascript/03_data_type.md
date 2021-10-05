# 03 JavaScript의 Data Type

태그: 2021년 9월 17일

## Variable

- 어플리케이션 실행 → 메모리 할당
- 변수 선언 → 포인터 생성

    `let name;`

    - let (ES6~)
    - var (~ES5)
        - var hoisting : 선언 위치에 상관없이 선언을 가장 위로 끌어올려주는 것

            `age = 17; // 선 할당`

            `var age; // 후 선언`

- 값 할당 : 포인터가 가리키는 메모리에 데이터 저장

    `name = 'sky';`

- 변수 출력

    `console.log(name);`

- 블럭 : 블럭 밖에서 접근 불가
- Global Scope : 어디에서나 접근 가능

    // Global Scope
    let global_name = 'Global';
    {
         // Local Scope
         let local_name = 'Local';
    }

    - 어플리케이션 종료 시까지 메모리 차지 → 최소한으로 사용하는 것이 좋음
    - class, function, if, for문 등 필요한 부분에서만 정의하여 사용

## Contants

- 상수 선언 및 할당 (동시)

    `const maxNumber = 5;`

- immutable data type
    - security : 보안
    - thread safety : 동시에 값을 변경하는 것을 방지
    - reduce human mistakes : 변경할 필요 없는 데이터 명시 → 실수 방지

## Variable Types

1. primitive
    - single item (더 이상 쪼갤 수 없는 작은 단위)
    - number, string, boolean, null, undefined, symbol
2. object
    - single item을 묶어 box 단위로 관리할 수 있게 함
3. function
    - first-class function

### number

- infinity : 양수를 0으로 나누었을 때
- -infinity : 음수를 0으로 나누었을 때
- NaN : 숫자가 아닌 값 (Not a Number)

→ 연산 전에 값의 데이터 형식 확인 필요

### string

const name = 'sky';
const value = 'hello ' + name;

// 결과 값이 모두 같다.
console.log('value: hello sky, type: string');
console.log('value: ' + value + ', type: ' + typeof value);
console.log(`value: ${value}, type: ${typeof value}`);

### boolean

- true
- false
    - 0
    - null
    - undefined
    - NaN
    - ''

### null

- null값 할당
- 값이 없음을 명시

### undefined

- 선언 후 값이 할당되지 않은 상태
- 값이 없는 상태도 아님

### symbol

- unique identifiers
- 주어지는 값에 상관없이 고유한 식별자를 생성

    `const symbol1 = Symbol('id');`

- 주어지는 값이 같을 때 같은 식별자가 생성되도록 하는 방법

    `const symbol2 =  Symbol.for('id');`

- 출력할 때는 string형으로 변환해줘야 함

    `console.log('value: ${symbol1.description}');`

### Dynamic typing

- '7' + 5 → '75'
- '8' / '2' → 4
- 런타임에서 데이터 타입이 정해짐 → error

## Object

- primitive의 item들을 box로 묶어 관리

    `const sky = { name: 'sky', age: 17 };`

    `sky.age = 19;`