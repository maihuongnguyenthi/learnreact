import { memo } from "react";

const TestMemo = ({ count, onCount }) => {
    console.log('re-render')
    return <div>
        <h1>Test Memo-{count}</h1>
        <button onClick={onCount}>Count 1</button>
    </div>;
};

export default memo(TestMemo);