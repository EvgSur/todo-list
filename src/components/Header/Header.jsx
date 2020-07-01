import React from 'react';
import './Header.css';
import ModalWindow from "../ModalWindow/ModalWindow";


const Header = ( {onTodoAdd} ) =>{
    return(
        <div className='header-container'>
            <h1>Todo List</h1>
            <ModalWindow onTodoAdd={onTodoAdd}/>
        </div>
    )
};

export default Header;