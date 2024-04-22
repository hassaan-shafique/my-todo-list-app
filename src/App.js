
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import './App.css';

function App() {
  
  const[inputVal,setInputVal] =useState("");
  const [todo, SetTodo] = useState([]);

  const HandleEdit =()=> {

  }

  const HandleDelete =()=> {
   
   
    
  }

  const HandleAdd = () => {
    if(inputVal !== ''){
      SetTodo([...todo, inputVal]);
      setInputVal('');
    }
    
    
  }
 
 
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
            <h2 className='todos-head'>Your Todos:</h2>

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
                          <input type="checkbox" />
                          {todo}
                          <div className='todo-btns'>
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
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
