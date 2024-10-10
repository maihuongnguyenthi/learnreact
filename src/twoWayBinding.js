import { useState } from "react";

//Gõ bên ngoài thì bên trong thay đổi, bên trong thay đổi thi bên ngoài thay đổi là tưo ưay bindings
//react la one ưay bindings (input vulue =...la tưo ưay bindings)

const gifts = ["cat", "bicycle", "lemon"]

const courses = [
  {
    id: 1,
    name: "Huong"
  },
  {
    id: 2,
    name: "Mai"
  },
  {
    id: 3,
    name: "Thi"
  }
]

function TwoWayBinding() {
  const [gift, setGift] = useState()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [check, setCheck] = useState(1)

  const [checked,setChecked]=useState([])

  const handleSetGift = () => {
    const index = Math.floor(Math.random() * gifts.length)

    setGift(gifts[index])
  }

  const handleSubmitForm = () => {
    console.log({
      name,
      email
    })
  }

  const handleSubmitFormRadio = () => {
    console.log({id:check});
  }

  const handleSubmitCheckbox =(id)=>{
    setChecked(prev=>{
      const isChecked= checked.includes(id)
      if(isChecked){
        return checked.filter(item=>item !== id)
      }else{
        return [...prev,id]
      }
    })
  }

  const handleSubmitFormCheckbox = () => {
    console.log({id:checked});
  }
  return (
    <div style={{ padding: 20 }} className="App">
      <h1>{gift || "You no gift"}</h1>
      <button onClick={handleSetGift}>Click</button>

      <h1>XU ly form</h1>
      <input
        value={name}
        onChange={e => { setName(e.target.value) }}
      />
      <input
        value={email}
        onChange={e => { setEmail(e.target.value) }}
      />
      <button onClick={handleSubmitForm}>Register</button>

      <div>
        <h1>Submit Form Radio</h1>
        {
          courses.map(course => (
            <div key={course.id}>
              <input
                checked={check === course.id}
                type="radio"
                onChange={()=>{setCheck(course.id)}}
              />
              {course.name}
            </div>
          ))
        }
        <button onClick={handleSubmitFormRadio}>Submit Radio</button>
      </div>

      <div>
        <h1>Submit Form Radio</h1>
        {
          courses.map(course => (
            <div key={course.id}>
              <input
                checked={checked.includes(course.id)}
                type="checkbox"
                onChange={()=>handleSubmitCheckbox(course.id)}
              />
              {course.name}
            </div>
          ))
        }
        <button onClick={handleSubmitFormCheckbox}>Submit Radio</button>
      </div>
    </div>
  );
}

export default TwoWayBinding;
