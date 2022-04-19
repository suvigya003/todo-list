import React from 'react'

export default function About() {
  return (
    <div className='container my-3'>
      <p>
        This is a Todo List application which enables users to maintain a checklist for their tasks.<br/> <br />
        The app is divided into two portions: <br />
        1) Add a TODO <br />
        2) Todo list <br /> <br />
        <h5>Add a TODO</h5>
        <br />
        This is the portion where user can add any task in the todo list. <b>TODO title </b> contains the title of task and <b>TODO description </b> allows user to add full description of the task. <br />
        Then by clicking on Add TODO button the task is added in the TODO list.
        <br />
        <br />
        <h5>Todo list</h5>
        <br />
        This is the list which shows all pending tasks which are to be completed. If all tasks are completed, then list is empty. 
      </p>
    </div>
  )
}
