import React from "react";  

//Styles


const Todo = ({completed, title, id,cambiarElEstadoDelTodo }) => {
    return(
        <div className="todoCar">
            <div className="todoTitle">
            <p>Numero:  {id}</p>
            <h2>{title}</h2>
            </div>

            <div className="todoActions">
                <button onClick={()=> {cambiarElEstadoDelTodo(id)}}
                 className={completed ? "Complete" : "Reset"}>
                {completed ? "Complete" : "Reset"}</button>
            </div>

        </div>
    )
}

export default Todo