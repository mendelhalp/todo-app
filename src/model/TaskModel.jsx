
class TaskModel {

    constructor(text, isChecked) {
        if (isChecked) {
            this.text = text;
            this.isChecked = isChecked;
        } else {
            this.text = text;
            this.isChecked = false;
        }
    }
}

export default TaskModel;