# 07 클래스

태그: 2021년 10월 8일

## Class

- instance : 공통된 속성을 지니는 구체적 대상
- class : 공통 속성을 모은 추상적인 개념
- 상위의 클래스(superclass)가 정의되어야만 하위의 클래스(subclass)와 인스턴스가 생성될 수 있다.
- static methods, properties : 프로토타입 프로퍼티 내부에 할당되지 않고, 생성자 함수 객체에 직접 할당
    - 해당 클래스 소속 인스턴스들의 개별적인 동작이 아닌 소속 여부 확인, 소속 부여 등 공동체적인 판단이 필요할 때 활용
- instance → prototype methods
    - [[Prototype]]으로 연결되어 있어 접근 가능
- instance → static methods & properties
    - 접근 방법 없음
    - constructor를 통해 우회는 가능하지만, 
    인스턴스를 this로 하기 위한 별도의 처리가 필요하고 정상적인 처리가 어렵다.

```jsx
function Person(name, age) {
	this._name = name;
	this._age = age;
}

// static method
Person.getInformations = function(instance) {
	return {
		name: instance._name,
		age: instance._age
	}
}

// (prototype) methods
Person.prototype.getName = function() {
	return this._name;
}
Person.prototype.getAge = function() {
	return this._age;
}

let sky = new Person('sky', 20);
console.log(sky.getName());
console.log(sky.getAge());
console.log(sky.getInformations(sky)); // error
console.log(**Person**.getInformations(sky));
```

### Class Inheritance

```jsx
// Person Class
function Person(name, age) {
	this.name = name || '이름없음';
	this.age = age || '나이모름';
}

Person.prototype.getName = function() {
	return this.name;
}
Person.prototype.getAge = function() {
	return this.age;
}

// Employee Class
function Employee(name, age, position) {
	this.name = name || '이름없음';
	this.age = age || '나이모름';
	this.position = position || '직책모름';
}

Person.prototype.getName = function() {
	return this.name;
}
Person.prototype.getAge = function() {
	return this.age;
}
Person.prototype.getPosition = function() {
	return this.position;
}
```

```jsx
// Person Class
function Person(name, age) {
	this.name = name || '이름없음';
	this.age = age || '나이모름';
}
Person.prototype.getName = function() {
	return this.name;
}
Person.prototype.getAge = function() {
	return this.age;
}

// Employee Class
function Employee(name, age, position) {
	this.name = name || '이름없음';
	this.age = age || '나이모름';
	this.position = position || '직책모름';
}
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
Employee.prototype.getPosition = function() {
	return this.position;
}

let sky = new Employee('sky', 20, 'Student');
console.dir(sky);
```

```jsx
// Person Class
function Person(name, age) {
	this.name = name || '이름없음';
	this.age = age || '나이모름';
}
Person.prototype.getName = function() {
	return this.name;
}
Person.prototype.getAge = function() {
	return this.age;
}

// Employee Class
function Employee(name, age, position) {
	this.name = name || '이름없음';
	this.age = age || '나이모름';
	this.position = position || '직책모름';
}
Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
Employee.prototype.getPosition = function() {
	return this.position;
}

// Bridge Class
Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;
Employee.prototype.getPosition = function() {
	return this.position;
}

let sky = new Employee('sky', 20, 'Student');
console.dir(sky);
```

```jsx
let extendClass = (function(){
	function Bridge(){}
	return function(Parent, Child) {
		Bridge.prototype = Parent.prototype;
		Child.prototype = new Bridge();
		Child.prototype.constructor = Child;
		// 인스턴스의 value도 상속으로 간략화할 수 있다.
		Child.prototype.superClass = Parent;
	}
})();

function Employee(name, age, position) {
	this.superClass(name, age);
	this.position = position || '직책모름';
}

extendClass(Person, Employee);
```