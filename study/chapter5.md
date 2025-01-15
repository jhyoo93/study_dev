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
   Variable Environment에 담기는 내용은 Lexical Environment와 같다, 하지만 최초 실행 시의 **스냅샷** 을 유지한다는 차이가 있다    
  즉, 실행 컨텍스트를 생성할 때 Variable Environment에 정보를 먼저 담는 후 이를 그대로 복사해서 Lexical Environment를 만들고    
  이후에는 Lexical Environment를 주로 활용한다.   

  - 현재 컨텍스트 내의 식별자 정보와 외부 환경 정보를 포함한다. 
  - 선언 시점의 LexicalEnvironment의 스냅샷을 유지하며, 이후 변경 사항은 반영되지 않는다.  

    ✔ 스냅샷 이란?
    특정 시점의 상태를 캡쳐하여 저장하는 기술 또는 데이터를 의미한다 자바스크립트에서는 주로 애플리케이션 상태, 메모리 상태, 데이터 구조의 상태, UI 상태 등을 기록하거나 관리할 때 사용된다.  


  📌 **Lexical Environment**  
  - 초기에는 VariableEnvironment와 동일하지만, 이후 변경 사항이 실시간으로 반영된다.


  📌 **ThisBinding**   
  ThisBinding은 실행 컨텍스트 생성 시 함께 초기화되며, 함수가 호출 되는 방법에 따라 다르게 설정된다.  

  - 실행 컨텍스트에서 **this** 가 참조하는 값을 결정하는 메커니즘이다.  
  - **this** 는 함수 호출 방식에 따라 값이 달라지며, 실행 컨텍스트의 구성 요소 중하나로 저장 된다.  

    ✔ this란?
    자바스크립트에서 현재 실행중인 컨텍스트에서의 객체를 참조하는 키워드 이다 어떤 코드가 실행되는 환경에 따라 this가 가리키는 값은 달라지며,  
    함수호출 방식에의해 결정된다.  

  📌 **Environment Record와 호이스팅**   
  코드 실행 전에 자바스크립트 엔진은 해당 환경의 모든 변수명을 알게되며, 이를 통해 호이스팅(Hoisting)이 발생한다.  

  - Environment Record는 특정 실행 컨텍스트의 변수, 함수, 매개변수 등의 정보를 저장하는 내부 메커니즘이다.    
  - 자바스크립트는 실행 시점에 변수를 스코프 체인 에 따라 검색하고, 값을 참조하거나 변경한다.    
  - 함수 매개변수, (var, let, const)로 선언된 변수, 내부 함수 선언과 같은 데이터를 저장한다.  
    
    ✔ 식별자 정보란?
    함수에 지정된 매개변수 식별자, 함수 자체, var로 선언된 변수의 식별자 등을 의미한다 즉, 컨텍스트 내부 전체를 처음부터 끝까지 순서대로 수집한다.  


    ✔ 호이스팅 이란?
    변수나 함수 선언이 실행 컨텍스트 최상단으로 끌어올려지는 현상을 말한다, 실제로 코드를 옮기지 않으며,   
    선언만 미리 처리되고 초기화는 실제 코드 위치에서 이루어 진다.   

    처리 방식으로는 var은 선언만 호이스팅되며 undefined 로 초기화 된다.  
    let과 const 선언은 호이스팅 되지만 초기화는 코드 실행 시점에 이루어지며, 초기화 전에 접근하면 일시적으로 사각지대(TDZ - Temporal Dead Zone)에 놓이게 되며, 에러가 발생하게 된다.  


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


  ---












