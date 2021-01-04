import './TaskItem.css';

const TaskItem = (props) => {
    const{text, isChecked, key} = props;


    return(
        <div className="c-task-item">
            <input type="checkbox" checked={isChecked} className="mr-2"/>
            <label htmlFor={'item' + key}>{text}</label>
        </div>
    )
}

export default TaskItem;