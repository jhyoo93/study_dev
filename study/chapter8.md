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

  📌 **findIndex()**  
  - find()와 비슷하지만, 요소가 아니라 인덱스를 반환함.  
  - 조건을 만족하는 요소가 없으면 -1 반환.  

  ```javascript

    const numbers = [10, 20, 30, 40];
    const index = numbers.findIndex(num => num > 25);
    console.log(index); // 2 (30의 인덱스)

  ```  

  📌 **flatMap()**    
  - 각 요소를 반환한 후 1차원 배열로 평탄화(flatten)해서 반환.  
  - map().flat()을 합친 기능.  

  ```javascript

    const arr = [1, 2, 3];
    const result = arr.flatMap(num => [num, num * 2]);
    console.log(result); // [1, 2, 2, 4, 3, 6]

  ```   

  📌 **reduceRight()**    
  - reduce()와 비슷하지만 오른쪽에서 왼쪽으로 순회함.  
  
  ```javascript

    const arr = [1, 2, 3, 4];
    const result = arr.reduceRight((acc, num) => acc + num, 0);
    console.log(result); // 10 (4 + 3 + 2 + 1)

  ``` 

# JSON(JavaScript Object Notation)  

  📌 **특징**  
  - 경량의 데이터 포맷으로 텍스트 기반(문자열)이다.  
  - 구조화된 데이터를 직렬화(serialize)하여 네트워크에서 전송할 때 많이 사용됨.  
  - JavaScript의 객체 표기법과 유사하며, 대부분의 프로그래밍 언어에서 쉽게 다룰수 있음.  

  📌 **데이터 이동 방식**  
  - 텍스트 기반 이동: 네트워크를 통해 문자열(String) 형태로 이동함.  
  - HTTP 요청/응답 본문(body)에 포함되어 API통신에서 주로 사용됨.  
  - 예를 들어, fetch()나 axios 같은 HTTP라이브러리를 통해 JSON을 송수신할 수 있음.  

  ```javascript

    {
      "name": "Alice",
      "age": 25,
      "city": "Seoul"
    }

  ```   
  📌 **이동 과정**  
  1. 데이터를 JSON형식으로 변환 (Serialize)  

  ```javascript

    const data = { name: "Alice", age: 25, city: "Seoul" };
    const jsonData = JSON.stringify(data); // 직렬화

  ```  
  2. 네트워크를 통해 전송   

  ```javascript

    fetch("https://api.example.com/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsonData
    });

  ```  
  3. 수신 측에서 JSON을 파싱하여 객체로 변환 (Deserialize)  

  ```javascript

    fetch("https://api.example.com/user")
      .then(res => res.json()) // JSON을 객체로 변환
      .then(data => console.log(data));

  ```  

  📌 **장점**   
  - 가벼운 데이터 형식(텍스트 기반, 바이너리보다 용량이 적음)     
  - 가독성이 좋고, 대부분의 언어에서 지원함 (JavaScript, Python, Java 등)    

  📌 **단점**    
  - 데이터의 타입을 명확히 표현하지 못함 (모든 데이터가 문자열로 전달됨)    
  - XML보다 유연성이 부족 (스키마 정의 없음)    

---   

# XML(Extensible Markup Language)