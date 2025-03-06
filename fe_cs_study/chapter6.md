# 콜스택, 메모리힙 데이터 저장 구조  

<img src="/fe_cs_study\assets\data-save-info.png" />  

  
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
# 불변성(Immutability)  
불변성이란 **데이터가 한 번 생성되면 변경되지 않는 성질** 을 의미한다 즉, 어떤 값을 변경하려면 기존 값을 직접 수정하는 것이 아니라  
새로운 값을 생성해야 한다.  

자바스크립트에서 불변성은 **원시 타입(Primitive Type)과 객체(Object)의 차이** 에서 중요하게 다뤄지며,  
리액트(React), 리덕스(Redux) 등의 상태 관리에서도 필수 개념이다.  

📌 **원시 타입(Primitive Type) - 불변**  
- string, number, boolean, null, undefined, symbol, bigint 등은 불변성을 가지며 한번 생성된 값을 변경 되지 않는다.  

```javascript
  let str = 'Hello';
  str[0] = 'h'; // 변경되지 않음
  console.log(str); // 'Hello'

  let num = 10;
  num = num + 5; // 새로운 값을 생성해 변수에 할당
  console.log(num); // 15

```  

📌 **객체(Object) - 가변**  
- Array, Object, Function 등은 가변성(Mutability)을 가지며 변수에 저장되는 것은 **참조** 이며, 원본 객체를 직접 수정 가능하다.  

```javascript
  let obj = { name: 'Alice' };
  obj.name = 'Bob'; // 원본 객체가 변경됨
  console.log(obj); // { name: 'Bob' }

```   
- 객체의 속성을 변경하면 메모리의 동일한 객체를 수정하게 된다.  

### 불변성을 유지하는 방법  

📌 **객체(Object)의 불변성 유지**  
- object.assign()을 사용한 복사  

```javascript
  const person = { name: 'Alice', age: 25 };

  const newPerson = Object.assign({}, person, { age: 26 });

  console.log(person); // { name: 'Alice', age: 25 } (원본 유지)
  console.log(newPerson); // { name: 'Alice', age: 26 } (새로운 객체)

```   
- 스프레드 연산자 사용  

```javascript
  const person = { name: 'Alice', age: 25 };

  const newPerson = { ...person, age: 26 };

  console.log(newPerson); // { name: 'Alice', age: 26 }

```   

📌 **배열(Array)의 불변성 유지**   
- concat() 사용  

```javascript
  const arr = [1, 2, 3];
  const newArr = arr.concat(4); // 새로운 배열 반환

  console.log(arr); // [1, 2, 3]
  console.log(newArr); // [1, 2, 3, 4]

```  
- 스프레드 연산자 사용

```javascript
  const arr = [1, 2, 3];
  const newArr = [...arr, 4];

  console.log(newArr); // [1, 2, 3, 4]

```  
- map(), filter(), reduce() 사용  

```javascript
  const numbers = [1, 2, 3, 4, 5];

  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6, 8, 10]

  const evens = numbers.filter(num => num % 2 === 0);
  console.log(evens); // [2, 4]

```  

---

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

---

