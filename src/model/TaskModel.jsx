import React from 'react';


class TaskModel extends React.Component {

    constructor(text, isChecked){
        super();
        this.text = text;
        this.isChecked = isChecked;
    }
}

export default TaskModel;