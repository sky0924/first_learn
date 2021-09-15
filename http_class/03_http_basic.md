# HTTP 기본

수강날짜: 2021년 9월 10일

## (1) 모든 것이 HTTP

- **H**yper**T**ext **T**ransfer **P**rotocol
- 모든 형태의 데이터 전송 가능 (이미지, 음성, 영상, 파일)

    [HTTP의 역사](https://www.notion.so/44fad6ad4f0040b793ec87f6fe180acd)

    * RFC2068(1997) → RFC2616(1999) → RFC7230~7235(2014) 🤔

- 기반 프로토콜
    - TCP: HTTP/1.1, HTTP/2
    - UDP : HTTP/3

## (2) 클라이언트 서버 구조

- Request-Response(요청-응답) 구조

## (3) 무상태 프로토콜

- Stateful(상태 유지) / Stateless(무상태)
- 서버가 클라이언트의 상태를 보존 X → 서버가 바뀌어도 상관 X
- 서버 확장성 높음 : 수평 확장(스케일 아웃) 유리
- 클라이언트의 추가 데이터 전송 필요
- 상태 유지는 최소한만 사용 : 로그인 등 필요한 경우, 일반적으로 브라우저 쿠키와 서버 세션 등을 이용

## (4) 비 연결성 (Connectionless)

- 연결성 : 연결 유지, 서버 자원 소모 → 비효율적
- 비 연결성 : 연결 유지 X, 최소한의 자원 사용 → 효율적
- 초 단위 이하의 빠른 속도로 응답 → 동시 처리 요청 적음
- 새로 TCP/IP 연결 필요 → 3 way handshake 시간 추가
- 수많은 자원이 함께 다운로드
- 현재는 HTTP 지속 연결(Persistent Connections)로 문제 해결 → HTTP/2, HTTP/3에서 더욱 최적화

## (5) HTTP 메시지

- 메시지 구조
    - start-line
    - header-field
        - HTTP 전송에 필요한 모든 부가정보
    - empty line (CRLF)
    - [ message body ]
        - 실제 전송할 데이터
- 요청 메시지
    - start-line = request-line = method request-target HTTP-version

        GET /search?q=hello&hl=ko HTTP/1.1

        - method : 서버가 수행해야 할 동작 지정
                        GET(리소스 조회), POST(요청 내역 처리), PUT, DELETE
        - request-target : 요청 대상 경로 지정, 절대 경로(/)로 시작
    - header = field-name: field-value

        Host: www.google.com

    - empty line

                                                

    - message body

        실제 전송할 데이터

- 응답 메시지
    - start-line = status-line = HTTP-version status-code reason-phrase

        HTTP/1.1 200 OK

        - status-code : 200(성공), 400(클라이언트 요청 오류), 500(서버 내부 오류)
        - reason-phrase : 이유 문구, 짧은 상태 코드 설명
    - header

        Content-Type: text/html;charset=UTF-8
        Content-Length: 3423

    - empty line

                                                

    - message body

        <html>
              <body> ... </body>
         </html>

### 정리

- HTTP 메시지로 모든 데이터를 전송할 수 있다.
- HTTP/1.1이 가장 보편적인 버전이다.
- 클라이언트 서버 구조이다.
- 무상태 프로토콜이다.
- 단순하며, 확장이 가능하다.

→ 현재 HTTP가 지배적으로 사용되는 이유를 알 수 있다.