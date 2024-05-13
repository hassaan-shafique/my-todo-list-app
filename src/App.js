
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';





function App() {
  
  const[inputVal,setInputVal] =useState("");
  const [todo, SetTodo] = useState([]);

  

  const HandleEdit =()=> {


  }

  const HandleDelete =()=> {
  
    
  }
  
  const handleClearAll = ()=>{
    SetTodo([]);

  }

  const HandleAdd = () => {
     if(inputVal !== ''){
      SetTodo([...todo,  inputVal]);
      setInputVal('');
     }
    
    
  }
//  console.log(todo);
 
  return (
    <>
      <div className="App">
        <h1 className="head"> To-Do List </h1>
        <div className="main-div">
          <div className="input-field">
            <input
              className="input-todo"
              onChange={(e) => setInputVal(e.target.value)}
              value={inputVal}
              placeholder="Add Your ToDos"
              id="todos"
              name="todos"
            />
            <button className="add-btn" onClick={HandleAdd}>
              ADD
            </button>
          </div>
          <div>
            <h2 className="todos-head">Your Todos:</h2>

            <div
              className="todos"
              style={{ overflowY: "auto", maxHeight: "300px" }}
             >
              <div className="tasks">
                <div>
                  <ul>
                    {todo.map((todo, index) => {
                      return (
                        <li key={index}>
                          <div className="flew">
                            <div> {index + 1}</div>
                            <input
                              className="check"
                              type="checkbox"
                              checked={todo.completed}
                            />
                            <div className="inner-todo">{todo} </div>

                            <div className="edit-delete-btn">
                              <button
                                className="edit-add-btn"
                                onClick={HandleEdit}
                              >
                                Edit
                              </button>
                              <button
                                className="delete-add-btn"
                                onClick={HandleDelete}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>

            <button className="clear-all" onClick={handleClearAll}>
              Clear All Todos
            </button>
          </div>
          <div class="remaining-text">
            <div>
              {todo.filter((todo) => !todo.completed).length} Remaining Task
            </div>
            <div>
              {todo.filter((todo) => todo.completed).length} Task completed
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
