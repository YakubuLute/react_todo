import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uid } from 'uuid';
import { Delete, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import EditTaskForm from './EditTask';
uid();
function Todo() {
    const [todos, setTodos] = useState([]);
    const addTodo = (todo) => {
        setTodos([...todos, {
            id: uid(),
            task: todo,
            completed: false,
            isEditing: false
        }])
        console.log(todos);
    }
    // toggleComplete 
    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => {
            return todo.id === id ?
                { ...todo, completed: !todo.completed, } : todo;
        }
        ));
    }

    // delete a task
    const deleteTask = (id) => {
        // filter all list of task and remove current id
        setTodos(todos.filter((todo) => todo.id !== id));
    }
    // edit a task
    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
    }
    const editTask = (task, id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
    }
    return (
        <div className='container'>
            <main>
                <header>
                    <h1 className='title'>Hello, Good Afternoon!</h1>
                    <h2 className='subtitle mb-2 center'>Let's Add Some Task</h2>

                </header>
                <section className="todo-form-section mb-3">
                    <TodoForm addTodo={addTodo} />
                </section>
                <section className="todo-list">
                    {todos.length === 0 ?
                        (<p className="text">
                            No task for you today. Please add some tasks to your list
                        </p>) :
                        (todos.map((todo, index) =>
                            todo.isEditing ?
                                (
                                    <EditTaskForm task={todo} editTodo={editTask} />
                                )
                                :
                                (<TodoRender task={todo}
                                    key={index}
                                    toggleComplete={toggleComplete}
                                    deleteTask={deleteTask}
                                    editTodo={editTodo}
                                />)
                        ))
                    }

                </section>
            </main>
        </div>
    )
}

export default Todo

export const TodoRender = ({ task, toggleComplete, deleteTask, editTodo }) => {
    return <div className="inner-todo-list">
        <p
            title='Click to mark task as completed'
            className={`${task.completed ? 'completed text' : 'text'}`}
            key={task.id}
            onClick={() => {
                toggleComplete(task.id);
            }}
        >
            {task ? task.task : "There is no task for you today. Add some Tasks"}
        </p>
        <div className="icons gap-1 flex">
            <IconButton className='icon delete'
                onClick={() => {
                    return deleteTask(task.id);
                }}
            >
                <Delete />
            </IconButton>
            <IconButton className='icon edit'
                onClick={() => {
                    return editTodo(task.id);
                }}
            >
                <Edit />
            </IconButton>
        </div>
    </div>
}