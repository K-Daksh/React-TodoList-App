import React, { useState } from 'react'
export default function AddTodo(props) {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or discription can't be blank!!");
        }else{
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <div className='container my-3 '>
      <form onSubmit={submit}>
        <h3 className='text-center'>Add a Todo</h3>
        <div className="mb-3">
    <label htmlFor="title" className="form-label">Add a Todo Task</label>
    <input type="text" value={title} onChange={(e)=>{
        setTitle(e.target.value)
    }} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo discription</label>
    <input type="text" value={desc} onChange={(e)=>{
        setDesc(e.target.value)
    }} className="form-control" id="desc" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
    </div>
  )
}
