# 02 실행 컨텍스트

태그: 2021년 10월 5일

## Execution Context

- execution : 실행 (동일한 조건/환경을 지니는 코드 뭉치)
    - 동일한 조건 : 전역공간, 함수, eval, module
- context : 문맥, 맥락, 환경 (코드를 실행할 때 필요한 조건/환경정보)
- execution context : 코드를 실행하는 데 필요한 배경이 되는 조건/환경
- 오직 **함수**에 의해 컨텍스트 구분!

```jsx
let a = 1;
function outer() {
	console.log(a);
	
	function inner() {
		console.log(a);
		let a = 3;
	}
	
	inner();
	console.log(a);
}

outer();
console.log(a);
```

### call stack

- 현재 어떤 함수가 동작중인지,
다음에 어떤 함수가 호출될 예정인지 등을 제어하는 자료구조
- 전역 컨텍스트 ← outer ← inner

### 실행 컨텍스트 내부

- 세 가지 환경 정보
    - variableEnvironment
        
        → 식별자 정보 수집
        
    - LexicalEnvironment : 변화 실시간으로 반영
        
        → 각 식별자의 데이터 추적
        
    - ThisBinding

### Lexical Environment

- Lexical : 어휘적, 사전적
- 실행 컨텍스트를 구성하는 환경 정보들을 모아 사전처럼 구성한 객체
    - 내부식별자 a : 현재 값은 undefined이다.
    - 내부식별자 b : 현재 값은 20이다.
    - 외부 정보 : D를 참조한다.
- environmentRecord
    - 환경 기록
    - 현재 문맥의 식별자 정보
    - hoisting: 끌어올리다 (허구의 개념)
        - 선언 부분만 끌어올림
            
            ```jsx
            console.log(a());
            console.log(b());
            console.log(c());
            
            function a() {
            	return 'a';
            }
            var b = function bb() {
            	return 'b';
            }
            var c = function () {
            	return 'c';
            }
            
            // * hoisting *
            function a() {
            	return 'a';
            }
            var b;
            var c;
            
            console.log(a());
            console.log(b()); // -> error
            console.log(c()); // -> error
            
            b = function bb() {
            	return 'b';
            }
            c = function () {
            	return 'c';
            }
            ```
            
- outerEnvironmentReference
    - 외부 환경 참조
    - 현재 문맥에 관련 있는 외부 식별자 정보
    - inner
        - 
    - outer
    - 전역