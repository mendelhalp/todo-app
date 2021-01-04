import { useState } from 'react';
import { Button, Modal, Row } from 'react-bootstrap';
import './TaskItem.css';

//this component render a ToDo item
//props:
//text - string - the title of the task (e.g. buy pills)
//isChacked - boolean - is the task marked as checked
//onSelect - function - function that change the isChecked value in the tasks array and rerender the item
//handleDeleteItem - function - function that delete this item from the tasks array
//index - number - the index of the item in the tasks array
//states:
//showAlert - boolean - is the alert Modal need to be shown or not

const TaskItem = (props) => {
    const { text, isChecked, onSelect, handleDeleteItem, index } = props;
    const [showAlert, setShowAlert] = useState(false);


    return (
        <div className="c-task-item">
            <Row className="align-items-center justify-content-between m-0">
                <div>
                    <input id={'item' + index} type="checkbox" checked={isChecked} onChange={onSelect} className="mr-2" />
                    <label className={isChecked ? "checked" : ""} htmlFor={'item' + index}>{text}</label>
                </div>
                <span onClick={() => isChecked ? handleDeleteItem(index) : setShowAlert(true)}>X</span>
                <Modal show={showAlert} onHide={() => setShowAlert(false)} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Active Task!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>You are trying to delete an active task</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowAlert(false)}>Cancel</Button>
                        <Button variant="primary" onClick={() => {handleDeleteItem(index); setShowAlert(false)}}>Delete anyway</Button>
                    </Modal.Footer>
                </Modal>
            </Row>
        </div>
    )
}

export default TaskItem;