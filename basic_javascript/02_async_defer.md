# 02 script async와 defer의 차이점

태그: 2021년 9월 17일

### Console API

console.log('Hello World!');

console.alert('Hello World!');

console.clear();

console.error('Warning!');

### site

ecma-international.org

developer.mozilla.org

w3schools.com

### HTML에 JavaScript를 포함하는 방법

1. head
    1. parsing HTML
    2. fetching js
    3. executing js
    4. parsing HTML → page is ready!
    - 사용자 로딩에 많은 시간 소요
2. body
    1. parsing HTML → page is ready!
    2. fetching js
    3. executing js
    - 의미있는 컨텐츠 로딩에는 추가 시간 소요
3. head + async
    1. parsing HTML , fetching js
    2. executing js
    3. parsing HTML → page is ready!
    - js에서 제어할 요소가 HTML에서 아직 정의되지 않았을 수 있음
    - js를 executing하는 동안 멈추기 때문에 사용자 로딩에 시간 소요
    - 정의된 js 순서와 상관없이 다운로드가 끝난 js부터 실행됨
4. head + defer
    1. parsing HTML, fetching js
    2. executing js
    - js가 정의된 순서대로 실행됨
    - 가장 효율적이고 안전한 방법

### Use Strict

- 'use strict';
- 오류 검사 → 비상식적인 코드 검출
- 효율적으로 빠르게 js 분석 → 성능 개선