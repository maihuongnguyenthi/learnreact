import { useState, useCallback } from "react";
import TestMemo from "./TestMemo";
//1.memo(HOC) :Dùng để kiểm tra các component con có giá trị prop 
//thay đổi không nếu không thay đổi không cần re-render lại
//2. useCallback() thường đc dùng kết hợp với memo để ghi nhớ các prop là các hàm tham chiếu(function)

const LearnMemo = () => {
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(1)

    const handleCount = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])
    return <div>
        <h1>Learn memo</h1>
        <TestMemo count={count} onCount={handleCount} />
        <h1>{count}</h1>
        <h1>{count2}</h1>
        {/* <button onClick={handleCount}>Count 1</button> */}
        <button onClick={() => setCount2(count2 + 1)}>Count 2</button>
    </div>;
};

export default LearnMemo;