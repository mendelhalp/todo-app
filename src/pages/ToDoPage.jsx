import { useState } from 'react';
import { Button, Col, Container, Row, ToggleButtonGroup } from 'react-bootstrap';
import './ToDoPage.css';
import TaskModel from "../model/TaskModel";
import isEnterPressed from "../utils/utils";
import TaskItem from '../components/TaskItem';

//this component render a ToDo list
//states:
//tasks - array - array of objects
//taskText - string - the value of the input field
//filterType - string - the type of filter to filter the list
const ToDoPage = () => {
    const [tasks, setTasks] = useState(localStorage.tasks ? JSON.parse(localStorage.tasks) : []);
    const [taskText, setTaskText] = useState('');
    const [filterType, setFilterType] = useState('All');

    //this function add taskModel object to tasks list
    const addTask = (event) => {
        if (isEnterPressed(event) && event.target.value) {
            const newTask = new TaskModel(event.target.value);
            const newTasks = tasks.concat(newTask);
            localStorage.tasks = JSON.stringify(newTasks);
            setTasks(newTasks);
            setTaskText('');
        }
    }

    //this function recived the index of item in the tasks array and save a new list with the new 'isChacked' status in tasks state
    //input:
    //itemIndex - number - location in the array (e.g 0)
    const setChecked = (itemIndex) => {
        const newTasks = tasks.map((task, index) => new TaskModel(task.text, (itemIndex === index) ? !task.isChecked : task.isChecked));
        localStorage.tasks = JSON.stringify(newTasks);
        setTasks(newTasks);
    }

    //this function recived position of item and save a new list without it in tasks state
    //input:
    //itemIndex - number - location in the array (e.g 0)
    const deleteItem = (itemIndex) => {
        const newTasks = [...tasks];
        newTasks.splice(itemIndex,1);
        // tasks.filter(item => item !== itemIndex);
        localStorage.tasks = JSON.stringify(newTasks);
        setTasks(newTasks);
    }

    //convert tasks from plain objects to TaskModel object
    //and render TaskItem for each
    let taskList;
    if (tasks) {
        taskList = tasks.map((task, index) =>
            <TaskItem key={index} index={index} text={task.text} isChecked={task.isChecked}
                onSelect={() => setChecked(index)} handleDeleteItem={(index) => deleteItem(index)} />
        )
    }

    // calculate the amount of unchecked items left 
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
                                <Button className="m-1" variant="light" active={(filterType === 'All') ? true : false}>All</Button>
                                <Button className="m-1" variant="light" active={(filterType === 'Active') ? true : false}>Active</Button>
                                <Button className="m-1" variant="light" active={(filterType === 'Complited') ? true : false}>Complited</Button>
                            </ToggleButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ToDoPage;