import { useState } from 'react'

import './App.css'

function App() {
  const [isStudent,setIsStudent] = useState(false);

  const [count,setCount] = useState(0);

  function Input ({type,placeholder}){
    return (
      <div>
        <input type={type} placeholder={placeholder}/>
      </div>
    )
  }

  function updateCount(){
    //setCount(count+1);
    //setCount(count+1);
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);//[cb,cb]
    console.log(count); //1
  }
  return (
    <>
    <form>
      <div>
      <Input type='text' placeholder='Enter your name' />
        <br/>
        <input type='checkbox' id='student' name='student' value={isStudent}
          onChange={()=> setIsStudent(!isStudent)}
        />
        <label htmlFor='student'>Are you a student</label>
        {isStudent ? <Input type='text' placeholder='Enter your school name' key="school"/>
         : <Input type='text' placeholder='Enter your compmay name ' key="company"/> } 
      </div>
      
      
    </form>
    <div>
        <h1>Incremented value : {count}</h1>
        <br/>
        <button onClick={updateCount} >Increment</button>
      </div>
     
    </>
  )
}

export default App
