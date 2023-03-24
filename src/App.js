import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Todos from "./components/Todos";
import TodoEle from "./components/TodoEle";
import React, {useState,useEffect} from 'react';
import AddTodo from './components/AddTodo';
function App() {

  let initTodo;
  if (localStorage.getItem("todo_list") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo_list"));
  }
  const onDelete = (todo_list,todo_list_re) => {
    console.log("Deleted",todo_list,todo_list_re);
    setTodo_List(
      todo_list.filter((i)=> {
        return i !== todo_list_re;
      })
      
    );
    localStorage.setItem("todo_list", JSON.stringify(todo_list));
  }
  const addTodo = (title,desc) =>{
    const myTodo={
      sno:todo_list.length===0?1:Number(todo_list.length+1),
      title:title,
      desc:desc,
    };
    setTodo_List([...todo_list,myTodo]);
  }
  const[todo_list,setTodo_List] =useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo_list", JSON.stringify(todo_list));
  }, [todo_list])
  
  return (
    <>
    <Header title="Todo List"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todo_list={todo_list} onDelete={onDelete}>
      <TodoEle/>
    </Todos>
    </>
  );
}

export default App;
