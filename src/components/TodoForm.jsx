import React, { useRef, useState } from 'react';

function TodoForm({ addTodo }) {
    // declare a variable to hold all task in an array
    const [taskInput, setTaskInput] = useState();
    const [btnDisable, setBtnDisable] = useState(true);
    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        // call addTodo prop as a funct
        addTodo(taskInput);
        // clear input btn after task submit 
        setTaskInput("");
        setBtnDisable(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='todo-form'>
                <input type="text" ref={inputRef} className='todo-input'
                    placeholder='What task do you want to do today?'
                    required
                    autoComplete='true'
                    value={taskInput}
                    onChange={(e) => {
                        let value = e.target.value;
                        setTaskInput(value)
                        if (value) {
                            return setBtnDisable(false);
                        } else {
                            return setBtnDisable(true);
                        }
                    }}
                />
                <button type='submit' disabled={btnDisable} title='Click to add a task' className='todo-btn'>Add A Task</button>
            </form>
        </div>
    )
}

export default TodoForm