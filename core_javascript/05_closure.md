# 05 클로저

태그: 2021년 10월 7일

## Closure

- 닫힘, 폐쇄, 완결성
- 내부 함수와 LexicalEnvironment의 조합
- 함수가 생성될 때 같이 생성됨
- 클로저를 활용한 ~
    - A의 LexicalEnvironment와 내부 함수 B의 조합에서 나타나는 특별한 현상
    → 컨텍스트 A에서 선언한 변수를 내부 함수 B에서 참조할 때 나타나는 특별한 현상
        - B - outerEnvironmentReference ⇒ A - environmentRecord
    
    ```jsx
    let outer = function () {
    	let a = 1;
    
    	let inner = function () {
    		return ++a;
    	};
    
    	return inner;
    }
    
    let outer2 = outer();
    console.log(outer2());
    console.log(outer2());
    ```
    
    - 컨텍스트 A에서 선언한 변수를 참조하는 내부함수 B를 A가 외부로 전달할 경우, 
    A가 종료된 이후에도 a가 사라지지 않는 현상
    (컨텍스트가 종료되었음에도 컨텍스트 내에서 선언된 변수가 참조로 인해 사라지지 않는 것)
    - 지역변수가 함수 종료 후에도 사라지지 않게 할 수 있음(선택적)
    
    ```jsx
    function user(_name) {
    	let _logged = true;
    	return {
    		get name() { return _name },
    		set name(v) { _name = v },
    		login() { _logged = true },
    		logout() { _logged = false},
    		get status() {
    			return _logged ? 'login' : 'logout';
    		}
    	};
    }
    let sky = user('haneul')
    ```
    
    1. 함수 종료 후에도 사라지지 않고 값을 유지하는 변수
    2. 외부로부터 내부 변수 보호 (캡슐화)