import React, { useState } from 'react';
import './App.css';
import ToDoList from './componant/ToDoList';

function App() {
  const[item, setItem] = useState('');
  const[list,setList]=useState([])
  
  const itemEvent=(e)=>{
    setItem(e.target.value)
  }

  const listofItems=()=>{
    setList((preVal)=>{
      return [...preVal, item];
    })
     setItem('')
  }

  const deleteItem = (id) => {
    // console.log("deleted...");
    setList((preVal)=>{
      return preVal.filter((arr,index)=>{
        return index !==id
      })
    })
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Items"
            value={item}
            onChange={itemEvent}
          ></input>
          <button onClick={listofItems}>+</button>

          <ol>
            {list.map((value,index) => {
             return <ToDoList key={index} id={index} text={value} onSelect={deleteItem} />;
              
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
