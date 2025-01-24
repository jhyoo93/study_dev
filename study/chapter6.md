# 콜스택, 메모리힙 데이터 저장 구조  

<img src="/study\assets\data-save-info.png" />  

  
### 원시타입 데이터(파란색 변수 a )
- 10이라는 값 자체는 원시 타입으로 콜 스택에 저장된다.  
- 변수 a에는 10이 저장된 콜 스택 메모리의 주소값이 저장된다.  

**변수 식별자 a 자체는 콜스택 상의 실행컨텍스트(Execution Context)의 렉시컬 환경(Lexical Environment)에 저장된다.**  
  
  
### 참조 타입 데이터(핑크색 변수 b, c, d)  
- 배열, 객체, 함수 등은 참조 타입이므로 메모리 힙에 저장된다.  
- 참조타입 데이터가 저장된 메모리 힙의 주소값은 콜스택에 각각 저장된다.  
- 메모리힙의 주소 값이 저장된 콜 스택의 주소값은 각각 변수 b,c,d에 저장된다.  
  
**변수 식별자 b,c,d 이름 자체는 콜스택 콜스택 상의 실행컨텍스트(Execution Context)의 렉시컬 환경(Lexical Environment)에 저장된다.**    


📌 **원시타입(Primitive Type)**  
  원시 타입은 모두 하나의 값을 담고 있으며, 원시 자료형은 값 자체에 대한 변경이 불가능(immutable) 하지만, 변수에 데이터를 재할당할 수 있다  
  하나의 메모리에 하나의 데이터를 보관한다. 

  변수를 재할당 해도 변수의 할당 값에 영할을 주지 않는다.  

  - 문자(String)  
  - 숫자(number)  
  - bigint  
  - boolean  
  - null  
  - undefined  
  - 심볼(symbol) -> ES6부터 추가  

  ```javascript
      let myString = 'goodNews';
      myString = 'badNews'; // 재할당 가능

      myString[0] = 'B'; // 원시 타입이기 때문에 BadNews로 변경 불가능. 오류는 Throw되지 않는다.
      console.log(myString); // badNews

      let myString2 = myString; // myString 값이 myString2에 그대로 복사되어 'badNews'가 할당된다.
      console.log(myString2); // badNews

      myString2 = 20;

      console.log(myString); // badNews
      console.log(myString2); // 20

  ```  

  ---   

  
📌 **참조타입(Reference Type)**  
참조 타입은 변수에 할당할 때에는 값이 아닌 '주소'를 저장한다 배열, 객체, 함수가 대표적이다.  

변수는 주소를 저장하고, 주소는 특병한 동적인 데이터 보관함에 보관되는데 이 데이터 보관함을 메모리 힙이라고 한다.  
값을 재할당 할 경우 주소는 참조한 모든 값이 영햘을 받는다.  

```javascript
    let obj = {
      a: 1,
      b: 2,
      c: 3
    }

    let newObj = obj;
    newObj.a = 100; // 참조된 값 중 a의 값에 100을 재할당

    console.log(obj.a); // 100
    // 해당 주소를 참조한 newObj의 a값을 바꾸었기 때문에 두 객체 모두 반환하는 a 값이 변경됨.

```    

# 클로저(Closure)
  클로저란 함수와 함수가 선언되었을 때의 렉시컬 환경의 조합이다.  

  ```javascript
    function outerFunc() {
      // 외부 함수의 변수
      var x = 10;

      // 내부 함수에서 외부 함수의 변수에 접근할 수 있습니다.
      var innerFunc = function () {
        console.log(x);
      };

      return innerFunc;
    }

    var inner = outerFunc();
    inner(); // 10

  ```

  📌 **동작 과정**  
  outerFunc는 내부함수 innerFunc를 반환하고 콜스택에서 제거가 되었기 때문에 생명주기가 끝난 상태이다.  
  따라서 outerFunc가 호출된 후에는 내부 변수 x도 유효하지 않을 것이라고 생각 할 수 있지만   
  innerFunc는 선언된 당시의 환경을 기억 하고 있기 때문에 변수의 값인 10이 출력된다.  

  이와 같이 생명 주기가 끝난 외부 함수의 변수에 접근 할 수 있는 함수를 클로저 라고 한다.  

  - 자신이 선언되었을 때의 환경(렉시컬 스코프)을 기억 하는 함수이다.
  - 자바스크립트의 모든 함수는 **자신이 선언된 환경의 주소(Environment)** 를 저장하고 있다 즉, 상위스코프의 주소를 가지고 있다.    
  - 함수 본문에서 **자신이 선언된 환경의 주소(Environment)** 를 참조하여 외부 함수의 변수에도 접근할 수 있게 된다.  

  📌 **사용 이유**  
  1. 상태유지
    현재 상태를 기억하고 변경된 최신 상태를 유지할 수 있다.  

  ```javascript
    function debounce(callback, delay) {
      let timer = null;

      return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
          callback.apply(this, arguments);
        }, delay);
      };
    }
  ```  
    - 익명 함수는 debounce 내에서 선언되었으므로 상위 스코프가 된다.  
    - 함수는 선언된 환경의 주소를 기억하기 때문에 상위 스코프의 변수에 접근할 수 있게 되고, timer변수에 접근할 수 있게된다.  
    - timer는 디바운스가 실행될 함수와 다른 스코프에 있기 때문에 timer에 대한 최신 상태를 유지할 수 있다.  
      
  2. 정보 은닉  
    변수의 값을 은닉할 수 있다 클래스 기반 언어의 private 키워드와 같이 사용 가능하다.  

  3. 전역 변수 사용 억제
    클로저를 사용하면 변수를 공유하는 특성은 유지 하되 데이터를 은닉화할 수 있기 때문에, 전역변수를 대체하여  
    안전한 코드를 작성할 수 있다.  


