import React from 'react'
import TodoEle from "./TodoEle";
export default function todos(props){
  return (
    <div className='container'>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todo_list.length===0?"No Todos to Display":props.todo_list.map((e)=>{
        return(<TodoEle todo_list_re={e} todo_list={props.todo_list} key={e.sno} onDelete={props.onDelete}/>
        );
      })}
      
    </div> 
  );
}
