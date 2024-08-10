import { useState,useEffect } from "react"
import TodoInput from "./components/Todoinput"
import Todolist from "./components/Todolist"


function App() {
//   let todos=[
//     'Go to the gym',
//     'Eat more fruits and vege',
//     'Pick yo the kids from the school'
// ]
  const[todos,setTodos] = useState([

  ])
  const [todovalue, setTodoValue]= useState('')
  function persistData(){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))
  }
  function handleAddTodos(newTodo){
    const newTodoList =[...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleDeleteTodo(index){
    const newTodoList= todos.filter((todo,todoIndex)=>{
      return todoIndex !=index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  
  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos= localStorage.getItem('todos')
      if(!localTodos){
       return 
      }
      localTodos=JSON.parse(localTodos).todos
      setTodos(localTodos)
    
  },[])
  return (
    <>
      <>
        <TodoInput todovalue={todovalue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
        <Todolist handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
      </>
    </>
  )
}

export default App
