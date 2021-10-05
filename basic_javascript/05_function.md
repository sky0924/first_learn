# 05 Function의 선언과 표현

태그: 2021년 9월 23일

## Function

- 프로그램을 이루는 기본적인 빌딩 블럭
- sub-program
- 여러 번 재사용 가능
- input(parameters) x → function f → output(return) f(x)

## Function Declaration

- 하나의 함수가 한 가지 일을 하도록 선언하는 것이 좋음

    function name(parameter1, parameter2) {
       code;
       return;
    }

     * TypeScript → variable: data type

- JavaScript에서 function은 object로 간주 → 변수에 할당하거나 함수를 리턴하는 등 다양하게 활용 가능

1. Parameters
    - primitive parameters → passed by value
    - object parameters → passed by reference

        function changeName(object) {
           object.name = 'sky';
        }
        const haneul = { name: 'haneul' };
        changeName(haneul);
        console.log(`name is ${ haneul }`);

        → name is sky

2. Default Parameters (ES6)
    - 사용자가 파라미터를 전달하지 않을 때 사용할 기본값

        function showMessage(message, name) {
           console.log(`${ message } by ${ name } !`);
        }
        showMessage('Hi');

        → undefined

        function showMessage(message, name = 'unknown') {
           console.log(`${ message } by ${ name } !`);
        }
        showMessage('Hi');

        → Hi by unknown !

3. Rest Parameters (ES6) 🤔

    function printAll(...args) {
       for (const arg of args) {
          console.log(arg);
       }
       // for (let i = 0; i <args.length; i++) {
       // console.log(args[i]);
       // }
    }
    printAll('one', 'two', 'three');

    → one
         two
         three

## Function Expression 🤔

- 일반적으로 선언 시 hoist 가능 (선언 전 호출 가능)

    print();
    function print() {
       console.log('print');
    }

- Anonymous Function

    const print = function () {
       console.log('print');
    };

    - 호출은 어떻게 ?
- Named Function

    const print = function print() {
       console.log('print');
    };

    - debug 시 stack traces에 함수 이름 기록
    - recursions → 함수 안에 다시 자신을 호출할 때
- Callback

    function showQuiz(answer, printYes, printNo) {
       if (answer === 'love you') {
          printYes();
       } else {
          printNo();
       }
    }
    const printYes = function () {
       console.log('yes!');
    };
    const printNo = function print() {
       console.log('no!');
    };
    showQuiz('wrong', printYes, printNo);
    showQuiz('love you', printYes, printNo);

- Arrow Function
    - always anonymous
    - not arrow function

        const simplePrint = function () {
           console.log('so simple!');
        };

    - arrow function

        const simplePrint = () => console.log('so simple!');
        const add = (a, b) => a + b;

- IIFE: Immediately Invoked Function Expression

    (function hello() {
       console.log('hello');
    })();