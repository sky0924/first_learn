# 16 함수 : 함수의 정의와 호출, callback 함수

태그: 2021년 10월 1일

## 함수의 정의와 호출

- 함수를 선언할 때 파라미터 변수에는 아무런 값도 담겨있지 않 다.
    
    ```jsx
    function add(a, b) {
    	return a + b;
    }
    
    function divide(a, b) {
    	return a / b;
    }
    ```
    
- 함수를 호출할 때 파라미터 변수에 값이 담긴다.
    
    ```jsx
    add(5, 6);
    ```
    
- 함수명에는 코드블럭을 가리키는 ref가 담겨있다. (함수 자체도 object이기 때문)
    
    ```jsx
    function surprise(operator) {
    	const result = operator(2, 4);
    	console.log(result);
    } 
    
    surprise(add); // add의 ref 전달
    surprise(divide);
    ```
    
- 함수의 인자는 의미있게 짓는 것이 좋다!