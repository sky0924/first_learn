# 인터넷 네트워크

수강날짜: 2021년 9월 9일

## (1) 인터넷 통신

- client → internet → server

[인터넷 프로토콜 스택의 4계층](https://www.notion.so/ec48d694e1554c17b04387f5b31b3084)

## (2) IP(Internet Protocol)

- 지정한 IP Address에 Packet 단위로 데이터 전달
- 출발지 IP, 목적지 IP / 데이터
- 한계
    1. 비연결성 : 대상이 서비스 불능 상태여도 패킷 전송
    2. 비신뢰성 : 패킷 소실, 패킷 전달 순서 문제
    3. 프로그램 구분 : 같은 IP의 server에서 통신하는 app이 여러 개이면 구분할 수 없음

## (3) TCP, UDP

- TCP(Transmission Control Protocol)
    1. 출발지 IP, 목적지 IP / 출발지 Port, 목적지 Port, 전송 제어, 순서, 검증 정보 / 데이터
    2. 연결지향 - TCP 3 way handshake : 접속 요청-요청 수락 → 가상 연결
    3. 데이터 전달 보증 : 데이터 전송 확인 가능
    4. 순서 보장 : 순서가 잘못되면 재요청
    5. 신뢰할 수 있는 프로토콜 (비연결성, 비신뢰성 보완)
    6. 대부분이 사용
- UDP(User Datagram Protocol)
    1. 연결지향, 데이터 전달 보증, 순서 보장 X
    2. 단순하고 빠름
    3. IP와 거의 같음 (Port, 체크섬 정도만 추가)
    4. app에 추가 작업 필요
    5. 기능이 거의 없어 원하는 대로 커스텀 가능 → 최근 각광

## (4) PORT

- 같은 IP 내에서 프로세스 구분
- 0 ~ 65535 (0 ~ 1023 : 잘 알려진 포트, 사용하지 않는 것이 좋음)

## (5) DNS (Domain Name Server)

- IP 주소 : 기억하기 어려움, 바뀔 수 있음
- DNS : 도메인 명을 IP 주소로 변환해주는 서버
    1. client → DNS : 도메인 명을 요청
    2. DNS → client : IP 주소를 응답
    3. client → server :  IP 주소에 접속