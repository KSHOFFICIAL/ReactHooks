const inputEl = useRef(null);
inputEl.current.focus();

//local 변수 사용
const localVar = useRef(1);
const etNumber = (number) => {
    localVar.current = number;
}