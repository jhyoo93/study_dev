# 콜백 지옥
  콜백 지옥은 콜백 함수를 익명 함수로 전달하는 과정이 반복되어 코드의 들여쓰기 수준이 감당하기 힘들 정도로 깊어지는 현상으로,  
  자바스크립트에서 흔히 발생하는 문제이다. 주로 이벤트 처리나 서버 통신과 같이 비동기적인 작업을 수행하기 위해 이런형태가 자주 등장   
  하곤 하는데, 가독성이 떨어질뿐더러 코드를 수정하기도 어렵다.  

  ```javascript
    setTimeout(function (name) {
      var coffeeList = name;
      console.log(coffeeList);

      setTimeout(function (name) {
        coffeeList += ', ' + name;
        console.log(coffeeList);

        setTimeout(function (name) {
          coffeeList += ', ' + name;
          console.log(coffeeList);

          setTimeout(function (name) {
            coffeeList += ', ' + name;
            console.log(coffeeList);
                       
          }, 500, '카페라떼');

        }, 500, '카페모카');

      }, 500, '아메리카노');

    }, 500, '에스프레소');

  ```  
  - 0.5초 주기마다 커피 목록을 수집하고 출력한다 각 콜백은 커피 이름을 전달하고 목록에 이름을 추가한다.  
    목적 달성에는 지장이 없지만 들여쓰기 수준이 과도하게 깊어졌을 뿐더러 값이 전달되는 순서가 **'아래에서 위로'** 향하고 있어  
    어색하게 느껴 진다.  

  ---  

  ### 콜백 지옥 해결 방법
      
  📌 **기명함수로 변환**

  ```javascript
    var coffeeList = '';

    var addEspresso = function (name) {
      coffeeList = name;
      console.log(coffeeList);
      setTimeout(addAmericano, 500, '아메리카노');
    };

    var addAmericano = function (name) {
      coffeeList = name;
      console.log(coffeeList);
      setTimeout(addMocha, 500, '카페모카');
    };

    var addMocha = function (name) {
      coffeeList = name;
      console.log(coffeeList);
      setTimeout(addLatte, 500, '카페라떼');
    };

    var addLatte = function (name) {
      coffeeList = name;
      console.log(coffeeList);     
    };

    setTimeout(addEspresso, 500, '에스프레소');
  ```  

  ---  

  📌 **Promise**

  ```javascript
    new Promise(function (resovle) {
      setTimeout(function () {
        var name = '에스프레소';
        console.log(name);

        resovle(name);
      }, 500);

    }).then(function (prevName){
      return new Promise(function (resovle) {
        setTimeout(function () {
          var name = prevName + ', 아메리카노';
          console.log(name);

          resovle(name);
        }, 500);
      });

    }).then(function (prevName){
      return new Promise(function (resovle) {
        setTimeout(function () {
          var name = prevName + ', 카페모카';
          console.log(name);

          resovle(name);
        }, 500);
      });

    }).then(function (prevName){
      return new Promise(function (resovle) {
        setTimeout(function () {
          var name = prevName + ', 카페라떼';
          console.log(name);

          resovle(name);
        }, 500);
      });

    });
 
  ```  
  - Promise를 이용한 방식이다 new연산자와 함께 호출한 Promise의 인자로 넘겨주는 콜백 함수는 호출할 때 바로 실행되지만  
    그 내부에서 resovle 또는 reject 함수를 호출하는 구문이 있을 경우 둘 중 하나가 실행되기 전까지는 다음(then) 또는 오류  
    구문(catch)으로 넘어가지 않는다. 따라서 비동기 작업이 완료 될때 비로소 resolve 또는 reject를 호출하는 방법으로  
    비동기 작업의 표현이 가능하다.  

  ---  

  📌 **Async/await**  
  async/await는 비동기 작업을 동기적인 코드처럼 작성할 수 있게 해주는 문법이다. **async키워드로 비동기 함수** 를 선언하고,  
  **await키워드** 를 사용하여 비동기 작업의 결과를 기다릴수 있다. 이를 통해 코드의 가속성과 이해도를 향상 시킬수있다.  

  ```javascript
    var addCooffe = function () {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resovle(name);
        }, 500)
      });
    };

    var coffeeMaker = async function () {
      var coffeeList = '';
      var _addCoffee = async function (name) {
        coffeeList += (coffeeList ? ',' : '') + await addCoffee(name);
      };

      await addCoffee('에스프레소');
      console.log(coffeeList);

      await addCoffee('아메리카노');
      console.log(coffeeList);

      await addCoffee('카페모카');
      console.log(coffeeList);

      await addCoffee('카페라떼');
      console.log(coffeeList);
    };

    coffeeMaker();
 
  ```   
  - ES6에서는 가독성이 뛰어나면서 작성법도 간단한 새로운 기능이 추가되었는데, async/await이다. 비동기 작업을 수행하고자 하는  
    함수 앞에 async를 표기하고, 함수 내부에서 실직적인 비동기 작업이 필요한 위치마다 await를 표기하는 것만으로 뒤의 내용을  
    Promise로 자동 전환하고, 해당 내용이 resolve된 이후에야 다음으로 진행한다 즉, Promise의 then과 흡사한 효과를 얻는다.  

