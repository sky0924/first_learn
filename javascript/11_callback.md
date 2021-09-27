# 11 비동기 처리의 시작, Callback

태그: 2021년 9월 27일

### 비동기 처리의 시작

- Synchronous (동기) : 요청과 결과가 동시에 일어남, 순서대로
→ 작업 처리 단위(transaction)을 동시에 맞춤
→ 행위나 목적이 같기 때문에 동시에 진행

    ```jsx
    console.log('first');
    console.log('second');
    console.log('third');
    // -> first -> second -> third
    // 순서대로 실행
    ```

- Asynchronous (비동기) : 요청과 결과가 동시에 일어나지 않음, 예측할 수 없음
→ 작업 처리 단위를 맞출 필요가 없음
→ 행위나 목적이 서로 다를 수 있어 따로 진행

    ```jsx
    console.log('first');
    setTimeout(() => console.log('second'), 1000);
    console.log('third');
    // -> first -> third -> second
    // first 출력 1초 후 callback 함수 호출, 1초 사이에 third 먼저 출력
    ```

- JavaScript is synchronous
→ execute the code block in order after hoisting

### Callback

- Synchronous callback

    ```jsx
    function printImmed(print) {
    	print();
    }

    printImmed(() => console.log('hello'));
    ```

- Asynchronous callback

    ```jsx
    function printDelay(print, timeout) {
    	setTimeout(print, timeout);
    }

    printDelay(() => console.log('async callback'), 2000);
    ```

- callback hell 😈
    - 가독성이 떨어짐
    - 디버깅 및 문제 분석 어려움
    - 유지보수가 어려움