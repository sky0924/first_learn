# 23 JavaScript 최신 문법

태그: 2021년 10월 5일

## ES6 (2015)

1. Shorthand property names
    
    [객체 초기자 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
    
    ```jsx
    // 일반적인 객체 생성 방식
    const sky1 = {
    	name: 'sky',
    	age: '18',
    };
    
    // 변수를 이용하여 객체의 값을 지정할 수도 있음
    const name = 'sky';
    const age = '18';
    const sky2 = {
    	name: name,
    	age: age,
    };
    
    // key와 value가 같을 때, 하나로 생략 가능
    const sky3 = {
    	name,
    	age,
    };
    ```
    
2. Destructuring assignment
    
    [구조 분해 할당 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
    
    ```jsx
    // student 객체 생성
    const student = {
    	name: 'sky',
    	level: 1,
    };
    
    // 객체의 값 불러오기 (복잡)
    const name = student.name;
    const level = student.level;
    console.log(name, level); // -> sky 1
    
    // 객체의 값 불러오기 (단순)
    const { name, level } = student;
    console.log(name, level); // -> sky 1
    
    // 다른 이름으로 불러오고 싶을 때
    const { name: studentName, level: studentLevel } = student;
    
    // 배열 예시
    const animals = ['🐶', '🐱'];
    
    // before
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
    
    // after
    const [first, second] = animals;
    console.log(first, second);
    ```
    
3. Spread Syntax
    
    [전개 구문 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
    
    ```jsx
    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];
    
    // array copy
    const arrayCopy1 = [...array];
    
    // add more obj
    const arrayCopy2 = [...array, {key: 'key3'}];
    
    // object copy
    const obj3 = {...obj1};
    
    // array concatenation
    const fruits1 = ['🍇', '🍓'];
    const fruits2 = ['🍊', '🍋'];
    const fruits = [...fruits1, ...fruits2];
    
    // object merge
    // key가 같으면 덮어쓰기됨
    const animal1 = { dog: '🐶' };
    const animal2 = { cat: '🐱' };
    const animals = {...animal1, ...animal2};
    ```
    
4. Default Parameters
    
    [기본값 매개변수 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)
    
    ```jsx
    // before
    function printMessage(message) {
    	if (message == null) {
    		message = 'default message';
    	}
    	console.log(message);
    }
    printMessage('Hello World!');
    printMessage();
    
    // after
    function printMessage(message = 'default message') {
    	console.log(message);
    }
    printMessage('Hello World!');
    printMessage();
    ```
    
5. Ternary Operator
    
    [삼항 조건 연산자 - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
    
    ```jsx
    // before
    const isCat = true;
    let component;
    if (isCat) {
    	component = '🐱';
    } else {
    	component = '🐶';
    }
    console.log(component);
    
    // after
    const component = isCat ? '🐱' : '🐶';
    console.log(component);
    
    console.log(isCat ? '🐱' : '🐶');
    ```
    
6. Template Literals
    
    [Template literals - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
    
    ```jsx
    // before
    const weather = '🌤';
    const temparature = '18℃';
    console.log('Today weather is ' + weather 
    	+ 'and temparature is ' + temparature);
    
    // after
    console.log(`Today weather is ${weather} and temparature is ${temparature}`);
    ```
    

## ES11 (2020)

1. Optional chaining 🤔
    
    [Optional chaining - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
    
    ```jsx
    const person1 = {
    	name: 'sky',
    	job: {
    		title: 'S/W Engineer',
    		manager: {
    			name: 'haneul',
    		},
    	},
    };
    const person2 = {
    	name: 'haneul',
    };
    
    function printManager(person) {
    	console.log(person.job.manager.name);
    }
    printManager(person1);
    printManager(person2); // -> undefined error
    
    // before
    function printManager(person) {
    	console.log(
    		person.job
    			? person.job.manager
    				? person.job.manager.name
    				: undefined
    			: undefined
    	);
    }
    
    // after 1
    function printManager(person) {
    	console.log(person.job && person.job.manager && person.job.manager.name);
    }
    
    // after 2
    function printManager() {
    	console.log(person.job?.manager?.name);
    }
    ```
    
2. Nullish Coalescing Operator
    
    [Nullish coalescing operator - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
    
    ```jsx
    // Logical OR operator
    
    // before
    // || -> false일 때
    const name = 'sky';
    const name = null; // -> (false) Guest
    const name = ''; // -> (false) Guest
    const userName = name || 'Guest';
    console.log(userName);
    
    const num = 0; // -> (false) undefined
    const userName = num || 'undefined';
    console.log(userName);
    
    // after
    // ?? -> 값이 없을 때
    const name = 'sky';
    const name = null;
    const name = '';
    const userName = name ?? 'Guest';
    console.log(userName);
    
    const num = 0;
    const userName = num ?? 'undefined';
    console.log(userName);
    ```