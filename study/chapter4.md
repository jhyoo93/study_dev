# 브라우저 렌더링 과정
  
  📌 **브라우저 란?**  
  일상생활에서 인터넷을 통해 검색을 할 때 주로 네이버나 다음과 같은 사이트에 접속하여 필요한 정보를 검색한다  
  이 때 사이트에 접속할 수 있는 도구를 바로 **브라우저** 또는 **웹 브라우저** 라고 부른다.  

  브라우저는 제어판과 같이 컴퓨터에 설치되어 있는 하나의 프로그램으로, 이 프로그램을 다운받고 실행하게되면 주소창을 입력할 수 있는  도구가 나타나게 되는것이다.  

  📌 **렌더링 이란?**  
  서버로부터 HTML, CSS, JavaScript 등 작성한 파일을 받아 브라우저에 뿌려주는 과정이다, 즉 사용자가 볼 수 있는 화면으로 만드는  
  과정이라고 볼수있다.  
   
  ### ✔ 랜더링 순서  

  <img src="/study\assets\render-path.png" />    

  **HTML 파싱 → DOM 생성**  
  - HTML 파일이 브라우저에 전달되면, 브라우저는 이를 **파싱(Parsing)** 하여 DOM(Document Object Model) 트리를 생성한다.    

    ```HTML
        <!DOCTYPE html>
        <html>
        <body>
            <h1>Hello World</h1>
            <p>This is a paragraph.</p>
        </body>
        </html>
    ```  
    
    📌📌 **파싱(Parsing)**   
    브라우저가 코드를 이해하고 사용할 수 있는 구조로 변환하는 것을 의미한다.     
    
    📌📌 **DOM**    
    문서 객체 모델(Document Object Model) 은 HTML, XML 문서의 프로그래밍 interface 이다. DOM은 문서의 구조화된 표현을 제공하며  
    프로그래밍 언어가 DOM구조에 접근할 수 있는 방법을 제공하여 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕는다.  
    
    HTML 문서를 브라우저가 이해할 수 있도록 트리자료 구조로 변환 한 것이다  

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
    CSS 규칙을 트리 형태로 나타낸 것이다   

    ```less  
        Stylesheet  
        ├── h1: color: blue  
        └── p: font-size: 16px  
    ```

  ---

  **DOM + CSSOM → 렌더 트리(Render Tree) 생성**  
    
  <img src="/study\assets\render-tree.png" />  
    
  - DOM트리와 CSSOM트리를 결합하여 렌더 트리를 생성한다.  
  - display: none처럼 화면에 표시되지 않는 요소는 렌더 트리에 포함되지 않는다  
  
    📌 **렌더 트리**    
    렌더 트리는 화면에 실제로 표시될 요소와 스타일을 결정한다  
  
    ```less  
        Render Tree  
        ├── h1: color: blue  
        └── p: font-size: 16px  
    ```  

  ---  

  **레이아웃(Layout)**    
  - 렌더 트리의 각 요소가 화면에서 어디에 배치될지 계산한다.  
  - 요소의 크기, 위치 등을 결정하는 단계로, 이를 **레이아웃 단계**라고 한다.  

  ---

  **페인트(Paint)** 
  - 각 요소를 화면에 그리기 위한 픽셀 데이터를 생성한다.  
  - 색상, 글꼴, 그림자, 이미지 등을 기반으로 화면에 그릴 준비를 한다.  

    📌📌 **픽셀데이터**
    브라우저가 화면에 요소를 실제로 그리기 위해 생성하는 정보, 화면에 표시될 요소들의 색상, 모양, 텍스처 등을  
    픽셀 단위로 변환한 정보이다.     

  ---

  **합성 및 렌더링 (Compositing)**   
  - 사용자가 보는 최종 하면이 이 단계에서 만들어진다.  

  ---

  **✔ 랜더링 과정 요약**  

  1. HTML과 CSS 파싱 - DOM과 CSSOM 생성  
  2. 렌더 트리 생성 - DOM과 CSSOM을 결합  
  3. 레이아웃 - 요소의 위치와 크기 계산  
  4. 페인트 - 화면에 표시할 픽셀 정보 생성  
  5. 합성 및 렌더링 - 최종 화면 출력  


