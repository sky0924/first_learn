# 04 콜백 함수

태그: 2021년 10월 6일

### Callback Function

- 제어권 위임
    - 실행 시점
        
        ```jsx
        // setInterval(callback, milliseconds)
        setInterval(function () {
        	console.log('1초마다 실행되는 코드');
        }, 1000);
        ```
        
    - 매개변수
        
        ```jsx
        let arr = [1, 2, 3, 4, 5];
        let entries = [];
        
        // .forEach(callback(currVal, index, array){}[, thisArg])
        arr.forEach(function(value, index) {
        	entries.push([index, value, this[index]]);
        }, [10, 20, 30, 40, 50]);
        
        console.log(entries);
        ```
        
    - this 🤔
        
        ```jsx
        // addEventListener(type, callback[, options, useCapture])
        document.body.innerHtml = '<div id = "a"> abc </div>';
        
        function cbFunc(x) {
        	console.log(this, x);
        }
        
        document.getElementById('a').addEventListener('click', cbFunc);
        
        // 제어된 this를 임의로 바꾸고 싶다면
        const obj = { a: 1 };
        document.getElementById('a').addEventListener('click', cbFunc.bind(obj));
        ```
        

### Callback Function의 특징

- 다른 함수의 인자로 콜백 함수를 전달하면, 그 함수가 콜백 함수의 제어권을 갖게 된다.
- 특별한 요청(bind)이 없는 한 다른 함수에 미리 정해놓은 방식에 따라 콜백 함수를 호출한다.
    - 미리 정해놓은 방식?
        - 어떤 시점에 콜백을 호출할지
        - 인자에 어떤 값들을 지정할지
        - this에 무엇을 바인딩할지 등
- 콜백은 무조건 함수이다.
    - 따라서 this는 항상 전역 객체를 가리킨다.