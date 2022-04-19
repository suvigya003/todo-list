
import './App.css';
//import following hook to delete todos for react 
import React, { useState,useEffect } from 'react';
// import all below pages for respective sections
import Header from './MyComponents/header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/todos';
// import Todo from './MyComponents/todoitem';

import AddTodo from './MyComponents/addTodo';
import About from './MyComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (tilt) => {
    console.log("I'm on delete of todo", tilt);
    setTodos(todos.filter((e) => {
      return e !== tilt;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo = (title, desc) => {
    console.log("i'm adding this todo", title, desc)
    // let sno;
    // if (todos.length === 0) sno = 1;
    // else {
    //   // let sno = todos[todos.length - 1].sno + 1;
    // }
    
      const myTodo = {
        //sno: sno,
        title: title,
        desc:desc
      }
       setTodos([...todos,myTodo]);
    //   console.log(myTodo);
    }
    const [todos, setTodos] = useState([initTodo]);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])
  
    return (
      <>
        <Router>
          {/* following sections are created using tags */}
          <Header title="Todos List" />
          <Switch>
            <Route exact path="/" render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>)
            }}>
            </Route>
            <Route exact path="/about" render={() => {
              return(
              <>
                <About />
              </>
              )
            }}>
              
              {/* <About /> */}
            </Route>
          </Switch>


       
          <Footer />
        </Router>
      </>
        
    );
  };

export default App;
