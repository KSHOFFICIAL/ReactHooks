const onChange = useCallback(e => {
    setNumber(e.target.value);
}, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성 -> 컴포넌트 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 적절


