const getAverage = numbers => {
    console.log('평균값 계산 함수');
    if(numbers.length === 0) return 0;
    const sum = number.reduce((a, b) => a + b);
    return sum / numbers.length;
}


const Average = () => {
    const {list, setList} = useState([]);
    const avg = useMemo(() => getAverage(list), [list]);
}
/*
html file
<div>
    <b> 평균 값 : </b> {getAverage(list)}
</div>
getAverage를 memo를 사용하지 않을 경우, 
내용이 수정될 때 마다 계속 실행되는 불필요한 경우 발생 방지
*/