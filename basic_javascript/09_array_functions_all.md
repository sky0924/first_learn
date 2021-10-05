# Array Functions

### property

- array.length
    - Gets or **sets** the length of the array.
    This is a number one higher than the highest index in the array.
    - 배열의 길이를 반환 또는 **설정**? 🤔
    - 배열의 가장 높은 인덱스값보다 하나 높음
    → last index + 1
    

### methods

1. array.toString()
    - Returns a string representation of an array.
    - 배열을 문자열로 반환
    
2. array.toLocaleString() 🤔
    - Returns a string representation of an array.
    The elements are converted to string using their toLocaleString methods.
    - 배열의 요소를 나타내는 문자열을 반환
    
     🤔 locale : 사용자 언어, 국가, 출력 형식 등을 정의
    
          convert : 변환하다
    
3. array.join(separator?)
    - Adds all the elements of an array into a string, 
    separated by the specified separator string.
    - @param separator
    A string used to separate one element of the array from the next in the resulting string.
    If omitted, the array elements are separated with a comma.
    - 배열을 하나의 문자열로 반환
    - separator
        - 배열의 요소들을 구분할 문자열
        - 생략 : 쉼표 (,)
    
     🤔 separator : 구분자
          specified : 명시된
    
4. array.reverse()
    - Reverses the elements in an array in place.
    This method mutates the array and returns a reference to the same array.
    - 배열의 순서 반전
    
    🤔 mutate : 변화하다
    
5. array.slice(start?, end?)
    - Returns a copy of a section of an array.
    For both start and end, a negative index can be used to indicate an offset from the end of the array.
    For example, -2 refers to the second to last element of the array.
    - @param start 
    The beginning index of the specified portion of the array.
    If start is undefined, then the slice begins at index 0.
    - @param end 
    The end index of the specified portion of the array.
    This is exclusive of the element at the index 'end'.
    If end is undefined, then the slice extends to the end of the array.
    - 배열의 일부분을 추출 → 새로운 배열로 반환
    - start
        - 추출을 시작할 인덱스값
        - 생략 : first index (0)
        - 음수 : 배열의 끝에서부터 길이
        - start > last index : 빈 배열
    - end
        - 추출을 종료할 인덱스값
        - 생략 : last index (array.length - 1)
        - 음수 : 배열의 끝에서부터 길이
        - end > last index : 배열의 끝까지 추출
    
    🤔 both : 모두
         negative number : 음수
         indicate : 나타내다
         exclusive : 독점적인, 배타적인 → 제외된
    
6. array.sort(compareFn?)
    - Sorts an array in place.
    This method mutates the array and returns a reference to the same array.
    - @param compareFn
    Function used to determine the order of the elements.
    It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise.
    If omitted, the elements are sorted in ascending, ASCII character order.
    - 배열의 요소들을 정렬
    - compareFn
        - 정렬 순서
        - 생략 : 유니 코드 순서대로
    
    🤔 otherwise : 그렇지 않으면
         omit : 생략하다
    
7. array.every(predicate, thisArg?)
    - Determines whether all the members of an array satisfy the specified test.
    - @param predicate
    A function that accepts up to three arguments.
    The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.
    - @param thisArg
    An object to which the this keyword can refer in the predicate function.
    If thisArg is omitted, undefined is used as the this value.
    - 배열의 모든 요소들이 함수를 통과하는지 테스트
    - predicate(value, index?, array?)
        - 요소들을 판별할 함수
    - thisArg
        - 함수에서 참조할 객체
        - 생략 : undefined
    
    🤔 determine : 알아내다, 결정하다
         whether : ~ 인지
         predicate : 서술어
         for each : 각각
         until : ~ 까지
         coercible : 강제할 수 있는
         refer : 참조하다
    
8. array.some(predicate, thisArg?)
    - Determines whether the specified callback function returns true for any element of an array.
    - @param predicate
    A function that accepts up to three arguments. 
    The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array.
    - 배열의 어떤 요소라도 함수를 통과하는지 테스트
    - predicate(value, index?, array?)
        - 요소들을 판별할 함수
    
9. array.filter(predicate, thisArg?)
    - Returns the elements of an array that meet the condition specified in a callback function.
    - @param predicate
    A function that accepts up to three arguments.
    The filter method calls the predicate function one time for each element in the array.
    - 배열의 모든 요소들이 함수를 통과하는지 테스트 (every)
    → 통과한 요소들로 새로운 배열 반환
    - predicate(value, index?, array?)
        - 요소들을 판별할 함수
    
10. array.map(callbackfn, thisArg?)
    - Calls a defined callback function on each element of an array, and returns an array that contains the results.
    - @param callbackfn
    A function that accepts up to three arguments.
    The map method calls the callbackfn function one time for each element in the array.
    - 배열의 각 요소마다 함수 호출 → 새로운 배열 반환
    - callbackfn(value, index?, array?)
        - 새로운 배열을 생성할 콜백 함수
    
11. array.reduce(callbackfn, initialValue?)
    - Calls the specified callback function for all the elements in an array.
    The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    - @param callbackfn
    A function that accepts up to four arguments.
    The reduce method calls the callbackfn function one time for each element in the array.
    - @param initialValue
    If initialValue is specified, it is used as the initial value to start the accumulation.
    The first call to the callbackfn function provides this value as an argument instead of an array value.
    - 배열의 각 요소마다 함수를 호출 → 하나의 값 반환
    - callbackfn(previousValue, currentValue, Index?, array?)
        - previousValue : initialValue, 이전 반환값 (누적)
    - initialValue
        - 최초 호출 시 초기값
        - 생략 : 배열의 첫 번째 요소 (array[0])
    
    🤔 reduce : 줄이다
         accumulate : 누적시키다
         initial : 처음의
         previous : 이전의
         current : 현재의
    
12. array.reduceRight(callbackfn, initialValue)
    - Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
    - 배열의 각 요소를 내림차순(오른쪽에서 왼쪽)으로 callbackfn 함수를 호출 → 하나의 값 반환
    - callbackfn(previousValue, currentValue, Index, array)
    - 생략 X
    

[08 Array의 개념](https://www.notion.so/08-Array-5f921ce8aa4546f48d8f8b8ac0949728) 

1. array.forEach()
2. array.push()
3. array.pop()
4. array.unshift()
5. array.shift()
6. array.splice()
7. array.concat()
8. array.indexOf()
9. array.lastIndexOf()