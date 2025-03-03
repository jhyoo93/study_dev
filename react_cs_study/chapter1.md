# JSX란?
  JSX(JavaScript XML)는 React에서 UI를 선언적으로 작성할 수 있도록 돕는 **문법 확장(Syntax Extension)**이다.    
  JavaScript코드에서 HTML 처럼 보이지만 JavaScript의 기능을 포함할 수 있는 특별한 문법이다 JSX는 React.createElement() 호출로    
  변환되는데, 이를 통해 React의 **가상 DOM(Virtual DOM)**을 만들고 업데이트하는 과정이 간소화된다.    

  📌 **가상 DOM(Virtual DOM)이란?**   
  가상 DOM은 React에서 사용하는 성능 최적화 기업으로, 실제 DOM을 조작하는 대신 메모리에 가상의 DOM을 만들어 변경 사항을 비교한 후,  
  최소한의 변경만 실제 DOM에 적용하는 방식이다.  

  1️⃣ 브라우저의 DOM은 무겁다
  - DOM(Document Object Model)은 HTML 요소를 트리 구조로 표현하는 방식이다.  
  - 브라우저가 DOM을 변경하면 화면을 다시 그려야 하기때문에 성능이 저하될 수 있다.  

  2️⃣ 가상 DOM(Virtual DOM)은 메모리에 저장된 가짜 DOM이다  
  - React는 실제 DOM을 직접 변경하지 않고 먼저 메모리에 가상의 DOM을 만든다.  
  - JavaScript 객체 형태로 표현되며, 빠르게 변경 사항을 처리할 수 있다.  

  3️⃣ 변경 사항을 비교하는 ‘Diffing’ 과정이 있다  
  - 새롭게 변경된 가상 DOM과 기존 가상 DOM을 비교하여 달라진 부분을 찾는다.  

  4️⃣ 최소한의 변경만 실제 DOM에 적용한다
  - 차이점을 찾은 후, 필요한 부분만 실제 DOM에 반영하여 불필요한 렌더링을 줄여 성능을 최적화한다.  

  📌 **React Fiber란?**   
  React Fiber는 React 16부터 도입된 새로운 조정(Reconciliation) 알고리즘으로, UI 엄데이트를 더 빠르고 부드럽게 수행하기 위한 구조이다.  

  ✅ React Fiber의 핵심 개념

  1️⃣ 기존 React의 문제점  
  - 기존 React는 재귀적으로 DOM을 업데이트했기 때문데, 업데이트가 오래 걸릴 경우 UI가 멈추는 문제가 있다.  
  - 한 번 렌더링을 시작하면 중간에 멈추거나 우선순위를 조정할 수 없다.  

  2️⃣ React Fiber의 등장  
  - Fiber는 작업을 작은 단위로 나누고, 우선순위를 정해서 실행하는 방식을 도입했다.  
  - 이를 통해 긴 작업을 나누고, 중요도가 높은 작업을 먼저 실행 할 수 있게 하여 UI가 부드러워 진다.  

  ✅ React Fiber의 주요 특징  
  - 비동기 렌더링 지원: 긴 작업을 나누어 실행하고, 중간에 멈췄다가 다시 실행할 수 있다.  
  - 작업 우선순위 조정: 긴급한 UI 업데이트를 먼저 처리한다.  
  - 더 빠른 업데이트: 변경된 부분만 효율적으로 업데이트 한다.  
  - 애니메이션 최적화: UI를 더 부드럽게 렌더링이 가능하다.  

---

# 클래스형 컴포넌트 생명주기
  클래스형 컴포넌트의 생명주기는 Mounting(마운트), Updating(업데이트), Unmounting(언마운트) 세단계로 나뉜다.  

  📌 **Mounting (생성)**  
  ```JavaScript
    import React, { Component } from 'react';

    class LifecycleExample extends Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('constructor');
      }

      static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null; // 새로운 state를 반환하거나 null을 반환 가능
      }

      componentDidMount() {
        console.log('componentDidMount');
      }

      render() {
        console.log('render');
        return <h1>Count: {this.state.count}</h1>;
      }
    }

    export default LifecycleExample;
  ```
  - **constructor():** 컴포넌트가 생성될때 실행됨. 상태(state) 초기화가능  
  - **static getDerivedStateFromProps(props, state):** props를 기반으로 state를 업데이트할 수 있음  
  - **componentDidMount():** 컴포넌트가 렌더링된 후 실행됨. API호출, 이벤트 리스너 등록 등에 사용  

  📌 **Updating (업데이트)**

  ```JavaScript
    import React, { Component } from 'react';

    class LifecycleExample extends Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
        console.log('constructor');
      }

      static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null; // 새로운 state를 반환하거나 null을 반환 가능
      }

      componentDidMount() {
        console.log('componentDidMount');
      }

      render() {
        console.log('render');
        return <h1>Count: {this.state.count}</h1>;
      }
    }

    export default LifecycleExample;

  ```
  - **shouldComponentUpdate(nextProps, nextState):** 성능 최적화를 위해 렌더링 여부 결정(true/false)반환  
  - **render():** UI를 갱신  
  - **getSnapshotBeforeUpdate(prevProps, prevState):** DOM이 변경되기 직전의 상태를 캡처  
  - **componentDidUpdate(prevProps, prevState, snapshot):** 컴포넌트가 업데이트된 후 실행됨  

  📌 **Unmounting(제거)**  

  ```JavaScript
    class LifecycleUnmountExample extends Component {
      componentWillUnmount() {
        console.log('componentWillUnmount');
      }

      render() {
        return <h1>Unmount Example</h1>;
      }
    }
    
  ```  
  - **componentWillUnmount():** 컴포넌트가 제거되기 직전에 실행됨 이벤트 리스너 해제, 타이머 정리 등에 사용  

