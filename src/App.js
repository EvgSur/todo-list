import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import TextSearch from "./components/TextSearch/TextSearch";
import DateSearch from "./components/DateSearch/DateSearch";
import TodoList from "./components/TodoList/TodoList";


class App extends React.Component {

    render() {
        return (
            <div className='app-container'>
                <Header/>
                <div className='search-container'>
                    <TextSearch/>
                    <DateSearch/>
                </div>
                <TodoList/>
            </div>
        );
    }
}

export default App;