# this
  자바스크립트에서의 this는 현재 실행 중인 코드에서 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는 자기 참조 변수이다.  
  단 this가 가리키는 값, **즉 this의 바인딩은 함수 호출 방식에 의해 동적으로 결정된다.**  

  **✔ 전역 컨텍스트에서의 this**  

  📌 **브라우저 환경**  
  전역 스코프에서 this는 전역객체(window)를 참조한다.  

  ```javascript
    console.log(this); // window
  ```   
  📌 **Node.js 환경**   
  전역 스코프에서 this는 빈 객체를 참조 한다.  

  ```javascript
    console.log(this); // {}
  ```

  ---

  **✔ 일반 함수 호출에서의 this**  
  기본적으로 this에는 전역 객체(window)가 바인딩 된다 브라우저에서는 windw, Node.js 환경에서는 global 객체를 가리킨다.  
  단, **strict 모드에선 this가 undefined가 된다.**    

  📌 **strict모드 란?**  
  JavaScript에서 더 안전한고 오류가 적은 코드를 작성할 수 있도록 도와주는 실행모드이다 ES5(ECMAScript 5)부터 도입되었으며,   
  코드의 잠재적인 문제를 사전에 방지하고 디버깅을 더 쉽게 만들어준다.  

  ```javascript
    function foo() {
      console.log(this)
    }

    foo() /// window
  ```  


  --- 

  
  **✔ 화살표 함수에서의 this**  
  일반 함수와 다르게 동작한다 우선 화살표 함수에는 this가 존재하지 않는다. 그래서 화살표 함수에서의 this를 사용하면, 외부 스코프의   
  this를 그대로 사용한다.  

  일반 함수의 this는 함수가 호출 될때 결정되지만, 화살표 함수는 함수가 정의될 때 마치 렉시컬스코프와 같이 정의 된 위치에 따라  
  외부 스코프의 this를 캡쳐해서 사용한다.  

  📌 **선언식 함수**  
  ```javascript
    const person = {
      name : 'Seo',
        sayName : function() {
          innerFun = function() {
              return `안녕하세요 ${this.name}님`
            }
          console.log(innerFun())  /// 안녕하세요 ''님
        }
    }
    
    person.sayName() 

    /**
     * innerFun 함수 앞에 마침표(.)를 붙여서 호출하지도 않았고, bind, call, apply를 사용하지 않았다
     * 일반 함수 호출 되었기 때문에 여기서의 this는 window가 된다.
    */
  ```   

  📌 **화살표 함수**  
  ```javascript
    const person = {
      name : 'Seo',
        sayName : function() {
          innerFun =() => {
              return `안녕하세요 ${this.name}님` /// 안녕하세요 Seo님
            }
          console.log(innerFun())
        }
    }
    
    person.sayName() 

    /**
     * innerFun 은 일반함수로 호출 되었으나 innerFun 이 화살표 함수로 선언이 되어 있다. 
     * 화살표 함수에서의 this 는 자신의 상위 스코프를 따르기 때문에 여기서 this 는 person 객체 안에 선언된 name 이 된다.
    */
  ``` 

  ---

  **✔ 메서드 호출에서의 this**  
  메서드로서 호출된 함수 내부에서 this는 해당 메서드가 속한 객체를 가리킨다.  
  sayName 앞에 마침표(.)를 붙여서 호출한 객체인 person이 this가 가리키는 객체가 된다.

  sayName 앞에 person 을 붙여서 호출 했기 때문에 여기서 this 는 person 객체가 되고 this.name 을 호출하였기 때문에 person.name 값인 'Seo' 가 콘솔에 나오게 된다.  

  ```javascript
    const person = {
      name : 'Seo',
        sayName() {
          console.log(this.name)
        }
    }

    person.sayName() //// Seo 

  ```    
  **✔ apply, bind, call 메서드에 의한 간접 호출**  
  
  📌 **call 메서드**  
  call을 사용하면, 함수를 실행하고 함수의 첫번째 인자로 전달하는 값에 this를 바인딩 한다.  
  여기서는 getUser.call(person, 1, 2, 3)으로 호출하였기 때문에 sayName의 this는 person 객체를 가리키게 된다.  

  ```javascript
    function getUser(a, b, c) {
      console.log(this.name)
      console.log(this.gender)
      console.log(a + b + c)
    }
    
    const person = {
      name : 'Seo',
      gender : 'Female'
    }

    getUser.call(person, 1, 2, 3)
    ///  'Seo' 
    ///  'Female'  
    ///   6 

  ```   

  📌 **apply 메서드**  
  apply와 call메서드는 호출할 함수에 인수를 전달하는 방식만 다를 뿐 동일하게 동작하며, 
  apply메서드는 호출할 함수의 인수를 배열로 묶어서 전달한다.  

  ```javascript
    function getUser(a, b, c) {
      console.log(this.name)
      console.log(this.gender)
      console.log(a + b + c)
    }

    const person = {
      name : 'Seo',
      gender : 'Female'
    }

    const numbers = [1, 2, 3]

    getUser.apply(person, numbers)
    ///  'Seo'
    ///  'Female'
    ///   6 

  ```  

  📌 **bind 메서드**   
  bind는 call, apply와 조금 다르게 함수를 반환 한다라는 독특한 특징이 있다.  
  사용한 함수와 똑같이 생긴 함수를 반환하는 것을 알 수 있다 따라서 bind메서드를 이용하면 함수를 호출해 줘야 한다.  

  ```javascript
    function getUser(a, b, c) {
      console.log(this.name)
      console.log(this.gender)
      console.log(a + b + c)
    }

    const person = {
      name : 'Seo',
      gender : 'Female'
    }

    console.log(getUser.bind(person, 1, 2, 3))
    // getUser 함수가 그대로 콘솔에 나타난다.

    getUser.bind(person, 1, 2, 3)()
    // 따라서 bind 메서드를 사용 후에 다시 한번 호출을 해주어야 this 객체 값을 얻을 수 있다.

  ```  

# 플러그인, 라이브러리, 프레임워크 차이  

  ### 플러그인 (Plugin)  
  - 플러그인은 기존의 소프트웨어나 애플리케이션에 기능을 확장하거나 추가하기 위한 모듈이다.  
  - 독립적으로 동작하지 않으며, 반드시 특정 소프트웨어(호스트)가 필요하다.  
    
  **특징**  
  - 플러그인은 반드시 호스트 애플리케이션(브라우저, IDE, 게임 엔진 등)위에서만 동작한다.  
  - 특정 기능만 추가하거나 수정한다.  
  - 사용자가 필요에 따라 설치하거나 제거할 수 있다.  

  **VS Code의 플러그인, 웹브라우저 확장프로그램(AdBlock, Dark Reader) 등이 있다.**    

  ---

  ### 라이브러리 (Library)
  - 라이브러리는 특정 기능을 수행하는 코드를 모아놓은 재사용 가능한 코드 집합이다.  
  - 개발자가 필요한 기능을 가져다 사용하며, 라이브러리가 개발자 코드에 종속 된다.  

  **특징**  
  - 개발자가 라이브러리를 호출하여 필요한 작업을 수행한다.  
  - 주로 특정 문제를 해결하는 기능에 초점(HTTP 요청, 데이터 파싱)  
  - 개발자가 원하는 시점에 호출 가능하다.  

  **Lodash(유틸리티 함수 모음), Axios(HTTP 요청 처리), React(사용자 인터페이스 라이브러리) 등이 있다.**    

  ---   

  ### 프레임워크 (Framework)
  - 프레임워크는 애플리케이션의 구조와 흐름을 미리 정의한 큰 틀이다.  
  - 개발자가 프레임워크의 규칙에 따라 코드를 작성하며, 프레임워크가 애플리케이션의 실행 흐름을 제어한다.  
  
  **특징**
  - 프레임워크가 전체 애플리케이션의 실행 흐름을 제어.  
  - 일반적으로 다수의 기능을 포괄(라우팅, 데이터 관리, UI구성)
  - 프레임워크의 구조와 규칙을 따라야 함.  

  **Next.js(React 기반 서버사이드 렌더링 프레임워크), Angular(프론트엔드 웹 애플리케이션 프레임워크), Django(파이썬 웹 프레임워크) 등이 있다.**   













