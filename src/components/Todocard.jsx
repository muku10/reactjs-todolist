import React from 'react'

export default function Todocard(props) {
    const{children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li  className='todoItem' >
        {children}
        <div className='actionContainer'>
    <button>
    <i className="fa-regular fa-pen-to-square"></i>
    </button>
    {/* <i className="fa-solid fa-trash"></i> */}
    <button onClick={()=>{
        handleDeleteTodo(index)
    }}>
    <i className="fa-regular fa-trash-can"></i>
    </button>
    </div>
    </li>
  )
}
