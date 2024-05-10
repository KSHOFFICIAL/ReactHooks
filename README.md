# ReactHooks

### Reducer.js<br>
useReducer는 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 훅<br>
기본 형태 <br>
function reducer(state, action) {<br>
  return {...};<br>
}<br>
const [state, dispatch] = useReducer(reducer, { value : 0 });<br>
-> useReducer를 통해 Input State를 관리하는 코드를 짧고 깔끔하게 유지 가능<br>
<br><br>

### memo.js<br>
useMemo는 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있는 훅, <br>
(렌더링에 관여하지 않는 연산 등을 수행시켜 최적화가 가능)<br>
기본 형태 <br>
const name = useMemo(func);

### callback.js<br>
useCallback은 주로 렌더링 성능 최적화에서 사용 만들어 놓은 함수를 재사용할 수 있다.

### Ref.js<br>
함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 지원 및 렌더링과 상관없는 로컬 변수를 사용할 수 있다.

