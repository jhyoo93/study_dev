# 자바스크립트(JavaScript)란?
JavaScript는 웹 개발을 중심으로 다양한 환경에서 활용되는 프로그래밍 언어이다 **1995년 넷스케이프(Netscape)** 에서 처음 개발되었으며, 초창기에는 웹 브라우저에서 동적인 기능을 추가하기 위한 간단한 스크립트 언어로 시작되었다. 이후 지속적인 발전과 표준화를 거치며, 오늘날에는 클라이언트 및 서버 측 애플리케이션, 모바일 앱 등 다방면에서 사용되는 현대적인 언어로 자리 잡게되었다.
  
  
    
---  
  
## 자바스크립트(JavaScript) 정의
JavaScript는 **동적(dynamic)** 이고, **인터프리터(interpreted)** 방식의 **멀티-패러다임(multi-paradigm)** 언어이다
웹 브라우저에서 실행되는 클라이언트 측 스크립트로 시작했지만, 현재는 서버, 모바일, 데스크탑 애플리케이션 등 
다양한 환경에서 활용된다.

### ✔ 동적  
  JavaScript는 동적인 특성을 지니고 있어, 코드 실행 중에도 변수의 데이터 타입을 변경하거나 객체의 구조를 수정할 수 있다
  이는 유연성과 적응성을 제공하지만, 코드의 안정성을 낮출 가능성도 있다  

  ```javascript
       let str = 42;      // 숫자 타입
       console.log(typeof str); // "number"

       str = "Hello!";   // 문자열 타입으로 변경
       console.log(typeof str); // "string"
  ```
  이러한 동적 특성은 개발 초기 단계에서는 편리하지만, 대규모 프로젝트에서는 타입 혼란을 초래할 수 있다.

### ✔ 인터프리터 언어 
  JavaScript는 대표적인 인터프리터 언어로, 소스 코드를 한 줄씩 읽고 바로 실행하는 방식을 따른다. 인터프리터 언어는 별도의 컴파일 과정 없이 코드를 즉시 실행하기 때문에 개발 과정에서 빠르게 테스트하고 수정할 수 있는 장점이 있다. 대표적인 프로그램 언어로 JavaScript와 Python이 있다.
      
  1. 코드를 작성한 뒤 별도의 컴파일 없이 바로 실행할 수 있다.  
  2. 코드를 실행하는 중에 데이터 타입 변경이나 함수 추가와 같은 동적인 작업이 가능하다.  
  3. 코드가 실행 중에 해석되기 때문에 컴파일된 코드보다 실행 속도가 느릴 수 있다.   
  
### ✔ 컴파일 언어
  컴파일 언어는 코드를 실행하기 전에 전체 코드를 한 번에 번역(컴파일)하여 기계어로 변환하는 프로그래밍 언어를 말한다 
  대표적인 컴파일 언어로는 **C, C++, Java** 등이 있다.  

  1. 소스 코드는 실행 전 컴파일러에 의해 기계어로 변환된다.  
  2. 컴파일 시점에 문법 및 타입 에러를 미리 발견할 수 있다.  
  3. 컴파일이 완료된 후 실행되므로 런타임에서의 속도가 빠르다.  


### ✔ JavaScript의 프로그래밍 스타일(멀티-패러다임)
  JavaScript는 **객체지향(Object-Oriented)**, **이벤트 기반(Event-Driven)**, **함수형(Functional)** 프로그래밍 스타일을 지원하는 유연한 언어이다    

  **객체지향(Object-Oriented)**  
  JavaScript는 데이터를 객체 형태로 관리하며, 클래스와 프로토타입을 활용해 재사용 가능한 코드를 작성할 수 있고 객체지향 프로그래밍을 통해 데이터와    동작을 묶어서 더 구조적인 코드를 작성할 수 있다.    

  ```javascript
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }
        greet() {
          console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
        }
      }

      const john = new Person("John", 30);
      john.greet();
  ```

  **이벤트 기반(Event-Driven)**  
  JavaScript는 사용자 입력(클릭, 키보드 입력)이나 시스템 이벤트(타이머 완료, 네트워크 요청 완료)에 반응하는 코드를 작성할 수 있는 이벤트 중심의  모델을 제공하며 이를 통해 동적인 웹 애플리케이션을 구축할 수 있습니다.  

  ```javascript
      document.getElementById("myButton").addEventListener("click", () => {
        console.log("Button Click!");
      });
  ```

  **함수형(Functional)**  
  JavaScript에서는 함수가 하나의 값처럼 취급된다 즉, 변수에 저장하거나 다른 함수의 인수로 전달할 수 있으며 이를 통해 고차 함수를 활용하여 간결하고 재사용 가능한 코드를 작성할 수 있다.   

  ```javascript
      const numbers = [1, 2, 3, 4, 5];

      // 고차 함수 예시: 배열의 각 요소를 두 배로 변환
      const doubled = numbers.map(num => num * 2);
      console.log(doubled); // [2, 4, 6, 8, 10]

      // 함수 자체를 값처럼 사용
      const greet = name => `Hello, ${name}!`;
      console.log(greet("Alice"));
  ```


  **절차 지향과 객체지향 프로그래밍**  

    - 절차지향 프로그래밍  
      "절차적"이라는 말 답게, 순차적으로 실행되는 명령어들의 집합으로 구성된다    
      대표적으로 언어로는 C언어가 절차적 프로그래밍 특징을 가지고있다  

    - 객체 지향 프로그래밍
      데이터와 데이터를 조작하는 방법을 묶어서 객체로 표현하는 방식을 말한다  
      상속, 다형성, 캡슐화, 추상화 등의 개념을 사용해 코드의 재사용성과 확장성을 높인다  
      Java, Python, C++, 그리고 JavaScript는 객체 지향 프로그래밍 특징을 가지고 있다  

  
   
---  
  
# 자바스크립트의 메모리 구조

  <img src="/study\assets\js-v8.png" />

  **Memory Heap**   
  - 동적으로 생성된 객체와 함수가 저장되는 메모리 영역  
  - 객체나 배열 같은 참조 타입 데이터는 힙에 저장  

  **Call Stack**   
  - 함수 호출이 관리되는 메모리 영역  
  - 함수가 호출되면 스택에 추가되고, 실행이 완료되면 스택에서 제거된다  

### ✔ 호출 스택  
  자바스크립트는 **싱글스레드**  로 작업을 처리한다 Call Stack에 쌓인 함수나 코드를 위에서 부터 아래로 차례대로 실행한다 순서 대로 실행하므로 
  하나의 작업이 끝날 때까지 또 다른 작업을 실행하지 않는다.   

    
  ```javascript
      function first() {
          second();
          console.log("first");
      }

      function second(){
          third();
          console.log("second");
      }
      function third(){
          console.log("third");
      }

      first(); // 호출
      
      /**
       * console
       * 
       * third
       * second
       * first
       */
 
  ```
  first함수가 호출되고 first함수 안에 second함수가 호출되며, 마지막으로 third함수가 호출된다 호출된 함수들은 Call Stack에 쌓이게 되며,     
  위에서 부터 아래로 실행 된다 **main()** 함수는 처음 실행시 전역 컨텍스트이며 third -> second -> first -> main 순으로 pop되고  
  main까지 실행완료되면 Call Stack이 비워진다.



