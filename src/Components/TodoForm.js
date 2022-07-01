import React, { useState } from 'react';

const TodoForm = (props) => {
    const [input, setInput]= useState('');
    console.log(input)

    const handleChange = e =>{
        setInput(e.target.value);
    };
    const handleSubmit = e =>{
        e.preventDefault();

        setInput('');
    };

    return (
        <form className='todo__form' onSubmit={handleSubmit}>
            <input className='todo__input' placeholder='Add a todo' name='text' type="text" onChange={handleChange} />
            <button className='toto__button'>Add Task</button>
        </form>
    );
};

export default TodoForm;
