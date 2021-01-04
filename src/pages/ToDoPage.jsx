import './ToDoPage.scss';

const ToDoPage = () => {



    return(
        <div className="p-todo">
            <h1>Todos</h1>
            <input type="text" placeholder="What's next?"/>
            <div className="list">

            </div>
            <span>x items left</span>
            <ul>
                <li>All</li>
                <li>Active</li>
                <li>Complited</li>
            </ul>
        </div>
    )
}

export default ToDoPage;