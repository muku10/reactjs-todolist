import { useState } from "react"

export default function Todoinput(props) {
    const{handleAddTodos, todovalue,setTodoValue} = props
    // const[todovalue, setTodoValue]= useState('')
  return (
    <header>
    <input value={todovalue} onChange={(e)=>
        {
            setTodoValue(e.target.value)
        }
    } placeholder='Enter todo.........'/>
    <button onClick={()=>{
        handleAddTodos(todovalue)
        setTodoValue('')
    }}> Add</button>
    </header>
  )
}
