# HTTP 헤더2 - 캐시와 조건부 요청

수강날짜: 2021년 9월 15일

## (1) 캐시 기본 동작

- 캐시가 없을 때
    - 네트워크로 계속해서 데이터를 다운로드 (데이터가 변경되지 않아도)
    → 느리고 비싼 인터넷 네트워크
    → 느린 사용자 경험
- 캐시 적용
    - Cache-Control: max-age=60 (캐시의 유효 시간=60초)
    - 캐시 가능 시간 동안 네트워크 미사용
    → 브라우저 로딩 속도 빠름
    → 빠른 사용자 경험
    - 캐시 유효 시간 초과 : 서버를 통해 데이터를 다시 조회, 캐시 갱신 → 다시 네트워크 다운로드 발생

## (2) 검증 헤더와 조건부 요청

- 캐시 시간 초과 시
    1. 데이터 변경
    2. 데이터 변경 X → 캐시 재사용 가능, 클라이언트와 서버의 데이터가 같다는 사실 확인 필요
- **검증 헤더와 조건부 요청**
    1. Last-Modified
        1. 캐시 적용 → Last-Modified (데이터 최종 수정일)
        2. 캐시 시간 초과 → If-Modified-Since, If-Unmodified-Since
        3. 데이터 최종 수정일 비교 → 200 OK / 304 Not Modified (바디 없이 헤더만)
        - 단점
            1. 1초 미만 단위로 캐시 조정 불가
            2. 날짜 기반의 로직 사용 → 수정일이 다르지만, 데이터 결과가 같은 경우 검증 불가
            3. 서버에서 별도의 캐시 로직을 관리하고 싶은 경우
    2. ETag
        1. 캐시 적용 → ETag
        2. 캐시 시간 초과 → If-Match, If-None-Match
        3. ETag값 비교 → 200 OK / 304 Not Modified (바디 없이 헤더만)
        - 장점
            - 캐시용 데이터에 임의의 고유한 버전 부여 → 데이터 변경 시 버전 Hash 변경
            - 캐시 제어 로직을 서버에서 완전히 관리 (클라이언트는 값만 제공)
            - 예시) 애플리케이션 배포 주기에 맞춰 ETag 모두 갱신
- 캐시에 저장된 데이터 재활용 가능, 네트워크 다운로드 발생하지만 용량이 적음

## (3) 캐시와 조건부 요청 헤더

- 캐시 제어 헤더
    - Cache-Control
        - max-age : 캐시 유효 시간, 초 단위
        - no-cache
            - 데이터 캐시 가능
            - 단 항상 Origin 서버에 검증 후 사용
            - 원 서버 접근 실패 → Error or 200 OK (오래된 데이터)
        - no-store : 데이터에 민감한 정보가 포함됨, 저장 금지
        - must-revalidate
            - 캐시 만료 후 최초 조회 시 원 서버에 검증 후 사용
            - 원 서버 접근 실패 → 항상 504 Gateway Timeout Error → 더 확실한 캐시 무효화
    - Pragma
        - no-cache
        - HTTP 1.0 하위 호환
    - Expires
        - HTTP 1.0 하위 호환
        - 캐시 만료일 지정
        - 더 유연한 Cache-Control: max-age 권장 (함께 사용 시 Expires 무시)

## (4) 프록시 캐시

- Origin 서버 - 프록시 캐시 서버(public 캐시) - 클라이언트(private 캐시)
- Cache-Control
    - public : 응답이 public 캐시에 저장 가능
    - private : 응답이 private 캐시에 저장, 해당 사용자만을 위한 캐시
    - s-maxage : 프록시 캐시에만 적용되는 max-age
- Age: 60 (HTTP 헤더)
    - Origin 서버에서 응답 후 프록시 캐시 서버에 머문 시간

## (5) 캐시 무효화

- 확실한 캐시 무효화 응답
    - Cache-Control: no-cache, no-store, must-revalidate
    - Pragma: no-cache