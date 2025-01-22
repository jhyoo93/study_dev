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
