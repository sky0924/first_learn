# Question List

1. UDP의 장점? 🤔
    - 빠름
    - 비연결
    - 작은 헤더 사이즈
    - 실시간 서비스에 적합 : 통신 품질보다 연속성이 더 중요할 때
2. PATCH는 멱등이 아니다?
    - PATCH : 리소스의 특정 부분을 변경
    - 멱등으로 설계할 수도 있고, 멱등이 아니게도 설계할 수 있음
    - ex) 호출할 때마다 나이를 5살씩 더함 → 멱등이 아님
3. Http 메서드 활용 상황? 🤔
4. 컨트롤 URI는 리소스를 새로 생성하는 것? 🤔
5. 일시 리다이렉션 / 검색 엔진 등에서 URL를 변경하면 안되는 이유? 🤔
    - ex) 주문 완료 후 새로고침해 POST를 재요청하면 중복 주문
6. 표현과 엔티티의 차이? 용어만 변화?
    - 1999년 RFC2616 : 엔티티 헤더, 엔티티 본문
    - 2014년 RFC7230~5 : 표현 헤더, 표현 데이터
    - 버전이 변화하며 용어가 재정의됨
    - why?
        - 리소스를 전달하는 방식(전송 형태)를 의미 (json, html, xml 등)
7. Socket?
    - OSI 7 Layer
        - 응용 (Application)
        - 표현 (Presentation)
        - 세션 (Session)
        - 전송 (Transport)
        - 네트워크 (Network)
        - 데이터 링크 (Data Link)
        - 물리 (Physical)
    - Application - Socket - Transport
    - 프로세스와 네트워크 사이에서 데이터를 전달하는 출입구 역할