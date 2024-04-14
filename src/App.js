
import { useState } from 'react';
import './App.css';

function App() {
  const [todo, SetTodo] =useState([]);

 
  return (
    <>
      <div className="App">
      <div className='main-div'> 
        <div className='input-field'>
          <input  className="input-todo" type='text'
          value= {todo}
        placeholder='Add Your ToDos' id='todos' name='todos'/>
          <button className='add-btn' >ADD</button>
        </div>
        <h3> Your ToDos </h3>
        <div className='todos'>
        <div> <h4>this is a task 1</h4> </div>
        <div> 
        <button className='add-btn'>
Edit
        </button>
        <button className='add-btn'> Delete</button></div>
          </div>
           </div>

        
      
      </div>
    </>
  );
}

export default App;
