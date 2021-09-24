# 06 Class와 Object의 차이점

태그: 2021년 9월 24일

1. class = fields + methods (ES6)
    - template
    - declare(선언하다) once
    - no data in

1. object
    - instance of a class
    - created many times
    - data in

```jsx
'use strict';

// 1. Class Declarations
class Person {
	
	// constructor
	constructor(name, age) {
		// fields
		this.name = name;
		this.age = age;
	}
	
	// methods
	speak() {
		console.log(`${this.name}: hello!`);
	}
	
}

const sky = new Person('sky', 18);
console.log(sky.name);
console.log(sky.age);
```

```jsx
// 2. Getter and Setters
class User {
	
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
	
	get age() {
		return this._age;
	}

	set age(value) {
		// if (value < 0) {
		//	 throw Error('age can not be negative');
		// }
		this._age = value < 0 ? 0 : value;
	}
	
}

const user1 = new User('haneul', 'kim', -1);
console.log(user1.age);
```

```jsx
// 3. Fields (public, private)
class Experiment {
	
	publicField = 9;
	#privateField = 24;
	
}

const exp = new Experiment();
console.log(exp.publicField); // -> 9
console.log(exp.privateField); // -> undefined
```

```jsx
// 4. Static properties and methods
class Article {
	
	static publisher = 'Nomad Coders';
	constructor(artNum) {
		this.artNum = artNum;
	}
	
	static printPub() {
		console.log(Article.publisher);
	}
		
}

const art1 = new Article(1);

console.log(art1.publisher); // -> undefined
console.log(Article.publisher); // -> Nomad Coders
```

```jsx
// 5. Inheritance(상속)
class Shape {
	
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}
	
	draw() {
		console.log(`drawing ${this.color} color!`);
	}
	
	getArea() {
		return width * this.height;
	}
	
}

class Rectangle extends Shape {}
class Triangle extends Shape {

	// over riding
	
	draw() {
		super.draw();
		console.log('🔺');
	}
	
	getArea() {
		return (this.width * this.height) / 2;
	}
	
}

const rec = new Rectangle(20, 20, 'skyblue');
rec.draw();
console.log(rec.getArea());

const trn = new Rectangle(20, 20, 'lightgreen');
trn.draw();
console.log(trn.getArea());
```

```jsx
// 6. Class checking: instanceOf

console.log(rec instanceOf Rectangle); // -> true
console.log(trn instanceOf Rectangle); // -> false
console.log(trn instanceOf Triangle); // -> true
console.log(trn instanceOf Shape); // -> true
console.log(trn instanceOf Object); // -> true
```