import { useState } from 'react';
import { Button, ButtonGroup, Col, Container, Row, ToggleButtonGroup } from 'react-bootstrap';
import './ToDoPage.css';
import TaskModel from "../model/TaskModel";
import isEnterPressed from "../utils/utils";
import TaskItem from '../components/TaskItem';

const ToDoPage = () => {
    const [tasks, setTasks] = useState(localStorage.tasks ? JSON.parse(localStorage.tasks) : []);
    const [taskText, setTaskText] = useState('');
    const [filterType, setFilterType] = useState([]);

    const addTask = (event) => {
        if (isEnterPressed(event) && event.target.value) {
            const newTask = new TaskModel(event.target.value);
            const newTasks = tasks.concat(newTask);
            localStorage.tasks = JSON.stringify(newTasks);
            setTasks(newTasks);
            setTaskText('');
        }
    }

    const setChecked = (itemIndex) => {
        const newTasks = tasks.map((task, index) => new TaskModel(task.text, (itemIndex === index) ? !task.isChecked : task.isChecked));
        localStorage.tasks = JSON.stringify(newTasks);
        setTasks(newTasks);
    }

    const deleteItem = (itemIndex) => {
        const newTasks = [...tasks];
        newTasks.splice(itemIndex,1);
        // tasks.filter(item => item !== itemIndex);
        localStorage.tasks = JSON.stringify(newTasks);
        setTasks(newTasks);
    }

    let taskList;
    if (tasks) {
        taskList = tasks.map((task, index) =>
            <TaskItem key={index} index={index} text={task.text} isChecked={task.isChecked}
                onSelect={() => setChecked(index)} handleDeleteItem={(index) => deleteItem(index)} />
        )
    }

    const itemsLeft = () => {
        let left = 0;
        for (let i = 0; i < tasks.length; i++) {
            if (!tasks[i].isChecked) {
                left++
            }
        }
        return left;
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
                        <div className="task-list mb-4">
                            {taskList}
                        </div>
                    </Col>
                    <Col className="center">
                        <div className="between">
                            <span>{itemsLeft()} items left</span>
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