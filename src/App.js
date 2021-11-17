import React, {useState, useEffect} from 'react';
import Header from './componentes/Header';
import Todo from "./componentes/Todo";
import './index.css';

function App() {
  //STATE
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    mostrarTodos();
  },[]);

  const obtenerLosTodos = async () => {
    let todos = await fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json()); 
    return todos;
  };

  const mostrarTodos = async () => {
    let todos = await obtenerLosTodos();
    setTodoList([...todos]);
  };



  const mostrarSoloLosPendientes = async () => {
    let todos = await obtenerLosTodos();
    setTodoList([...todos.filter(todo => !todo.completed)]);
  };

  const mostrarSoloLosAcompletados = async () => {
    let todos = await obtenerLosTodos();
    setTodoList([...todos.filter(todo => todo.completed)]);
  };

  const cambiarElEstadoDelTodo = (id) => {
    setTodoList([...todoList.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)]);
  };
  //FUNCIONES

  return (
    <div className="App">
      <Header 
        cantidad={todoList.length}
        className="Header" 
        mostrarTodos={mostrarTodos}
        mostrarSoloLosPendientes={mostrarSoloLosPendientes}
        mostrarSoloLosAcompletados={mostrarSoloLosAcompletados}
        />

      <div className="todoContainer">
      { 
        todoList?.map(todo =>(
            <Todo
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
                id={todo.id}
                cambiarElEstadoDelTodo={cambiarElEstadoDelTodo}
            />
        ))
      }
      </div>


    </div>
  );
}

export default App;
