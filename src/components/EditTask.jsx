import React, { useState } from 'react';

function EditTaskForm({ editTodo, task }) {
    // declare a variable to hold all task in an array
    const [taskInput, setTaskInput] = useState(task.task);
    const [btnDisable, setBtnDisable] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // call editTodo prop as a funct
        editTodo(taskInput, task.id);
        // clear input btn after task submit 
        setTaskInput("");
        setBtnDisable(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='todo-form'>
                <input type="text" className='todo-input'
                    placeholder={"Update your task"}
                    required
                    autoComplete='true'
                    value={taskInput}
                    onChange={(e) => {
                        let value = e.target.value;
                        setTaskInput(value);
                        if (value) {
                            return setBtnDisable(false);
                        } else {
                            return setBtnDisable(true);
                        }
                    }}
                />
                <button type='submit' disabled={btnDisable} title='Click to update task' className='todo-btn'>Update Task</button>
            </form>
        </div>
    )
}

export default EditTaskForm