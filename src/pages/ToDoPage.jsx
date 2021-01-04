import { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row, ToggleButtonGroup } from 'react-bootstrap';
import './ToDoPage.css';
import TaskModel from "../model/TaskModel";
import isEnterPressed from "../utils/utils";

const ToDoPage = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
    const [filterType, setFilterType] = useState([]);

    const addTask = (event) => {
        if (isEnterPressed(event) && event.target.value){
        const newTask = new TaskModel(event.target.value);
        const newTasks = tasks.concat(newTask);
        localStorage.tasks = JSON.stringify(newTasks);
        setTasks(newTasks);
        setTaskText('');
        }
    }


    return (
        <div className="p-todo">
            <Container>
                <Row xs={1} className="justify-center">
                    <Col className="center mt-5 mb-3">
                        <h1>Todos</h1>
                    </Col>
                    <Col className="center mb-4">
                        <input value={taskText} className="text-center" type="text" placeholder="What's next?"
                            onChange={e => setTaskText(e.target.value)} onKeyPress={addTask} />
                    </Col>
                    <Col className="center">
                        <div className="list">
                            {/* {list} */}
                        </div>
                    </Col>
                    <Col className="center">
                        <div className="between">
                            <span>x items left</span>
                            <ToggleButtonGroup name="select-filter">
                                <Button className="m-1" variant="light">All</Button>
                                <Button className="m-1" variant="light">Active</Button>
                                <Button className="m-1" variant="light">Complited</Button>
                            </ToggleButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ToDoPage;