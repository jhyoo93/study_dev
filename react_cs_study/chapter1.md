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

  📌 **바벨(Babel)이란?**  
  **바벨(Babel)**은 최신 JavaScript(ES6+, JSX 등)를 **구버전 JavaScript(ES5)**로 변환해주는 **자바스크립트 컴파일러**이다.  
  즉, 바벨을 사용하면 최신 문법을 지원하지 않는 브라우저에서도 최신 JavaScript 코드를 실행할 수 있다.  

  - 최신 JavaScript를 지원하지 않는 구형 브라우저 IE, 구버전 Chrome등이 있다.  
  - 최신 JavaScript문법 -> ES5코드로 변환하여 모든 브라우저에서 실행 가능하도록 한다.  

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
  생명주기는 컴포넌트가 생성, 업데이트, 소멸되는 과정을 말한다. 이 생명주기 메서드를 활용하면 특정 시점에서 데이터를   불러오거나, 성능을 최적화하거나, 정리(clean-up) 작업을 할 수 있으며,   
  클래스형 컴포넌트의 생명주기는 Mounting(마운트), Updating(업데이트), Unmounting(언마운트) 세단계로 나뉜다.  

  <img src="react_cs_study\assets\class_render.png" />   
 

  📌 **Mounting (생성)**  
  마운트 과정에서는 컴포넌트가 생성되고, DOM에 삽입되는 과정이 진행된다.  
  주로 초기호 작업(state 설정, API 호출, 이벤트 리스너 등록 등)이 이루어 지는 단계이다.  

  **실행순서**  
  1️⃣ constructor()  
  2️⃣ static getDerivedStateFromProps()  
  3️⃣ render()  
  4️⃣ componentDidMount()  

  1. **constructor(props)**  
  - super(props)를 호출해야 this.props를 사용할 수 있음.  
  - this.state를 초기화하는 용도로 사용됨.  
  - 이벤트 핸들러를 this.method = this.method.bind(this)로 바인딩 할 때 사용됨.  

  ```javaScript
    constructor(props) {
      super(props); 
      console.log('constructor: 초기 상태 설정');
      this.state = { count: 0 };
    }

  ```    
  2. **static getDerivedStateFromProps()**  
  - props를 기반으로 state를 설정할 필요가 있을 때 사용됨.  
  - 순수 함수(side effect를 발생시키지 않음)이며, this를 사용할 수 없음.  
  - null을 반환하면 state를 변경하지 않음.  

  ```javaScript
    static getDerivedStateFromProps(nextProps, prevState) {
      console.log('getDerivedStateFromProps: props 변화 감지');
      if (nextProps.value !== prevState.value) {
        return { value: nextProps.value };  // 새로운 props가 들어오면 state 업데이트
      }
      return null;
    }
  ```     
  3. **render()**  
  - 순수 함수(state와 props에 따라 UI를 반환).  
  - JSX를 반환하여 화면에 나타냄.  
  - 메서드 내부에서는 setState()를 호출하면 안됨(무한루프)  

  ```javaScript
    render() {
      console.log('render: 화면을 렌더링 중');
      return <h1>Count: {this.state.count}</h1>;
    }
  ```  
  4. **componentDidMount()**  
  - API호출, 이벤트 리스너 등록, 타이머 설정 등에 사용됨.  
  - setState()를 호출하면 다시 렌더링됨.  

  ```javaScript
    componentDidMount() {
      console.log('componentDidMount: 컴포넌트가 화면에 나타남');
      setTimeout(() => {
        this.setState({ count: 10 });
      }, 2000);  // 2초 후 count 값 변경
    }
  ```    
  ---  

  📌 **Update (변경)**  
  컴포넌트의 state나 props가 변경되면 업데이트 과정이 발생한다. 이때 렌더링 여부를 결정하고, 이전 상태를 저장하고,  
  업데이트 완료 후 후속 작업을 수행할 수 있다.  

  **실행순서**    
  1️⃣ static getDerivedStateFromProps()  
  2️⃣ shouldComponentUpdate()  
  3️⃣ render()   
  4️⃣ getSnapshotBeforeUpdate()  
  5️⃣ componentDidUpdate()  

  1. **shouldComponentUpdate(nextProps, nextState)**  
  - true를 반환하면 다시 렌더링, false를 반환하면 렌더링 방지.  
  - 성능 최적화 시 사용됨 (불필요한 렌더링 방지).  

  ```javaScript
    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate: 렌더링 여부 결정');
      return nextState.count % 2 === 0; // count가 짝수일 때만 렌더링
    }
  ```  

  2. **getSnapshotBeforeUpdate(prevProps, prevState)**  
  - 스크롤 위치나 특정 값이 변경되기 전에 저장할 수 있음.  
  - 반환값은 componentDidUpdate()의 snapshot으로 전달됨.   

  ```javaScript
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('getSnapshotBeforeUpdate: 업데이트 직전 스냅샷 저장');
      return prevState.count; // 이전 count 값을 반환
    }
  ```  

  3. **componentDidUpdate(prevProps, prevState, snapshot)**   
  - API호출, 애니메이션 적용, DOM 변경 등의 작업 가능.  

  ```javaScript
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log(`componentDidUpdate: 업데이트 완료 (이전 count: ${snapshot})`);
    }
  ```  
  ---

  📌 **Unmount (제거)**  
  - 컴포넌트가 제거되기 전에 실행되는 메서드  
  - 이벤트 리스너 제거, 타이머 클리어, API 요청 취소 등에 사용됨.  

  ```javaScript
    componentWillUnmount() {
      console.log('componentWillUnmount: 컴포넌트가 제거됨');
      clearInterval(this.timer); // 타이머 정리
    }
  ```    


---

# 함수형 컴포넌트를 사용하는 이유  
  