---

# 함수형 컴포넌트 생명주기  
  함수형 컴포넌트는 uesEffect 훅을 사용하여 생명주기를 제어한다.  

  📌 **Mounting (생성)** 

  ```JavaScript
    import React, { uesEffect } from 'react';

    const FunctionComponent = () => {
      useEffect(() => {
        console.log('컴포넌트가 마운트됨');
      }, []);

      return <h1>Function Component</h1>;
    };

    export default FunctionComponent;  
  ```  
  - **useEffect(() => {...}, []):** 빈배열 []을 넣으면 마운트 시 한 번 실행됨  

  📌 **Updating (업데이트)**   

  ```JavaScript
    import React, { useState, useEffect } from 'react';

    const FunctionUpdateComponent = () => {
      const [count, setCount] = useState(0);

      useEffect(() => {
        console.log(`Count가 변경됨: ${count}`);
      }, [count]); // count 값이 바뀔 때만 실행됨

      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
      );
    };

    export default FunctionUpdateComponent;

  ```  
  - **특정 값이 변경될 때 실행:** useEffect(() => {...}, [state])  

  📌 **Unmounting (제거)**  

  ```JavaScript
    const FunctionUnmountComponent = () => {
      useEffect(() => {
        console.log('컴포넌트가 마운트됨');

        return () => {
          console.log('컴포넌트가 언마운트됨'); // 정리(clean-up) 로직 실행
        };
      }, []);

      return <h1>Unmount Example</h1>;
    };

    export default FunctionUnmountComponent;

  ```   
  - **useEffect의 return문을 사용하여 정리(clean-up) 로직 실행**  

---

# 함수형 컴포넌트를 사용하는 이유  
  React에서 함수형 컴포넌트가 주로 사용되는 이유는 더간결하고, 성능이 좋으며, 유지보수가 쉽기 때문에 사용된다.  

  1️⃣ 코드가 더 간결하고 읽기 쉽다  
  - 클래스형 컴포넌트에서는 this를 사용해야 해서 코드가 복잡해진다  
  - 함수형 컴포넌트는 useState, useEffect등의 훅을 사용하여 더 직관적 이다  

  ```JavaScript
    // 클래스형 컴포넌트
    class CounterClass extends React.Component {
      constructor(props) {
        super(props);
        this.state = { count: 0 };
      }

      render() {
        return (
          <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>
              Increase
            </button>
          </div>
        );
      }
    }

    // 함수형 컴포넌트 (더 간결함)
    import { useState } from "react";

    const CounterFunction = () => {
      const [count, setCount] = useState(0);

      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
      );
    };

  ```  

  2️⃣ 성능이 더 좋음 (가벼운 컴포넌트)  
  - 클래스형 컴포넌트: 렌더링될 때마다 this를 참조하며 불필요한 복잡성이 증가한다  
  - 함수형 컴포넌트: 불필요한 인스턴스 없이 빠르게 렌더링 된다  

  3️⃣ 훅(Hooks)을 사용한 기능 제공  
  - 클래스형 컴포넌트에서는 생명주기 메서드를 사용해야 하지만, 함수형 컴포넌트에서는 useEffect, useState등의  
    **훅(Hooks)**을 사용하여 더 유연한 기능을 만들 수 있으며, useEffect하나로 생명주기 관리가 가능하다.  

  ```JavaScript
    import { useState, useEffect } from "react";

    const Example = () => {
      const [count, setCount] = useState(0);

      useEffect(() => {
        console.log("마운트 or 업데이트됨");

        return () => {
          console.log("언마운트됨 (클린업)");
        };
      }, [count]); // count가 변경될 때마다 실행됨

      return (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
      );
    };

  ```    



