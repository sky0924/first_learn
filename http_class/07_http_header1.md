# HTTP 헤더1 - 일반 헤더

수강날짜: 2021년 9월 14일

## (1) HTTP 헤더 개요

- header-field = field-name: field-value
- HTTP 전송에 필요한 모든 부가 정보
- **RFC2616**
    - HTTP HEADER
        1. General 헤더 : 메시지 전체에 적용되는 정보
        2. Request 헤더 : 요청 정보
        3. Response 헤더 : 응답 정보
        4. Entity 헤더 : 엔티티 바디 정보
    - HTTP BODY
        - 메시지 바디 → 엔티티 바디 전달
        - 엔티티 바디 : 요청이나 응답에서 전달할 실제 데이터
        - 엔티티 헤더 → 엔티티 바디의 데이터를 해석할 수 있는 정보 제공
- **RFC723x**
    - Entity → Representation (표현)
    - 표현 = 표현 메타데이터 + 표현 데이터
    - HTTP BODY
        - 메시지 바디 = Payload → 표현 데이터 전달
        - 표현 : 요청이나 응답에서 전달할 실제 데이터
        - 표현 헤더 → 표현 데이터를 해석할 수 있는 정보 제공

## (2) 표현

- Content-Type : 표현 데이터의 형식

    > text/html; charset=UTF-8 , application/json , image/png

- Content-Encoding : 표현 데이터의 압축 방식

    > gzip , deflate, identity

- Content-Language : 표현 데이터의 자연 언어

    > ko , en , en-US

- Content-Length : 표현 데이터의 길이 (byte 단위)
    - Transfer-Encoding 사용 시 X
- 표현 헤더는 전송, 응답 둘 다 사용

## (3) 콘텐츠 협상

- Accept : 클라이언트가 선호하는 미디어 타입 전달
- Accept-Charset : 클라이언트가 선호하는 문자 인코딩
- Accept-Encoding : 클라이언트가 선호하는 압축 인코딩
- Accept-Language : 클라이언트가 선호하는 자연 언어
    - **Quality Values**(q)
        - 0~1, 클수록 우선순위 높음 (생략하면 1)
        - 구체적인 것이 우선
        - 구체적인 것을 기준으로 미디어 타입을 맞춤 🤔
- 협상 헤더는 요청 시에만 사용

## (4) 전송 방식

1. 단순 전송
    - Content-Length
2. 압축 전송
    - Content-Encoding
3. 분할 전송
    - Transfer-Encoding : Content-Length X
4. 범위 전송
    - Range, Content-Range

## (5) 일반 정보

(요청에서 사용)

- From : 유저 에이전트의 이메일 정보 (잘 안씀)
- Referer : 이전 웹 페이지 주소 → 유입 경로 분석 가능
- User-Agent : 유저 에이전트 애플리케이션 정보 (통계 → 어떤 브라우저에서 장애가 발생하는지 파악 가능)

(응답에서 사용)

- Server : 요청을 처리하는 ORIGIN 서버의 소프트웨어 정보
- Date : 메시지가 발생한 날짜와 시간

## (6) 특별한 정보

(요청에서 사용)

- Host : 요청한 호스트 정보 (필수!)
    - 하나의 서버가 여러 도메인 처리
    - 하나의 IP 주소에 여러 도메인 적용
- Location : 페이지 리다이렉션
    - 응답 결과에 Location 헤더가 있으면 자동 이동
    - 201 Created : 요청에 의해 생성된 리소스 URI
    - 3xx Redirection : 요청을 자동으로 리다이렉션하기 위한 리소스
- Allow : 허용 가능한 HTTP 메서드
    - 405 Method Not Allowed 응답에 포함
- Retry-After : 유저 에이전트가 다음 요청을 하기까지 기다려야 하는 시간
    - 503 Service Unavailable : 서비스가 언제까지 불능인지 알려줌
    - 날짜, 초단위

## (7) 인증

- Authorization : 클라이언트 인증 정보를 서버에 전달
    - ex) Basic xxxxx
- WWW-Authenticate : 리소스 접근 시 필요한 인증 방법 정의
    - 401 Unauthorized 응답에 사용

## (8) 쿠키

(응답에서 사용)

- Set-Cookie : 서버 → 클라이언트로 쿠키 전달

(요청에서 사용)

- Cookie : 받은 쿠키 저장, HTTP 요청 시 클라이언트 → 서버로 전달
- 왜 쓸까?
    - HTTP는 무상태 프로토콜 → 연결이 끊어지면 이전 요청 기억 X, 상태 유지 X
        - 대안 1 : 모든 요청에 사용자 정보 포함 → 보안 등 문제 많음
        - 대안 2 : 모든 요청에 **쿠키** 정보 자동 포함
- 쿠키
    - 사용처 : 사용자 로그인 세션 관리, 광고 정보 트래킹

        Set-Cookie: sessionId=abcd1234; expires=Sat, 26-Dec-2020 00:00:00 GMT; path=/; domain=.google.com; Secure

    - 항상 서버에 쿠키 정보가 전송됨
    → 네트워크 추가 트래픽 발생
    → 최소한의 정보만 사용
    * 서버 전송이 아니라 웹 브라우저 내부에 데이터 저장 → 웹 스토리지
    - 보안에 민감한 데이터는 저장 금지
    - 생명주기 ()
        - expires=날짜, max-age=시간 (0이나 음수 지정 시 삭제)
        - 세션 쿠키 : 만료 날짜 생략 → 브라우저 종료까지 유지
        - 영속 쿠키 : 만료 날짜 입력 → 해당 날짜까지 유지
    - 도메인 (Domain)
        - 명시 : 명시한 도메인 + 서브 도메인 포함
        - 생략 : 현재 도메인만 적용
    - 경로 (Path)
        - 경로를 포함한 하위 경로 페이지만 쿠키 접근
        - 일반적으로 루트로 지정 (path=/)
    - 보안
        - Secure : https인 경우에만 쿠키 전송
        - HttpOnly : XSS 공격 방지, JavaScript 접근 불가, http 전송에만 사용
        - SameSite : XSRF 공격 방지, 요청 도메인과 쿠키 도메인 같아야 쿠키 전송