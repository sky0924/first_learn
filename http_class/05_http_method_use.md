# HTTP 메서드 활용

수강날짜: 2021년 9월 13일

## (1) 클라이언트에서 서버로 데이터 전송

### 데이터 전달 방식

1. 쿼리 파라미터를 통한 데이터 전송
    - GET
    - 주로 정렬 필터
2. 메시지 바디를 통한 데이터 전송
    - POST, PUT, PATCH
    - 회원 가입, 상품 주문, 리소스 등록, 리소스 변경

### 상황별 🤔

1. 정적 데이터 조회
    - GET
    - 쿼리 파라미터 미사용
    - 리소스 경로로 조회
    - 이미지, 정적 텍스트 문서
2. 동적 데이터 조회
    - GET
    - 쿼리 파라미터 사용
    - 주로 정렬 조건, 필터에 사용
    - 검색, 게시판 목록
3. HTML Form
    - GET
        - URI에 쿼리 파라미터 사용
    - POST
        - Content-Type : application/x-www-form-urlencoded
            - 메시지 바디에 쿼리 파라미터 사용
            - 전송 데이터를  url encoding 처리
        - Content-Type : multipart/form-data
            - 파일 업로드와 같은 바이너리 데이터 전송 시 사용
            - boundary로 구분
4. HTML API
    - Server to Server
        - 백엔드 시스템 통신
    - App Client
        - 아이폰, 안드로이드
    - Web Client
        - 자바스크립트를 통한 통신 (AJAX) : React, Vue 등
        🤔 AJAX (Asynchronous JavaScript and XML) : 빠르게 동작하는 동적인 웹 개발 기법
    - POST, PUT, PATCH
        - 메시지 바디를 통해 데이터 전송
    - GET
        - 쿼리 파라미터를 통해 데이터 전달
    - Content-Type : application/json (사실상 표준)
        - TEXT, XML, JSON

## (2) HTTP API 설계 예시

### 1. HTML API  설계 - 컬렉션 (대부분 사용)

- POST 기반 등록
- **컬렉션**
    - 서버가 관리하는 리소스 디렉토리
    - 서버가 리소스의 URI 생성 및 관리

### 2. HTML API 설계 - 스토어

- PUT 기반 등록
- **스토어**
    - 클라이언트가 관리하는 리소스 저장소
    - 클라이언트가 리소스의 URI 관리

### 3. HTML FORM 사용

- 순수 HTML + HTML Form 사용
- 컨트롤 URI 🤔
    - GET, POST만 지원
    - 이로 인한 제약을 해결하기 위해 동사로 된 리소스 경로 사용
    - HTTP 메서드로 해결하기 애매한 경우 (HTTP API 포함)
    - ex) /new, /edit, /delete

 

- 참고하면 좋은 URI 설계 개념
    1. 문서
        - 단일 개념
        - ex) /members/100
    2. 컬렉션
        - 서버가 리소스 관리
        - ex) /members
    3. 스토어
        - 클라이언트가 리소스 관리
        - ex) /files
    4. 컨트롤러 (컨트롤 URI)
        - 위의 다른 개념으로 해결하기 어려운 추가 프로세스 실행
        - 동사를 직접 사용
        - ex) /members/{id}/delete