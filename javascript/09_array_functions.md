# 09 유용한 10가지 Array Functions

태그: 2021년 9월 24일

### Quiz

1. make a string out of an array

    ```jsx
    const array = ['apple', 'banana', 'orange'];
    const result = array.join(' ');
    console.log(result);
    ```

2. make an array out of a string

    ```jsx
    const array = 'apple,banana,orange';
    const result = array.split(',', 2);
    console.log(result);
    ```

3. make this array look like this: [5, 4, 3, 2, 1]

    ```jsx
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse(',');
    console.log(result);
    console.log(array);
    ```

4. make new array without the first two elements

    ```jsx
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
    ```

```jsx
class Student {
	constructor(name, age, enrolled, score) {
		this.name = name;
		this.age = age;
		this.enrolled = enrolled;
		this.score = score;
	}
}

const students = [
	new Student('A', 29, true, 45),
	new Student('B', 28, false, 80),
	new Student('C', 30, true, 90),
	new Student('D', 40, false, 66),
	new Student('E', 18, true, 88)
];
```

1. find a student with the score 90

    ```jsx
    const result = students.find((student) => student.score === 90);
    console.log(result);
    ```

2. make an array of enrolled students 

    ```jsx
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    ```

3. make an array containing only the student's scores
result should be: [45, 80, 90, 66, 88]

    ```jsx
    const result = students.map((student) => student.score);
    console.log(result);
    ```

4. check if there is a student with the score lower than 50

    ```jsx
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
    ```

5. compute student's average score

    ```jsx
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
    ```

6. make a string containing

    ```jsx
    const result = students
    .map((student) => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result);
    ```

    Bonus.

    sorted in ascending order
    result should be: '45, 66, 80, 88, 90'

    ```jsx
    const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);
    ```