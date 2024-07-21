import Action_btn from "./Action_btn"
import styles from "../model_css/Todo_data.module.css"

function Todo_data({ todovalue , todoset }) {

  let manupulateActionBtn = (indexToRemove) =>{
    console.log("Delete btn entedn")
   
    const updatedTodos = [...todovalue];

    // Check if indexToRemove is valid
    if (indexToRemove >= 0 && indexToRemove < updatedTodos.length) {
        // Use splice to remove the element at indexToRemove
        updatedTodos.splice(indexToRemove, 1);
        console.log(updatedTodos)
    } else {
        console.error(`Invalid index: ${indexToRemove}`);
    }
    todoset(updatedTodos)
  }
    // todoset(updatedTodos)


  //  console.log(todo_obj[0].todo)

  return (
    <>
      {
        todovalue.map((item, index) =>
        // {console.log(item.todo,item.date)}
        (
          <div className={`container ${styles['todo-item']}`}  key={index}>
            <div className="row">

              <div className="col-sm-2">
                <p >{index+1}</p>
              </div>

              <div className="col-sm-5">
                <p >{item.todo}</p>
              </div>
              <div className="col-sm-3">
                {item.date}
              </div>
              <div className="col-sm-2">
                <Action_btn action={'danger'}
                btnContent={'Delete'} 
                manupulateActionBtn={()=>{
                  manupulateActionBtn(index,'delete')
                }}>
                  
                </Action_btn>
                
              </div>
            </div>
          </div>)
        )
      }
    </>
  );

}

export default Todo_data;


//
// }