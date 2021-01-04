import './TaskItem.css';

const TaskItem = (props) => {
    const{text, isChecked,onSelect, index} = props;


    return(
        <div className="c-task-item">
            <input id={'item' + index} type="checkbox" checked={isChecked} onChange={onSelect} className="mr-2"/>
            <label className={isChecked ? "checked" : ""} htmlFor={'item' + index}>{text}</label>
        </div>
    )
}

export default TaskItem;