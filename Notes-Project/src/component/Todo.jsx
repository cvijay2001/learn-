import Action_btn from "./Action_btn";
import styles from "../model_css/Todo.module.css";
import { useState, useRef } from "react";


const Todo = ({todovalue,todoset})=>{

  const todoname = useRef('');
  const todo_date = useRef('');


  let dataToBeAdded = ()=>{


    let new_obj = {
      todo: todoname.current.value,
      date: todo_date.current.value.toString() // Assuming tododate is a Date object and you want to convert it to string
  }
  todoname.current.value = ""
  todo_date.current.value = ""
    
    const newTodoValue = [
      ...todovalue,new_obj
      
    ]

    // console.log(todovalue)
    todoset(newTodoValue)
    // todonameset = todonewvalue
    // tododateset = tododate 

   
  }

  return (
    <>
      <div className={`container ${styles['cntr-todo']}`} >
        <form className="row" onSubmit={(e)=>{
          console.log(e)
          e.preventDefault()
          dataToBeAdded()
        }}>
          
            <div className="col-sm-2">
              <p >ID</p>
          </div>
          <div className="col-sm-5">
            <input type="text" id="todovalue" placeholder="Enter ToDO Here" ref={todoname}/>
          </div>
          <div className="col-sm-3">
            <input type="date" name="todo-date" id="todo-date"  ref={todo_date} />
          </div>
          <div className="col-sm-2"> 
            <Action_btn  action={"success"} btnContent={"add"} ></Action_btn>
          </div>
        </form>
      </div>
    </>
  )
}

export default Todo;