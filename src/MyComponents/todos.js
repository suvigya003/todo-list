import React from 'react'
// import todo from './todoitem'
import Todo from './todoitem'
export default function todos(props) {
  // Add styles like this
  let myStyle = {
    minheight: "70vh",
    margin:"40px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='text-center my-3'>Todo List</h3>
      {props.todos.length === 0 ? "All tasks finished :)" :
          props.todos.map((tilt) => {
            return (   <Todo tilt={tilt} key={tilt.sno} onDelete={props.onDelete} /> 
                
                )
          })
        }
      
    </div>
  )
}
