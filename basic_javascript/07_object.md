# 07 Object란?

태그: 2021년 9월 24일

**Objects**

- object = { key: value }

1. Literals and Properties

    ```jsx
    const obj1 = {}; // object literal
    const obj2 = new Object(); // object constructor

    function print(person) {

    	console.log(person.name);
    	console.log(person.age);

    }

    const sky = { name: 'sky', age: 18 };
    print(sky);
    ```

    JavaScript는 data type이 runtime에 동적으로 결정됨

    ```jsx
    sky.hasJob = true;
    console.log(sky.hasJob);
    ```

    ```jsx
    delete sky.hasJob;
    console.log(sky.hasJob);
    ```

    → 이런 것도 가능하지만 유지보수가 어렵고 에러 발생 가능성이 많아져 웬만하면 사용 X

1. Computed Properties
    - object.key
    → 필요한 키가 명확할 때
    - object['key']
    → 실시간으로 runtime에서 결정되는 키가 필요할 때 (동적으로)

    ```jsx
    console.log(sky.name);
    console.log(sky['name']);

    sky['hasJob'] = true;
    console.log(sky.hasJob);

    function printVal(obj, key) {
    	console.log(obj[key]);
    }
    printVal(sky, 'name');
    ```

1. Property Value Shorthand

    ```jsx
    const person1 = { name: 'sky', age: 18 };
    const person2 = { name: 'sung', age: 19 };

    const person3 = makePerson('min', 20);
    console.log(person3);

    function makePerson(name, age) {
    	return {
    		name: name,
    		age: age,
    	};
    }
    ```

1. Constructor Function

    ```jsx
    const person4 = new Person('chan', 21);
    console.log(person4);

    function Person(name, age) {
    	// this = {};
    	this.name = name;
    	this.age = age;
    	// return this;
    }
    ```

1. In Operator

    ```jsx
    console.log('name' in sky); // -> true
    console.log('age' in sky); // -> true
    console.log('birth' in sky); // -> false
    console.log(sky.birth); // -> undefined
    ```

1. for-in vs for-of

    ```jsx
    for (key in sky) {
    	console.log(key);
    }
    ```

    ```jsx
    const array = [2, 4, 9];
    for (value of array) {
    	console.log(value);
    }
    ```

1. Cloning

    ```jsx
    const user = { name: 'sky', age: 18 };
    const user2 = user;
    user2.name = 'coder';
    console.log(user);
    ```

    ```jsx
    const user3 = {};
    for (key in user) {
    	user3[key] = user[key];
    }
    console.log(user3);
    ```

    ```jsx
    const user4 = {}
    Object.assign(user4, user);
    console.log(user4);
    ```

    ```jsx
    const fruit1 = { color: 'red' };
    const fruit2 = { color: 'blue', size: 'big' };
    const mixed = Object.assign({}, fruit1, fruit2);
    console.log(mixed.color); // -> blue (덮어쓰기)
    console.log(mixed.size); // -> big
    ```