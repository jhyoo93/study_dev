# 실행 컨텍스트(Execution Context)  
  실행 컨텍스트는 **scope, hoisting, this, function, closure** 등의 동작원리를 담고 있는 자바스크립트의 핵심원리 이며, 실행할 코드에   제공할 환경 정보들을 모아놓은 객체이다.    

  동일한 환경에 있는 코드들을 실행할 때 필요한 환경 정보들을 모아 객체를 구성하고, 이를 콜 스택에 쌓아올렸다가, 가장 위에 쌓여있는 컨텍스트와 관련   있는 코드들을 실행하는 식으로 전체 코드의 환경과 순서를 보장한다.  

  ```javascript
     
    var x = 'xxx';

    function foo () {
        var y = 'yyy';

        function bar () {
            var z = 'zzz';
            console.log(x + y + z);
        }
        bar();
    } 

    foo(); 

  ```   

  **동작 과정**

  1. 자바스크립트 코드를 실행하는 순간 **전역 컨텍스트가 콜스 택에 추가** 된다.  
  2. 콜 스택에서 전역 컨텍스트와 관련된 코드들을 순차적으로 진행한다.  
  3. foo 함수를 호출하면 자바스크립트 엔진은 foo함수에 대한 환경 정보를 수집한다.  
  4. foo 실행 컨텍스트를 생성한 후 콜스택에 추가한다(콜 스택 맨 위에 foo실행 컨텍스트가 놓여있기에 전연컨텍스트 관련코드 중지)  
  5. foo 함수 내부의 코드를 순차적으로 실행한다.  
  6. bar 실행 컨텍스틑 생성 후 콜스 택에 추가한다.  
  7. foo 컨텍스트와 관련된 코드 실행 일시중단 된다.(콜 스택 맨위에 bar 실행 컨텍스트가 놓여 있는 상태)   
  8. bar 함수 내부 코드를 순자척으로 실행한다.  
  9. 이후 bar 함수 실행이 종료되면 콜스택에서 제거 되고 중단했던 foo 실행 컨텍스트를 이어서 실행한다.  
  

  <img src="/study\assets\execution-context.png" />


  ---


  **실행 컨텍스트 주요 구성 요소**    

  📌 **Variable Environment**   
  Variable Environment는 자바스크립트의 실행 컨텍스트의 구성 요소중 하나이며, 변수의 선언, 초기화, 할당 정보를 저장하고   
  관리하는 구조이다.  
   
  Variable Environment는 Lexical Environment와 매우 유사하지만, 주로 호이스팅된 변수와 초기 상태를 관리하는데 사용된다.  

  var로 선언된 변수는 Variable Environment에 저장되고, let과 const로 선언된 변수는 Lexical Environment에 저장된다.  

  ```javascript
    function example() {
      console.log(a); // undefined (호이스팅된 변수)
      console.log(b); // ReferenceError: Cannot access 'b' before initialization
      console.log(c); // ReferenceError: Cannot access 'c' before initialization

      var a = 10;    // Variable Environment에 저장
      let b = 20;    // Lexical Environment에 저장
      const c = 30;  // Lexical Environment에 저장

      console.log(a); // 10
      console.log(b); // 20
      console.log(c); // 30
    }

    example();
  ```  

  ### Variable Environment 실행과정  

  1. 실행 컨텍스트 생성
    - Variable Environment - a가 선언되고 초기값 undefined로 설정  
    - Lexical Environment - b와 c가 선언되지만, 초기화되지 않고 TDZ(일시적사각지대)에 놓임  

  2. 코드 실행
    - 첫 번째 console.log(a) → 출력: undefined (호이스팅된 변수)    
    - 첫 번째 console.log(b) → ReferenceError (TDZ 상태)   
    - 첫 번째 console.log(c) → ReferenceError (TDZ 상태)    
    - 이후 a, b, c가 각각 초기화되고, 다음 console.log에서 해당 값이 출력    

  ---

  📌 **Lexical Environment**  
  **Lexical Environment(렉시컬 환경)** 은 자바스크립트에서 변수, 함수 선언, 스코프 체인을 관리하는 내부 구조이며,   
  렉시컬 환경은 코드가 작성된 위치(즉, 함수나 블록의 선언 위치)에 따라 변수와 스코프가 결정된다.  

  자바스크립트의 스코프 체인, 클로저, 실행 컨텍스트 등의 동작은 Lexical Environment를 기반으로 이루어진다.   

  ### Lexical Environment의 구조   

  1. Environment Record
    - 현재 스코프 내의 변수, 함수 선언 등을 저장하는 객체이다.  
    - 변수의 값이나 함수의 참조를 기록한다.  

  2. Outer Environment Reference
    - 상위 스코프를 참조한다.  
    - 이를 통해 스코프 체인이 형성된다.  

  ### Lexical Environment의 동작  
  렉시컬 환경은 코드 실행전과 실행 중에 생성되며, 변수와 함수의 선언 및 값을 관리한다.  

  1. 전역 Lexical Environment
    - 자바스크립트 코드가 실행되기 전에 가장 먼저 생성된다.  
    - 전역 변수와 함수가 등록 된다.

  2. 함수 실행시 생성되는 Lexical Environment  
    - 함수가 호출될 때 마다 새로운 Lexical Environment가 생성된다.  
    - 함수 내부의 변수, 매개변수 등이 등록된다.  

  3. 블록 스코프의 Lexical Environment
    - let과 const로 선언된 변수는 블록 스코프를 가지며, 블록이 실행될 때 별도의 Lexical Environment가 생성된다.  
  
  **✔전역 Lexical Environment**  

  ```javascript
    var globalVar = 'global';

    function example() {
      console.log(globalVar); // 'global'
    }

    example();

    // globalVar → 'global'
    // example 함수 참조

  ```  

  **✔함수 Lexical Environment**  

  ```javascript
    function outer() {
      var outerVar = 'outer';

      function inner() {
        var innerVar = 'inner';
        console.log(outerVar); // 'outer'
        console.log(innerVar); // 'inner'
      }

      inner();
    }

    outer();

    /*

    전역 Lexical Environment
      - outer 함수 참조

    outer 함수 Lexical Environment
      - outerVar → 'outer'
      - inner함수 참조
    
    inner 함수 Lexical Environment
      - innerVar → 'inner'
      - 상위 스코프 outer 함수의 Lexical Environment

    */
  ```

  **Lexical Environment와 TDZ(Temporal Dead Zone)**   

  ### TDZ란?
  let과 const 변수는 **선언은 호이스팅되지만 초기화되기 전까지 TDZ(일시적 사각지대)** 에 놓이게 되며,  
  TDZ동안 변수에 접근하려고 하면 **ReferenceError**가 발생한다.  

  ```javascript
    console.log(a); // ReferenceError
    let a = 10;

    function test() {
      console.log(b); // ReferenceError
      const b = 20;
    }
    test();
  ```  

  ### TDZ가 필요한 이유
  - 코드가 실행되기 전에 모든 변수는 이미 메모리에 할당되지만, let과 const는 초기화 되지 않는다.  
  - 이를 통해 선언 전에 변수에 접근하는 것을 방지 할 수 있다.  

  ---

  📌 **ThisBinding**   
  ThisBinding은 실행 컨텍스트 생성 시 함께 초기화되며, 함수가 호출 되는 방법에 따라 다르게 설정된다.  

  - 실행 컨텍스트에서 **this** 가 참조하는 값을 결정하는 메커니즘이다.  
  - **this** 는 함수 호출 방식에 따라 값이 달라지며, 실행 컨텍스트의 구성 요소 중하나로 저장 된다.  

    ✔ this란?
    자바스크립트에서 현재 실행중인 컨텍스트에서의 객체를 참조하는 키워드 이다 어떤 코드가 실행되는 환경에 따라 this가 가리키는 값은 달라지며, 함수호출 방식에의해 결정된다.  

  ---

  📌 **스코프(Scope)와 outerEnvironmentReference**     

  **스코프(Scope)** 는 변수가 정의되고 접근할 수 있는 유효 범위를 의미하며   
  자바스크립트에서 스코프는 변수, 함수, 객체가 어디서 접근 가능하고 유효한지 결정한다.

  - 전역스코프(Global Scope)  
    코드 어디에서나 접근이 가능한 변수가 선언되는 스코프이며, 전역 변수는 전역객체(window, global)의 속성으로 저장된다.  

    ```javascript
      var globalVar = 'I am global'; // 전역 변수

      function example() {
        console.log(globalVar); // 전역 변수 접근 가능
      }

      example(); // 'I am global'
      console.log(globalVar); // 'I am global'

    ```

  - 함수스코프(Function Scope)  
    함수 내부에서 선언된 변수는 함수 내부에서만 접근 가능하며, var로 선언된 변수는 함수 스코프를 따른다.  

     ```javascript
      
      function example() {
        var functionVar = 'I am inside a function';
        console.log(functionVar);  
      }

      example();
      // console.log(functionVar); // ReferenceError: functionVar is not defined
    ```  

  - 블록 스코프(Block Scope)    
    중괄호로 묶인 블록 내부에서만 유효한 스코프이며, let과 const는 블록 스코프를 따른다.  

    ```javascript
      
      {
        let blockVar = 'I am inside a block';
        const blockConst = 'I am also inside a block';
        console.log(blockVar);
      }

      // console.log(blockVar); // ReferenceError: blockVar is not defined
      // console.log(blockConst); // ReferenceError: blockConst is not defined
    ```  

  - 스코프 체인(Scope Chain)
    자바스크립트에서 변수를 어디서 찾을지 결정하는 메커니즘이며, 현재 스코프에서 찾지 못하면 상위 스코프를 따라 올라가며 검색한다  

    최상위 스코프에 도달해도 변수를 찾지 못하면 **ReferenceError** 가 발생한다.          
    스코프 체인은 단방향 이기 때문에 내부스코프는 상위 스코프를 참조할 수 있지만, 상위 스코프는 하위 스코프를 참조할 수 없다.  

    ```javascript
      // 전역 스코프
      var globalVar = 'global';

      // 함수 스코프
      function outer() {
        var outerVar = 'outer';
        
        //함수 스코프
        function inner() {
          var innerVar = 'inner';

          console.log(globalVar); // 'global' (전역 스코프)
          console.log(outerVar); // 'outer' (outer 함수 스코프)
          console.log(innerVar);  // 'inner' (현재 inner 스코프)
        }
        inner();

      }

      outer();

    ```

  - 스코프 체인의 활용 -> 클로저(Closure)    
    클로저(Closure)는 자바스크립트에서 함수와 그 함수가 선언된 렉시컬환경(Lexical Environment)의 조합을 의미한다.  

    외부 함수의 변수를 참조하는 내부 함수를 말하며, 외부 함수가 종료된 후에도 그외부 함수의 변수에 접근할 수 있는 함수이다.  

     ```javascript
      function outer() {
        let count = 0; // 외부 함수의 변수

        return function inner() {
          count++; // 외부 변수에 접근 및 변경
          console.log(count);
        };
      }

      const counter = outer(); // outer 함수 실행 후 inner 함수 반환
      counter(); // 1
      counter(); // 2
      counter(); // 3

    ```
    - outer함수가 호출되면, 새로운 실행 컨텍스트가 생성된다.  
    - 내부 함수 inner가 반환되며, outer 함수의 실행 컨텍스트는 종료된다.  
    - 반환된 inner 함수는 count변수를 계속 참조할 수 있다(inner 함수가 outer의 렉시컬 환경을 클로저가 가지고 있기 때문).

  ---












