# 자바스크립트 반목문

  📌 **for...in**  
  - 객체(Object)의 속성(키)을 반복할때 사용.  
  - 배열에도 사용할 수 있지만, 배열에넌 for...of가 더적합 하다.  
  
  ```javascript
  
    const obj = { a: 1, b: 2, c: 3};
    for (let key, in obj) {
      console.log(key, obj[key]);
    };

  ```  

  📌 **for...of**  
   - 배열(Array), 문자열(String), Map, Set 등 반복 가능한(iterable) 객체를 반복.  
   - for...in 보다 배열 순회에 적합하다.  

  ```javascript

    const arr = [10, 20, 30];
    for (let value of arr) {
      console.log(value);
    };

  ```  

  📌 **forEach()**  
  - forEach() 메서드는 배열의 각 요소를 순회하며 콜백 함수를 실행.  
  - breack나 continue를 사용할 수 없다.  

  ```javascript

    const arr = [1, 2, 3];
    
    arr.forEach((num) => console.log(num));

  ``` 

  📌 **map(), filter(), reduce() (배열 메서드 활용)**   
  - **map():** 배열의 각 요소를 반환하여 새로운 배열 생성.  
  - **filter():** 조건을 만족하는 요소만 필터링.  
  - **reduce():** 배열을 하나의 값으로 축약.  

  ```javascript

    const numbers = [1, 2, 3, 4, 5];
    
    // map()
    const doubled = numbers.map(num => num * 2);
    console.log(doubled); // [2, 4, 6, 8, 10]

    // filter()
    const evens = numbers.filter(num => num % 2 === 0);
    console.log(evens); // [2, 4]

    // reduce()
    const sum = number.reduce((acc, num) => acc + num, 0)
    console.log(sum); // 15

  ```  

  📌 **for await...of (비동기 반복문)**    
  - async 함수 내에서 await을 사용할 수 있는 반목문.  
  - Promise를 포함한 비동기(iterable) 객체를 순회할 때 유용.  
  
  ```javascript

    async function fetchData() {
      const urls = ['url1', 'url2', 'url3'];
      for await (const url of urls.map(fetch)) {
        console.log(url);
      }
    }
    fetchData();

  ```  

  ### 배열 관련 반복 메서드  

  📌 **some()**  
  - 배열 요소 중 하나라도 조건을 만족하면 true를 반환하고 반복을 중단한다.  
  - 조건을 만족하는 요소가 있으면 break와 유사한 효과.  

  ```javascript

    const numbers = [1, 2, 3, 4, 5];
    const hasEven = numbers.some(num => num % 2 === 0);
    console.log(hasEven); // true (2가 있기 때문)

  ```

  📌 **every()**  
  - 배열의 모든 요소가 조건을 만족하면 true를 반환.  
  - 하나라도 조건을 만족하지 않으면 false를 반환.  

  ```javascript

    const numbers = [2, 4, 6, 8];
    const allEven = numbers.every(num => num % 2 === 0);
    console.log(allEven); // true (모든 숫자가 짝수)

  ```  

  📌 **find()**  
  - 배열에서 조건을 만족하는 첫 번째 요소를 반환.  
  - 만족하는 요소가 없으면 unfined 반환.  

  ```javascript

    const numbers = [10, 20, 30, 40];
    const found = numbers.find(num => num > 25);
    console.log(found); // 30 (첫 번째로 조건을 만족하는 값)

  ```       
