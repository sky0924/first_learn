# 03 this

태그: 2021년 10월 6일

### this

- variableEnvironment : 최초의 식별자 정보가 변화하지 않음
- LexicalEnvironment : 실행 컨텍스트에 따른 변화가 실시간으로 반영됨
- ThisBinding : 실행 컨텍스트가 생성될 때 = 함수가 호출될 때
함수 호출 방식에 따라 다름 → 동적으로 바인딩
    1. 전역공간 → 전역 컨텍스트를 실행하는 **전역 객체**(host)를 가리킴
        - 전역 객체의 정보는 자바스크립트의 실행 환경(runtime)에 따라 달라짐
        - browser : window
        - node.js : global
    2. 함수 호출 → **전역 객체를** 가리킴
        - ex) `print();`
    3. 메서드 호출 → **메서드 호출 주체**를 가리킴 (메서드명 앞)
        - 원래는 함수이지만 객체와 관련된 동작이면 메서드로 간주
        - ex) `a.print();` `a['print']();`
    4. callback 호출
        - 기본적으로는 함수 내부 호출과 동일하지만 상황에 따라 다름
        - ex) `a.print(callback);`
        - 명시적인 this 바인딩
            
            [Function.prototype.call() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
            
            ```jsx
            function a(x, y, z) {
            	console.log(this, x, y, z);
            }
            
            let b = {
            	bb: 'bbb',
            };
            
            a.call(b, 1, 2, 3);
            
            a.apply(b, [1, 2, 3]);
            
            let c = a.bind(b);
            c(1, 2, 3);
            
            let d = a.bind(b, 1, 2);
            d(3);
            ```
            
    5. 생성자 함수 호출
        - 인스턴스 객체 자체를 가리킴
        - ex) `let person1 = new Person('sky', 20);`