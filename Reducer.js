// 기본 타입
function reducer(state, action) {
    return;
}
const {state, dispatch} = useReducer(reducer, {value : 0});

// input State
function inputRedcuer(state, action){
    return {
        ...state,
        [action.name] : action.value
    } // tag의 name 속성을 통해 접근
}

const {inputState, intputDispatch} = useReducer(reducer, {
    name : "",
    nickName : ""
})
const onChange = e => {
    dispatch(e.target.value);
}
/*
html example
<input name = "name" value = {name} onChange = {onChange} />
*/ 