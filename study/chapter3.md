# 자바스크립트(JavaScript)란?
JavaScript는 웹 개발을 중심으로 다양한 환경에서 활용되는 프로그래밍 언어이다 **1995년 넷스케이프(Netscape)** 에서 처음 개발되었으며, 초창기에는 웹 브라우저에서 동적인 기능을 추가하기 위한 간단한 스크립트 언어로 시작되었다. 이후 지속적인 발전과 표준화를 거치며, 오늘날에는 클라이언트 및 서버 측 애플리케이션, 모바일 앱 등 다방면에서 사용되는 현대적인 언어로 자리 잡게되었다.

자바스크립트(JavaScript)는 객체(object) 기반의 스크립트 언어이다. HTML로는 웹의 내용을 작성하고, CSS로는 웹을 디자인하며, 자바스크립트로는 웹의 동작을 구현할 수 있다. 주로 웹 브라우저에서 사용되나, Node.js와 같은 프레임워크를 사용하면 서버 측 프로그래밍에서도 사용할 수 있다 현재 컴퓨터나 스마트폰 등에 포함된 대부분의 웹 브라우저에는 자바스크립트 인터프리터가 내장되어 있다

### 객체 기반의 스크립트 언어
  모든 데이터 타입이 객체처럼 동작하거나 객체와 상호작용할 수 있다. 특히, 클래스 없이도 객체를 생성하고 조작할 수 있으며, 프로토타입 기반 상속을 지원하며, 클래스 없이도 객체를 생성하고 사용할 수 있다.

  ```javascript
      // 객체 리터럴을 사용한 객체 생성
      const person = {
        name: "Alice",
        age: 25,
        greet: function() {
          console.log(`Hello, my name is ${this.name}.`);
        },
      };

      // 객체 사용
      console.log(person.name); // Alice
      person.greet(); // Hello, my name is Alice. 
  ```

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
       console.log(typeof str);
       
      /**
       * "number"
       */
       
       str = "Hello!";   // 문자열 타입으로 변경
       console.log(typeof str);

      /**
       * "string"
       */

  ```
  이러한 동적 특성은 개발 초기 단계에서는 편리하지만, 대규모 프로젝트에서는 타입 혼란을 초래할 수 있다.

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

      /**
       * Hi, I am John and I am 30 years old.
       */

  ```

  **이벤트 기반(Event-Driven)**  
  JavaScript는 사용자 입력(클릭, 키보드 입력)이나 시스템 이벤트(타이머 완료, 네트워크 요청 완료)에 반응하는 코드를 작성할 수 있는 이벤트 중심의  모델을 제공하며 이를 통해 동적인 웹 애플리케이션을 구축할 수 있습니다.  

  ```javascript
      document.getElementById("myButton").addEventListener("click", () => {
        console.log("Button Click!");
      });

      /**
       * 버튼 클릭시 이벤트 발생
       * Button Click!
       */

  ```

  **함수형(Functional)**  
  JavaScript에서는 함수가 하나의 값처럼 취급된다 즉, 변수에 저장하거나 다른 함수의 인수로 전달할 수 있으며 이를 통해 고차 함수를 활용하여 간결하고 재사용 가능한 코드를 작성할 수 있다.   

  ```javascript
      const numbers = [1, 2, 3, 4, 5];

      // 고차 함수 예시: 배열의 각 요소를 두 배로 변환
      const doubled = numbers.map(num => num * 2);
      console.log(doubled); // 

      /**
       * [2, 4, 6, 8, 10]
       */

      // 함수 자체를 값처럼 사용
      const greet = name => `Hello, ${name}!`;
      console.log(greet("Alice"));

      /**
       * Hello, Alice!
       */
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

  ### ✔ 런타임(Run time)  
    자바스크립트 엔진은 **싱글 스레드** 기반 언어이기 때문에, 다른 작업을 수행하려면 현재 수행중인 작업이 끝날때 까지 기다려야하는  
    문제점이 있었다 또한, 많은 시간이 걸리는 작업을 수행하게 된다면 프로그램이 느려질 우려가 있다.

    그러므로 오랜 시간이 걸리는 작업들은 백그라운드에서 처리하고 간단하게 처리할 수 있는 작업들만 Call Stack에서 처리해 효율적으로
    처리가 가능하다 이러한 과정들을 가능하게 해주는 것이 바로 자바스크립트 런타임 환경 이다.

  <img src="/study\assets\js-v8.png" />

  자바스크립트를 실행하기 위해서는 엔진이 필요하다. 자바스크립트 엔진은 코드를 실행하는 프로그램 또는 인터 프리터이다.   
  대표적인 예시로는 구글의 V8엔진이 있다. 파이어폭스의 SpiderMonkey, 사파리의 Webkit 등이 있지만,   
  크롬에서 사용하는 V8이 가장 대중적으로 알려져 있다.

  **자바스크립트 엔진의 주요 구성요소로는 메모리 힙(Memory Heap)과 콜 스택(Call stack)이 있다.**

  **Memory Heap**   

  <img src="/study\assets\memory-heap.png" />  

  **변수 선언, 함수저장, 호출 등의 작업이 발생하느 공간이다.** 예를 들어, 변수를 위해 메모리 공간을 할당하고,    
  그 공간에 값을 할당하는 것이다. 이와 같이 동작이 일어나는 공간이 메모리 힙이며, 그림으로 비유한다면 각각    
  변수명, 함수명이 라벨로 붙어있는 박스들이 메모리이고 그 박스들을 보관하는 창고가 **Memory Heap** 이다.  

  **Call Stack**   

  <img src="/study\assets\call-stack.png" />  

  코드를 읽어내려가면서 수행할 작업들을 아래에서부터 차례대로 쌓고, 메모리 힙에서 작업 수행에 필요한 것들을 찾아서    
  작업을 수행하는 공간이다. 특정 함수를 실행하게 되면, 해당 함수는 콜 스택의 가장 상단에 위치하게되며 함수 실행이   
  끝나게 되면, 해당 함수는 콜 스택에서 제거되게 된다.   

### ✔ 호출 스택(Call Stack)  
  자바스크립트는 **싱글스레드** 로 작업을 처리한다 Call Stack에 쌓인 함수나 코드를 위에서 부터 아래로 차례대로 실행한다 순서 대로 실행하므로 하나의 작업이 끝날 때까지 또 다른 작업을 실행하지 않는다.    

    
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
       * third
       * second
       * first
       */
 
  ```
  first함수가 호출되고 first함수 안에 second함수가 호출되며, 마지막으로 third함수가 호출된다 호출된 함수들은 Call Stack에 쌓이게 되며, 위에서 부터 아래로 실행 된다 **main()** 함수는 처음 실행시 전역 컨텍스트이며 third -> second -> first -> main 순으로   pop되고 main까지 실행완료되면 Call Stack이 비워진다.  
    

  **Stack Overflow**
   ```javascript
      function foo() {
        foo();
      }

      foo(); 
  ```

    
  Call Stack의 각 단계를 스택 프레임(Stack Frame)이라고 한다. 만약 무한 루프를 도는 코드를 실행하면  
  **Maximum call stack size exceded** 에러가 발생하게 된다.  

  <img src="/study\assets\call-stack.png" />

  콜 스택은 정해진 스택 사이즈가 존재하고, 하나씩 쌓이기 때문에 정해진 용량을 초과하게 되면 에러가 발생하게 된다.   
  흔히들 이것을 Stack Overflow라고 말한다 유명한 개발자 포럼 사이트의 이름도 이것에서 따온 것이다.

  ### ✔ 블로킹(Blocking)과 논블로킹(Non-blocking)
    - 블로킹  
      컴퓨터가 특정 작업이 완료될 때까지 프로그램의 실행을 멈추며, 다른 작업은 해당 작업이 끝난 후에 순차적으로 처리된다  
      작업 시간이 길어질수록 성능저하가 발생할수 있다.

    - 논블로킹
      블로킹 방식과 반대로 작업을 요청한 후 즉시 다음 작업을 실행한다 작업이 완료되면 콜백, Promise, async/await   
      같은 비동기 메커니즘을 통해 결과를 처리한다 그러므로 실행 흐름이 멈추지 않아 효율적이다.
  
