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


