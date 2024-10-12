import { memo } from "react";

const TestMemo = ({ count }) => {
    console.log('re-render')
    return <div>
        <h1>Test Memo-{count}</h1>
    </div>;
};

export default memo(TestMemo);