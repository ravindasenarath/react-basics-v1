import React from 'react'

export const TodoList = (props) => {
    const todos = props.todos;
  return (
    <div>
        {todos.map(todo => <h2 key={todo.id}>{todo.text}</h2>)}
    </div>
  )
}
