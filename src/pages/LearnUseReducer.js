import { useReducer } from "react";

//useReducer 
//1. Init state:0
//2. Action :Up(count +1),Down(count -1)
//3. Reducer
//4. Depatch

const initState = 0

const UP_ACTION = 'up'
const DOWN_ACTION = "down"

const reducer = (state, action) => {
    switch (action) {
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid action')
    }
}

const LearnUseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState)

    return <div>
        <h1>LearnUseReducer</h1>
        <h1>{count}</h1>
        <button onClick={() => dispatch(UP_ACTION)}>up</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>down</button>
    </div>;
};

export default LearnUseReducer;