---   

# 이벤트루프(Event Loop)

  <img src="/study\assets\run-time.png" />  

  자바스크립트의 런타임 환경에서 비동기 작업을 처리하고, 콜 스택(Call Stack)과 태스크 큐(Task Queue) 사이에서 작업을 조정하여   
  싱글 스레드에서 비동기 코드가 실행될 수 있도록 관리하는 **메커니즘** 이다.  

  ### ✔ 주요 구성 요소
  
  **메모리 힙(Memory Heap)**   
  컴퓨터가 정보를 저장하는 곳이다. 즉 자바스크립트의 객체, 배열, 함수 등의 데이터가 저장되는 공간이다  
     
  **콜 스택(Call Stack)**   
  자바스크립트의 할 일 목록이라고 생각하면된다 함수를 호출하게 되면 해당 함수의 정보가 콜 스택에 쌓이게 되고,   
  먼저 들어간 것이 마지막에 나오는 **FILO(First In Last Out)** 후입 선출 구조입니다.

  📌📌  
  웹 API(Web APIs)와 콜백 큐(Callback Queue)는 자바스크립트 엔진 외부에서 관리되며, 주로 브라우저나 Node.js와 같은     
  자바스크립트 런타임 환경에서 제공된다.

  **웹 API(Web APIs)**   
  브라우저가 제공하는 다양한 기능들을 의미한다. 예를들어 HTTP요청, setTimeout 등의 기능들이 포함되며 주로    
  비동기적으로 처리가 된다.

  **콜백 큐(Callback Queue)**       
  비동기 작업(setTimeout, HTTP 요청)의 결과나 나중에 실행되어야 하는 작업들이 대기하는 공간이다.   
  먼저 들어간 작업이 먼저 나가는 **FIFO(First In First Out)** 선입 선출 구조이다 이공간에 대기하고 있는  
  콜백 함수들은 콜스택이 비어있을 떄 먼저 대기열에 들어온 순서대로 실행된다.

  📌📌  
  비동기 함수는 콜백 큐(Callback Queue)에 쌓이지 않는다.  

  **태스크 큐(Task Queue)**   
  일반적으로 매크로 태스크(Macrotask Queue)라고도 부른다 setTimeout, setInterval, fetch 등의 비동기 작업이 이곳에 대기한다.

  **마이크로태스크 큐(Microtask Queue)**  
  프로미스(Promise)의 콜백 함수나 async / await과 같은 코드가 이곳에 대기한다.  

  **애니메이션 프레임(Animation Frames)**  
  브라우저 환경에서 화면을 업데이트 하는 작업도 비동기적으로 처리된다 주로 requestAnimationFrames와    
  같은 코드가 여기에 대기한다.  

  ### ✔ 동작 과정  

  <img src="/study\assets\event-loop.gif" />

  **콜 스택(Call Stack) 확인**   
  이벤트 루프는 먼저 콜 스택이 비어 있는지 확인한다. 만약 콜 스택에 아직 처리되지 않은 함수가 있다면,   
  해당 함수가 완전히 실행될 때까지 대기한다.

  **콜백 큐(Callback Queue) 확인**    
  콜 스택이 비어 있다면, 콜백 큐를 다음으로 확인한다 콜 백큐에는 비동기 작업(setTimeout, HTTP 요청)들이 대기한다

  **함수 이동**   
  콜백 큐 에서 대기하고있는 함수를 콜스택으로 옮긴다.  

  **함수 실행**  
  이동한 해당 함수가 콜 스택에서 실행되고 실행이 끝나면 콜 스택을 빠져나가게 된다.  

  ---

  📌**setTimeOut 내부 동작 과정** 

   ```javascript
      function bar() {
        setTimeout(() => {
          console.log("Second")
        }, 500);
      }

      function foo() {
        console.log("First");
      }

      function baz() {
        console.log("Third");
      }

      bar();
      foo();
      baz();

       /**
       * First
       * Third
       * Second
       */
  ```   
  1. bar() 함수가 호출되고 그안의 setTimeout() 함수가 호출되어 스택에 쌓임  
  2. setTimeout() 함수의 매개변수에 할당된 콜백 함수를 Timer Web API에 전달  
  3. 다음 foo() 함수가 호출되고 콘솔창(output)에 "First" 가 출력  
  4. 이때 500 밀리초 대기 시간이 만료되면서, 이벤트 루프는Timer Web API에서 가지고 있던 콜백 함수를 Task Queue 로 옮김  
  5. 그다음 baz() 함수가 호출되고 콘솔창에 "Third" 가 출력  
  6. 스택에 있는 모든 메인 자바스크립트 코드가 실행 완료 되어 Call Stack이 비워짐  
  7. 이벤트 루프는 Call Stack 이 비어있는 경우를 탐지하여, Task Queue 에 있는 콜백 함수를 Call Stack 으로 옮김  
  8. Call Stack 에서 콜백 함수 코드를 실행하게 되고 콜솔창에는 "Second" 가 출력  

  ---
  
  📌**Promise 내부 동작 과정**   

  **Task Queue 와 Microtask Queue**  
  Callback Queue는 Web API가 수행한 비동기 함수를 넘겨받아 Event Loop가 해당 함수를 Call Stack에 넘겨줄 때까지 비동기 함수들을  쌓아놓는 곳이다. Callback Queue의 종류에는 (Macro)Task Queue, MicroTask Queue 2가지가 있으며 그중 Promise 객체의 콜백이 쌓이는 곳이 바로 MicroTask Queue이다 그 어떤 곳보다 가장 먼저 우선으로 콜백이 처리되게 된다.  

  ```javascript
      console.log('Start!'); 

      setTimeout(() => {
        console.log('Timeout!');
      }, 0);

      Promise.resolve('Promise!').then(res => console.log(res));

      console.log('End!');

      /**
       * Start!
       * End!
       * Promise!
       * Timeout!
       */
  ```

  1. Call Stack에 console.log('Start!') 코드 부분이 쌓인 뒤 실행 되어 콘솔창에 "Start!" 가 출력  
  2. setTimeout 코드가 콜 스택에 적재되고 실행되면, 그 안의 콜백 함수가 이벤트 루프에 의해 Web API로 옮겨지고 타이머가 작동  
  3. 타이머가 종료됨에 따라 setTimeout 의 콜백 함수는 MacroTask Queue에 이벤트 루프에 의해 적재   
  4. Promise 코드가 콜스택에 적재 되어 실행되고 then 핸들러의 콜백 함수가 이벤트 루프에 의해 MicroTask Queue에 적재  
  5. console.log('End!') 코드가 실행되고 "End!" 텍스트가 콘솔창에 출력  
  6. 모든 메인 스레드의 자바스크립트 코드가 실행이되어 더이상 Call Stack엔 실행할 스택이 없어 비워짐  
  7. 그러면 이벤트 핸들러가 이를 감지하여, Callback Queue에 남아있는 콜백 함수들을 빼와 Call Stack에 적재  
  8. 이때 2종류의 Queue 중 MicroTask Queue에 남아있는 콜백이 우선적으로 처리  
  9. MicroTask Queue가 비어지면, 이제 이벤트 루프는 MacroTask Queue에 있는 콜백 함수를 Call Stack에 적재해 실행  

  📌**Async/Await 내부 동작 과정**
  자바스크립트의 Async/Await 는 비동기 논블로킹 동작을 동기적으로 처리하기 위해 ES7 부터 새롭게 도입된 것으로   
  복잡한 콜백이나 then 핸들러의 지옥(hell) 코드를 극복하는 핵심이다.  

  ```javascript
      const one = () => Promise.resolve('One!');

      async function myFunc(){
        console.log('In function!');
        const res = await One();
        console.log(res);
      }

      console.log('Before Function!');
      myFunc();
      console.log('After Function!');

      /**
       * Start!
       * End!
       * Promise!
       * Timeout!
       */
  ```  

  1. 콘솔에 'Before Function!' 이 출력된다.    
  2. async 함수인 myFunc() 이 호출된다.    
  3. async 함수 안에 있는 콘솔 함수가 실행되어 콘솔에 'In Function!' 이 출력된다.    
  4. Promise 객체를 반환하는 one() 비동기 함수를 호출된다.    
  5. 이때 one() 비동기 함수 왼쪽에 await 키워드로 인해, myFunc 함수의 내부 실행은 잠시 중단되고 Call stack 에서 빠져나와   
     나머지 부분은 Microtask Queue 에 적재된다 이는 자바스크립트 엔진이 await 키워드를 인식하면 async 함수의 실행은 지연되는   것으로 처리하기 때문이다.  
  6. 마지막으로 콘솔에 'After Function!' 이 출력된다.   
  7. 모든 메인 스레드의 자바스크립트 코드가 실행이되어 더이상 Call Stack엔 실행할 스택이 없어 비워지게 된다.  
  8. 이벤트 핸들러가 이를 감지하여, Microtask Queue에 남아있는 async 함수를 빼와 Call Stack에 적재하게 된다.
  9. Promise 객체의 결과물인 'One!' 문자열을 변수 res 에 받고 이를 콘솔에 출력한다.