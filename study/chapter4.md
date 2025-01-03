# 브라우저 렌더링 과정
  
  📌 **브라우저 란?**  
  일상생활에서 인터넷을 통해 검색을 할 때 주로 네이버나 다음과 같은 사이트에 접속하여 필요한 정보를 검색한다  
  이 때 사이트에 접속할 수 있는 도구를 바로 **브라우저** 또는 **웹 브라우저** 라고 부른다.  

  브라우저는 제어판과 같이 컴퓨터에 설치되어 있는 하나의 프로그램으로, 이 프로그램을 다운받고 실행하게되면 주소창을 입력할 수 있는  도구가 나타나게 되는것이다.  

  📌 **렌더링 이란?**  
  서버로부터 HTML, CSS, JavaScript 등 작성한 파일을 받아 브라우저에 뿌려주는 과정이다.  
     
  ### ✔ 랜더링 순서  

  <img src="/study\assets\render-path.png" />    

  **HTML 파싱 → DOM 생성**  
  - HTML 파일이 브라우저에 전달되면, 브라우저는 이를 **파싱(Parsing)**하여 DOM(Document Object Model) 트리를 생성한다.  

    ```HTML
        <!DOCTYPE html>
        <html>
        <body>
            <h1>Hello World</h1>
            <p>This is a paragraph.</p>
        </body>
        </html>
    ```
    📌 **DOM**  
    HTML 문서를 트리 구조로 변환 한 것이다  

    ```HTML  
        Document  
        └── <html>  
            └── <body>  
                ├── <h1>  
                │    └── "Hello World"  
                └── <p>  
                    └── "This is a paragraph."  

    ```  

  ---  

  **CSS 파싱 → CSSOM 생성**    
  - HTML 안에 <style> 태그나 외부 CSS 파일이 연결되어 있으면, 브라우저는 이를 파싱하여 CSSOM(CSS Object Model) 트리를 생성한다.    

     ```CSS
        h1 {
            color: blue;
        }
        p {
        font-size: 16px;
        }
    ```  
    📌 **CSSOM**    
    스타일 규칙을 트리 형태로 나타낸 것이다   

    ```less  
        Stylesheet  
        ├── h1: color: blue  
        └── p: font-size: 16px  
    ```

  ---

  **DOM + CSSOM → 렌더 트리(Render Tree) 생성**  
  - DOM트리와 CSSOM트리를 결합하여 렌더 트리를 생성한다.  
  - display: none처럼 화면에 표시되지 않는 요소는 렌더 트리에 포함되지 않는다  

  📌 **렌더 트리**    
  렌더 트리는 화면에 실제로 표시될 요소와 스타일을 결정한다  
  
  ```less  
      Render Tree  
      ├── h1: color: blue  
      └── p: font-size: 16px  
  ```

