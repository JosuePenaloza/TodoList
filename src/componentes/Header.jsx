const Header = ({mostrarTodos,mostrarSoloLosPendientes,mostrarSoloLosAcompletados,cantidad}) => {
    return(
        <header>
            <h1 className="todolist">Todolist</h1>
            <div className="botonesNav">
                <button onClick={()=>{mostrarTodos()}}>Todos</button>
                <button onClick={()=> {mostrarSoloLosAcompletados()}}>Completados</button>
                <button onClick={()=> {mostrarSoloLosPendientes()}}>faltantes</button>
            </div>
        </header>
    )
};

export default Header;