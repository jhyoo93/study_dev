# HTML이란?
  HTML(HyperText Markup Language)은 웹 페이지를 구성하는 데 사용되는 표준 마크업 언어이다
  웹 브라우저가 HTML 문서를 읽어들여 웹 페이지를 렌더링하며, 콘텐츠를 구조화하고 표시하는데 중요한 역할을 한다

  ### 하이퍼텍스트(Hyper Text)란?
  Hyper(초월한, 뛰어넘은)와 Text(문서)의 합성어로 기존의 문서는 책처럼 순차적으로 하나씩 접근하는 방식이었다면
  하이퍼 텍스트는 링크에 따라 다른 페이지로 이동하거 동일 페이지 내 다른 위치로 이동하는 비순차적 접근 방식이다

  ### HTML 요소(element)

  HTML요소(element)는 태그(시작, 종료) 내용을 포함하고 있고 요소별 여러 속성을 가지고 있다
  태그의 이름과 속성 명은 소-대문자를 가리진 않지만, 소문자를 권장하고 종료 태그가 없는 경우도 존재한다
  
  <img src="/study\assets\images_strivepdev_post.png" />

  ### HTML문서 기본 구조
    <!DOCTYPE html>
    <html>
      <head>
          <title>웹 페이지 제목</title>
      </head>
      <body>
          <h1>웹 페이지 헤더</h1>
          <p>이것은 단락/p>
          <a href="https://example.com">Example 링크</a>
      </body>
    </html>

    <!DOCTYPE html>: HTML5 문서를 선언
    <html>: 문서의 루트(root) 요소
    <head>: 메타데이터(문서 제목, 문자 인코딩 등)를 포함
    <body>: 웹 브라우저에 표시될 콘텐츠를 포함

  ### HTML역사

  인터넷과 월드 와이드 웹(World Wide Web)의 발전과 깊은 관련이 있다 HTML은 웹페이지를 작성하고 표시하기 위한
  기본 언어로 시작되었으며, 시간이 지남에 따라 기능이 크게 확장 되었다.

  - World Wide Web이란?
    - 인터넷을 기반으로 작동하는 서비스
    - HTML 문서로 작성된 정보를 HTTP 프로토콜을 통해 접근
    - 하이퍼텍스트(HyperText)를 사용하여 문서를 연결하고, URL을 통해 리소스를 식별
  - WWW의 핵심 구성요소
    - URL (Uniform Resource Locator): 웹 페이지나 리소스의 주소
    - HTTP/HTTPS (HyperText Transfer Protocol): 서버와 클라이언트 간 데이터를 전송하는 프로토콜
    - HTML (HyperText Markup Language): 웹 페이지의 내용을 구조화하는 마크업 언어
    - 웹 브라우저: 사용자가 웹 페이지에 접근하고 탐색하는 데 사용하는 소프트웨어(예: Chrome, Firefox, Safari)

  <img src="/study\assets\html-history.png" />

    1. HTML 1.0(1991) - 최초의 HTML, 간단한 텍스트와 하이퍼링크 지원
    2. HTML 2.0(1995) - 기본 기능 표준화
    3. HTML 3.2(1997) - 표와 스크립트 언어 지원
    4. HTML 4.01(1999) - 시멘틱 구조 강화, CSS 도입
    5. HTML 5(2014) - 멀티미디어 지원, 모바일 디바이스 최적화, 시맨틱 태그 추가, 다양한 API지원


-----------------------------------------------------------------------------------------------------------------------------

# CSS란?