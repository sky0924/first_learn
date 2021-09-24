# 04 코딩의 기본, 연산과 반복문

태그: 2021년 9월 23일

1. String concatenation
    - 문자열끼리 더하기
    `'Ha' + 'Neul'` → `'HaNeul'`
    - 문자열과 숫자 더하기 → 숫자가 문자로 인식됨
    `'9' + 24` → `'924'`
    - 표현식 삽입하기 : ${value}
    ``1 + 1 = ${1 + 1}`` → `'1 + 1 = 2'`
    - ``(백틱) 사용 시 그대로 줄바꿈 가능
    '', "" 사용 시 \n으로 줄바꿈
2. Numeric operators
    - a + b
    - a - b
    - a * b
    - a % b
    → a를 b로 나눈 나머지
    - a ** b
    → a의 b승
3. Increment / decrement operators
    - preIncrement : i++
    - postIncrement : ++i
    - preDecrement : i--
    - postDecrement: --i
4. Assignment operators
    - a += b
    → a = a + b
    - a -= b
    - a *= b
    - a /= b
5. Comparison operators
    - a < b
    - a <= b
    - a > b
    - a >= b
6. Logical operators
    - || (or)
    - && (and)
    - ! (not)
    - heavy한 조건식은 뒤쪽에
7. Equality
    - loose equality
        - ==
        - !=
        - value 비교
        - `5 == '5'` → true
    - strict equality
        - ===
        - !==
        - reference와 data type 비교
        - `5 === '5'` → false
    - `0 == false` → true
    `'' == false` → true
    `0 === false` → false
    `'' === false` → false
    - `null == undefined` → true
    `null === undefined` → false
8. Conditional operators
    - if-else

    if ( condition1 ) {
       code1;
    }
    else if ( condition2 ) {
       code2;
    }
    else {
       code3;
    }

9. Ternary operator
    - ?
    `condition ? value1 : value2;`
10. Switch operator
    - switch-case

    switch ( variable ) { 
       case value1 : 
          code1;
       case value2 :
          code2;
       default :
          code3;
    }

11. Loops
    - while

    while ( condition ) {
       code;
    }

    - do-while

    do {
       code;
    } while ( condition );

    - for

    for ( begin; condition; step) {
       code;
    }

    - 반복문 제어
        - break;
        - continue;