# URI와 웹 브라우저 요청 흐름

수강날짜: 2021년 9월 10일

## (1) URI

- Uniform : 리소스를 식별하는 통일된 방식
- Resource : 자원, URI로 식별 가능한 모든 것
- U R Identifier > U R Locator, U R Name
- 리소스의 위치는 변할 수 있지만 이름은 변하지 않음
→ Name만으로 실제 리소스를 찾을 방법이 보편화 되지 않음 🤔
- URL

    https://www.google.com:443/search?q=hello&hl=ko

    - 프로토콜(https)
    - 호스트명(www.google.com)
    - 포트번호(443)
    - 패스(/search)
    - 쿼리 파라미터(q=hello&hl=ko)

    scheme://[userinfo@]host[:port][/path][?query][#fragment]

    - Scheme : 주로 프로토콜 (HTTP, FTP 등)
    - Userinfo : 거의 사용하지 않음
    - Host : 도메인 명 또는 IP 주소
    - Port : 일반적으로 생략
    - Path : 리소스 경로, 계층적 구조
    - Query : 보통 key=value의 형태, ?로 시작, &로 추가 가능
    - Fragment : HTML 내부 북마크 등에 사용, 서버에 전송 X 🤔

## (2) 웹 브라우저 요청 흐름

- HTTP 메시지 전송
    1. 웹 브라우저 (애플리케이션)
    → IP, Port 정보를 이용하여 HTTP 메시지 생성
    2. Socket 라이브러리 (애플리케이션) 🤔
    → IP, Port 정보를 이용하여 TCP/IP 연결
    → 데이터 전달
    3. OS
    → TCP/IP 패킷 생성 (HTTP 메시지 포함)
    4. LAN (네트워크 인터페이스) 🤔
    → 인터넷, 서버에 전송
- 데이터 변화 흐름
    1. 요청 패킷 전달
        - HTTP 요청 메시지

        GET /search?q=hello&hl=ko HTTP/1.1
        Host: www.google.com

    2. 응답 패킷 전달
        - HTTP 응답 메시지

        HTTP/1.1 200 OK
        Content-Type: text/html;charset=UTF-8
        Content-Length: 3423

        <html>
             <body> ... </body>
        </html>

    3. 웹 브라우저 HTML 렌더링