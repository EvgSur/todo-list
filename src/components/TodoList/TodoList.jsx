import React from 'react';
import './TodoList.css';
import ListItem from "./ListItem/ListItem";


const TodoList = ({todos, onTodoDelete, onTodoDone}) => {
    const todoElements = todos.map(el =>
        <ListItem key={el.id}
                  onTodoDelete={() => onTodoDelete(el.id)}
                  onTodoDone={() => onTodoDone(el.id)}
                  {...el}/>);
    return (
        <ul className='list-group'>
            {todoElements}
        </ul>
    )
};

export default TodoList;