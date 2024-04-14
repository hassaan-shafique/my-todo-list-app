
import { useState } from 'react';
import './App.css';

function App() {
  const [todo, SetTodo] =useState("");

 
  return (
    <>
      <div className="App">
      <div className='main-div'> 
        <div className='input-field'>
          <input  className="input-todo" type='text' placeholder='Add Your ToDos' id='todos' name='todos'/>
          <button className='add-btn' >ADD</button>
        </div>
       </div>
       
      </div>
    </>
  );
}

export default App;
