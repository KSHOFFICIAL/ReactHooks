# ReactHooks

useReducer.js
다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 훅
기본 형태
function reducer(state, action) {
  return {...};
}
const [state, dispatch] = useReducer(reducer, { value : 0 });
-> useReducer를 통해 Input State를 관리하는 코드를 짧고 깔끔하게 유지 가능
