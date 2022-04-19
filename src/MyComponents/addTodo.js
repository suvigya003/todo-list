
import React, { useState } from 'react';
// A of AddTodo should be capital
export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const[desc, setDesc] = useState("");
    // definition of submit function
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc)
            alert("title or description can't be blank")
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
       }
    }
  return (
      <div className='container'>
          <h3 className='text-center my-3'>
              Add a TODO
          </h3>
          <form onSubmit={submit}>
              {/* submit is a function called */}
              <div className="mb-3">
                  <label for="title" className="form-label">TODO title</label>
                  <input type="text" value={ title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title"/>
                     
              </div>
              <div className="mb-3">
                  <label for="desc" className="form-label">TODO description</label>
                  <input type="text" value={ desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
              </div>
             
              <button type="submit" className="btn btn-sm btn-success">Add TODO</button>
          </form>
    </div>
  )
}
