import React from 'react'
export default function TodoEle({todo_list_re,onDelete,todo_list}) {
  return (
    <div className='text-center' >
      <h3>{todo_list_re.title}</h3>
      <p>{todo_list_re.desc}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo_list,todo_list_re)}}>Delete</button>
      <hr />
    </div>
  )
}