---  

# 이터러블, 이터레이터, 제네레이터

  📌 **이터러블(interable)**  
  이터러블은 자료를 반복할 수 있는 객체를 말하는 것이다 우리가 흔히 쓰는 배열 역시 이터러블 객체이다.  
  **for...of** 루프에서 순회할 수 있는 객체를 의미하며, Symbol.iterator 메서드를 구현해야 한다.  

  - Symbol.iterator 메서드를 구현해야 한다.  
  - for...of 루프를 사용할 수 있다.    
  - Array, String, Set, Map 등은 기본적으로 이터러블이다.    

  ```javascript
    const iterableObject = {
      data: [1, 2, 3],
      [Symbol.iterator]() {
        let index = 0;
        return {
          next: () => {
            if (index < this.data.length) {
              return { value: this.data[index++], done: false };
            } else {
              return { value: undefined, done: true };
            }
          },
        };
      },
    };

    for (const value of iterableObject) {
      console.log(value); // 1, 2, 3
    }
 
  ```   

  📌 **이터레이터(Iterator)**   
  이터레이터는 .next() 메서드를 호출할 때 마다 {value, done} 형태의 객체를 반환하는 객체이다.  

  - next() 메서드를 가지고 있어야 한다.  
  - next() 호출 시 { value, done } 형태의 객체를 반환한다.  
  - done이 true가 되면 반복이 종료된다.  

  ```javascript
    const iterator = {
      data: [10, 20, 30],
      index: 0,
      next() {
        if (this.index < this.data.length) {
          return { value: this.data[this.index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };

    console.log(iterator.next()); // { value: 10, done: false }
    console.log(iterator.next()); // { value: 20, done: false }
    console.log(iterator.next()); // { value: 30, done: false }
    console.log(iterator.next()); // { value: undefined, done: true }

  ```  

  📌 **제네레이터(Generator)**     
  제네레이터는 이터러블과 이터레이터를 쉽게 만들 수 있도록 도와주는 함수이다. function* 키워드로 정의 되며,  
  yield 키워드를 사용하여 값을 하나씩 반환 한다.  

  - function* 키워드로 생성한다.  
  - yield 키워드를 사용하여 값을 반환하고 실행을 일시 중지할 수 있다.  
  - next() 호출 시 실행이 재개된다.  

  ```javascript
    function* generatorFunction() {
      yield 1;
      yield 2;
      yield 3;
    }

    const gen = generatorFunction();

    console.log(gen.next()); // { value: 1, done: false }
    console.log(gen.next()); // { value: 2, done: false }
    console.log(gen.next()); // { value: 3, done: false }
    console.log(gen.next()); // { value: undefined, done: true }

  ```  

