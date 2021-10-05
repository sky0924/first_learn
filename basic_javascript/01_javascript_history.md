# 01 JavaScript의 역사

태그: 2021년 9월 17일

### 자바스크립트의 탄생 배경!

1993

- NCSA - Mosaic Web Browser 출시
- Marc Andreessen - Netscape 창업

1994

- Netscape Navigator 출시
- Brendan Eich - Scheme → Mocha → LiveScript → JavaScript
- Netscape Navigator에 LiveScript Interpreter 포함

1995

- Netscape Navigator에 JavaScript Interpreter 포함
- Microsoft - JavaScript Reverse engineering → JScript
- Internet Explorer 출시

1997

- ECMAScript 1 language specification 출시
→ ECMAScript 2 in 1998
→ ECMAScript 3 in 1999 : error handling, 3 equal operator(===)
→ ECMAScript 4 in 2000 : optional type annotation, class, enterprise scale

2000

- Internet Explorer 점유율 95% → 자체 표준 선언

2004

- Mozilla - Firefox 출시 (ActionScript3, Tamarin)
- Jesse James Garrett - AJAX: Asynchronous Javascript And Xml 도입
- community - library 등장 (jquery, dojo, mootools)

2008

- Google - Chrome 출시 (JIT: Just-In-Time compilation)

2009

- ECMAScript 5 출시

2015

- ECMAScript 6 출시 : default parameter, class, arrow function, const, let
→ ECMAScript 7 in 2016
→ ECMAScript 8 in 2017
→ ECMAScript 9 in 2018
→ ECMAScript 10 in 2019

⇒ library 도움 없이 JavaScript와 APIs 만으로 웹 개발 가능!

### JavaScript Engines

- Chrome : V8 (Node.js , Electron → V8)
- Firefox : SpriderMonkey
- Safari : JSCore
- MS Edge : Chakra → V8
- Opera : Carakan
- Adobe Flash : Tamarin

### 현재

- BABEL : JavaScript transcompiler
- SPA: Single Page Application → React, Angular, Backbone, Vue 등으로 쉽게
🤔 SPA? 하나의 페이지 안에서 데이터를 부분적으로 업데이트
- back-end, mobile, desktop 등 다양한 분야에 이용
- Web Assembly : 다양한 언어로 웹 어플리케이션 개발 가능