import React, { useMemo, useState } from 'react'
import { TodoList } from './TodoList';

export const INPUT_PLACEHOLDER = 'type here';

export const Todo = () => {
  const defaultTodos = [
    {
        id: 1,
        text: 'Todo 1'
    },
    {
        id: 2,
        text: 'Todo 2'
    }
  ];
  
  const [todos, setTodos] = useState(defaultTodos);

  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  }

  const todoCount = useMemo(() => {
    return todos.length;
  }, [todos]);

  const onEnterKeyPress = () => {
    setTodos(todos => ([...todos, {id: todos.length + 1, text: inputText}]));
  }

  const handlekeyDown = (event) => {
    if(event.key === 'Enter'){
        onEnterKeyPress();
        setInputText('')
    }
  }

  return (
    <div>
        Todo count : {todoCount}
        <input placeholder={INPUT_PLACEHOLDER} onChange={handleInputChange} onKeyDown={handlekeyDown} value={inputText}/>
        <TodoList todos={todos}/>
    </div>
  )
}
