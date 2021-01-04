import { Row } from 'react-bootstrap';
import './TaskItem.css';

const TaskItem = (props) => {
    const { text, isChecked, onSelect, index } = props;


    return (
        <div className="c-task-item">
            <Row className="align-items-center justify-content-between m-0">
                <div>
                    <input id={'item' + index} type="checkbox" checked={isChecked} onChange={onSelect} className="mr-2" />
                    <label className={isChecked ? "checked" : ""} htmlFor={'item' + index}>{text}</label>
                </div>
                <span>X</span>
            </Row>
        </div>
    )
}

export default TaskItem;