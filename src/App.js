import { useState } from "react";

const order=[100,200,300]

function App() {
  const [counter,setCouter]= useState(()=>{
    const totalOrder=order.reduce((total,cur)=> total + cur)
    return totalOrder;
  })

  const [info, setInfo]= useState({
    name:"Nguyen Thi Mai huong",
    age:20,
    lop:"DHCNTT15k"
  })

  const handleCounter = ()=>{
    setCouter(prevState=>prevState+1);
    setCouter(prevState=>prevState+1);
  }

  const handleUpdate = ()=>{
    setInfo({
      ...info,
      love:"cat"
    });
  }

  const handleUpdate2 = ()=>{
    setInfo(prev=>{
      //...prev
      return {
        ...prev,
        love:"cat2"
      }
    });
  }

  return (
    <div style={{padding:20}} className="App">
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Click</button>

      <h1>{JSON.stringify(info)}</h1>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleUpdate2}>Update2</button>
    </div>
  );
}

export default App;
