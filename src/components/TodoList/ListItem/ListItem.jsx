import React from 'react';
import './ListItem.css';


const ListItem = ({isDone, label, date, onTodoDelete, onTodoDone}) => {

    const listStyle = {
        textDecoration: isDone ? 'line-through' : 'none',
    };

    return (
        <li className='list-group-item list-item__container'>
            <span style={listStyle} className='list-item__text'>{label}</span>

            <div className='list-item__panel'>
                <span>{date}</span>
                <button type="button"
                        className="btn btn-outline-danger btn-bg"
                        onClick={onTodoDelete}>
                    <i className="fas fa-trash-alt"/>
                </button>
                <button type="button"
                        className="btn btn-outline-success btn-bg"
                        onClick={onTodoDone}>
                    <i className="fas fa-check"/>
                </button>
            </div>

        </li>
    )
};

export default ListItem;