
'use strict';

// 1. make a string out of an array
const a = ['kim', 'ha', 'neul'];
console.log(a.join(''));

// 2. make an array out of a string
const b = 'kim, ha, neul';
console.log(b.split(',', 1));

// 3. make this array look like this: [5, 4, 3, 2, 1]
const c = [1, 2, 3, 4, 5];
console.log(c.reverse());
console.log(c); // 기존의 배열도 반전됨 (새로운 배열 반환 X)

// 4. make new array without the first two elements
const d = [1, 2, 3, 4, 5];
console.log(d.slice(2, 5)); // end는 배제 -> 2 ~ 4번째 index 추출

// 5. find a student with the score 90
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
    new Student('E', 18, true, 88),
];

const e = students.find((student) => student.score === 90);
console.log(e);

// 6. make an array of enrolled students
const f = students.filter((student) => student.enrolled);
console.log(f);

// 7. make an array containing only the student's scores
// result should be: [45, 80, 90, 66, 88]
const g = students.map((student) => student.score);
console.log(g);

// 8. check if there is a student with the score lower than 50
const h = students.some((student) => student.score < 50);
console.log(h);

// 8-1 check if every student with the score lower than 50
const i = students.every((student) => student.score < 50);
console.log(i);

// 9. compute student's average score
const j = students.reduce((prev, curr) => prev + curr.score, 0);
console.log(j / students.length);

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
const k = students
    .map((student) => student.score)
    .join(', ');
console.log(k);

// 10-1. sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
const k = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // ascending order
    // .sort((a, b) => b - a) // descending order
    .join(', ');
console.log(k);

