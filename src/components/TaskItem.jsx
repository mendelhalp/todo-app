import { Row } from 'react-bootstrap';
import './TaskItem.css';

//this component render a ToDo item
//props:
//text - string - the title of the task (e.g. buy pills)
//isChacked - boolean - is the task marked as checked
//onSelect - function - function that change the isChecked value in the tasks array and rerender the item
//handleDeleteItem - function - function that delete this item from the tasks array
//index - number - the index of the item in the tasks array

const TaskItem = (props) => {
    const { text, isChecked, onSelect, handleDeleteItem, index } = props;


    return (
        <div className="c-task-item">
            <Row className="align-items-center justify-content-between m-0">
                <div>
                    <input id={'item' + index} type="checkbox" checked={isChecked} onChange={onSelect} className="mr-2" />
                    <label className={isChecked ? "checked" : ""} htmlFor={'item' + index}>{text}</label>
                </div>
                <span onClick={() => handleDeleteItem(index)}>X</span>
            </Row>
        </div>
    )
}

export default TaskItem;