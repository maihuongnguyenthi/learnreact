import { useState } from "react";
import TestMemo from "./TestMemo";
//Dùng để kiểm tra các component con có giá trị prop 
//thay đổi không nếu không thay đổi không cần re-render lại

const LearnMemo = () => {
    const [count, setCount] = useState(1)
    const [count2, setCount2] = useState(1)

    return <div>
        <h1>Learn memo</h1>
        <TestMemo count={count} />
        <h1>{count}</h1>
        <h1>{count2}</h1>
        <button onClick={() => setCount(count + 1)}>Count 1</button>
        <button onClick={() => setCount2(count2 + 1)}>Count 2</button>
    </div>;
};

export default LearnMemo;