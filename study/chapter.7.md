# 콜백 지옥
  JavaScript를 이용한 비동기 프로그래밍시 발생하는 문제로서, 함수의 매개변수로 넘겨지는 콜백 함수가 반복되어 코드의 들여쓰기 수준이  
  감당하기 힘들 정도로 깊어지는 현상을 말한다.  

  주로 이벤트 처리나 서버 통신과 같은 비동기적인 작업을 수행하기 위해 이런 형태가 자주 등장하는데, 이와 같은 코드는 가독성이 떨어지고  
  코드를 수정하기 어려워진다.  

  ```javascript
    step1(function (value1) {
      step2(function (value2) {
        step3(function (value3) {
          step4(function (value4) {
            step5(function (value5) {
              step6(function (value6) {
                // Do something with value6
              });
            });
          });
        });
      });
    });  

  ```  
  - step1에서 어떤 처리 이후 그 결과를 받아와, 인자로 전달된 익명 함수의 매개변수로 넘겨준다.  
    이후 step2에서 또 어떤 처리를 하고, 다음 익명 함수가 실행된다.  이를 반복하다보면 코드가 피라미드 모양으로 기술되게 된다.  

  ---  

  ```javascript
    function fetchData(url, callback) {
      setTimeout(() => {
        console.log(`Data from ${url}`);
        callback();
      }, 1000);
    }

    // 콜백 지옥 발생
    fetchData('api/user', () => {
      fetchData('api/posts', () => {
        fetchData('api/comments', () => {
          fetchData('api/likes', () => {
            console.log('All data loaded');
          });
        });
      });
    });

  ```  