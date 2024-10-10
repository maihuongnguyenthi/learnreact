import { useState } from "react";

const order=[100,200,300]

function App() {
  const [counter,setCouter]= useState(()=>{
    const totalOrder=order.reduce((total,cur)=> total + cur)
    return totalOrder;
  })

  const handleCounter = ()=>{
    setCouter(prevState=>prevState+1);
    setCouter(prevState=>prevState+1);
  }

  return (
    <div style={{padding:20}} className="App">
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Click</button>
    </div>
  );
}

export default App;
