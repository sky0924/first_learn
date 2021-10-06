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
- global ← outer ← inner

### 실행 컨텍스트 내부

- 세 가지 환경 정보
    - variableEnvironment : 최초의 식별자 정보가 변화하지 않음
        
        → 식별자 정보 수집
        
    - LexicalEnvironment : 실행 컨텍스트에 따른 변화가 실시간으로 반영됨
        
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
    - hoisting : 끌어올리다 (허구의 개념)
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
            
- outerEnvironmentReference → **Scope Chain**에 관여
    - 외부 환경 참조
    - 현재 문맥에 관련 있는 외부 식별자 정보
    - 자신 및 외부 참조 가능, 내부 참조 불가능 (* 참조: 접근할 수 있는가)
        - inner는 ERecord로 자신을, outerER로 바깥을 참조할 수 있다.
        - outer 역시 ERecord로 자신을, outerER로 바깥을 참조할 수 있지만,
        안쪽에 있는 inner를 참조할 수는 없다.
    - scope chain : 변수의 유효 범위 ← 실행 컨텍스트가 결정
        - 가장 가까운 자신부터 점점 멀리 있는 스코프로 찾아나가는 것
        → 가장 가까운 값이 참조됨
        - shadowing : 가장 먼저 찾은 값에만 접근 가능
        

### Execution Context Process

```jsx
let a = 1;

function outer() {
	console.log(a); // 1
	
	function inner() {
		console.log(a); // undefined
		let a = 3;
	}
	
	inner();

	console.log(a); // 1
}

outer();

console.log(a); // 1
```

#Global Execution Context 활성화

[ 전역 컨텍스트 ]

( environmentRecord → 식별자 수집 )

1. 변수 a 선언
`let a`
2. 함수 outer 선언
`function outer() {}`

( 코드 실행 )

1. 변수 a에 1 할당
`a = 1;`
2. outer 함수 호출
`outer();`
    
    #Outer Execution Context 활성화
    
    [ Outer 컨텍스트 ]
    
    ( environmentRecord → 식별자 수집 )
    
    1. 함수 inner 선언
    `function inner() {}`
    
    ( 코드 실행 )
    
    1. Outer 컨텍스트에서 a 탐색 → x
    Global 컨텍스트에서 a 탐색 → 1 출력
    `console.log(a);`
    2. inner 함수 호출
        
        `inner();`
        
        #Inner Execution Context 활성화
        
        [ Inner 컨텍스트 ]
        
        ( environmentRecord → 식별자 수집 )
        
        1. 변수 a 선언
        `let a`
        
        ( 코드 실행 )
        
        1. Inner 컨텍스트에서 a 탐색 → undefined 출력
        `console.log(a);`
        2. 변수 a에 3 할당
        `a = 3;`
        
        [ Inner 컨텍스트 종료 ]
        
    3. Outer 컨텍스트에서 a 탐색 → x
    Global 컨텍스트에서 a 탐색 → 1 출력
    `console.log(a);`
    
    [ Outer 컨텍스트 종료 ]
    
3. Global 컨텍스트에서 a 탐색 → 1출력

[ 전역 컨텍스트 종료 ]

```jsx
// environmentRecord
let a;

function outer(){}

// execute code
a = 1;

outer();
{
	// environmentRecord
	function inner(){}
	
	// execute code
	console.log(a); // -> 1

	inner();
	{
		// environmentRecord
		let a;
		
		// execute code
		console.log(a); // -> undefined
		a = 3;
	}

	console.log(a); // -> 1
}

console.log(a); // -> 1
```