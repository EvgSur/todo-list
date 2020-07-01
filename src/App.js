import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import TextSearch from "./components/TextSearch/TextSearch";
import DateSearch from "./components/DateSearch/DateSearch";
import TodoList from "./components/TodoList/TodoList";

class App extends React.Component {

    constructor(props) {
        const getDateNow = () => {

            let date = new Date();


            let year = date.getFullYear();
            let month = date.getMonth();
            let day = date.getDate();

            if (day < 10) {
                day = "0" + day
            }

            if (month < 10) {
                month = "0" + month
            }

            return (`${year}-${month}-${day}`)
        };

        super(props);
        if (localStorage.getItem('todos') === null) {
            this.state = {
                todos: [{label: 'This is your first task', date: '2020-07-01', isDone: false, id: getDateNow()}],
                searchLabelTerm: '',
                sortLabelTerm: '',
                searchDateTerm: '',
                sortDateTerm: '',
            };
        }
        else {
            this.state = {
                todos: JSON.parse(localStorage.getItem('todos')),
                searchLabelTerm: '',
                sortLabelTerm: '',
                searchDateTerm: '',
                sortDateTerm: '',
            };
        }
    }


    createID = () => {
        return (Math.random() * 1000000000).toFixed()
    };

    onTodoDelete = (id) => {
        this.setState(({todos}) => {
            const newTodos = todos.filter(item => item.id !== id);
            const newTodosStringify = JSON.stringify(newTodos);
            localStorage.setItem('todos', newTodosStringify);

            return {
                todos: newTodos
            }
        })
    };

    onTodoDone = (id) => {
        this.setState(({todos}) => {
            const todosCopy = [...todos];
            const elIndex = todosCopy.findIndex(el => el.id === id);
            todosCopy[elIndex] = {...todosCopy[elIndex], isDone: !todosCopy[elIndex].isDone};

            const newTodosCopyStringify = JSON.stringify(todosCopy);
            localStorage.setItem('todos', newTodosCopyStringify);

            return {todos: todosCopy}
        })
    };

    onTodoAdd = (data) => {
        const newTodoItem = {label: data.label, date: data.date, isDone: false, id: this.createID()};

        this.setState(({todos}) => {
            const newTodos = [...todos, newTodoItem];
            const newTodosStringify = JSON.stringify(newTodos);
            localStorage.setItem('todos', newTodosStringify);

            return {todos: [...todos, newTodoItem]}
        })
    };

    searchLabel = () => {
        const todos = this.state.todos;
        const searchLabelTerm = this.state.searchLabelTerm;
        if (!searchLabelTerm) {
            return todos
        }

        return todos.filter(el => el.label.toLowerCase().indexOf(searchLabelTerm.toLocaleLowerCase()) > -1);
    };

    onSearchLabelChange = (input) => {
        this.setState({
            searchLabelTerm: input,
        })
    };

    sortLabel = (data) => {
        const sortLabelTerm = this.state.sortLabelTerm;
        if (!sortLabelTerm) {
            return data
        }

        const sortFunc = () => {
            if (this.state.sortLabelTerm === 'acc') {
                return (a, b) => {
                    if (a.label > b.label) {
                        return 1;
                    }
                    if (a.label < b.label) {
                        return -1;
                    }
                    return 0;
                }
            }
            else if (this.state.sortLabelTerm === 'dec') {
                return (a, b) => {
                    if (a.label < b.label) {
                        return 1;
                    }
                    if (a.label > b.label) {
                        return -1;
                    }
                    return 0;
                }
            }
        };

        return [...data].sort(sortFunc());
    };

    onSortLabelChange = (input) => {
        if (this.state.sortLabelTerm === input) {
            this.setState({
                sortLabelTerm: '',
            });
        }
        else {
            this.setState({
                sortLabelTerm: input,
            })
        }
    };

    searchDate = (data) => {
        const term = this.state.searchDateTerm;
        if (!term) {
            return data
        }
        return data.filter(el => el.date === term);
    };

    onSearchDateChange = (input) => {
        this.setState({
            searchDateTerm: input,
        })
    };

    sortDate = (data) => {
        const sortDateTerm = this.state.sortDateTerm;
        if (!sortDateTerm) {
            return data
        }

        const sortFunc = () => {
            if (this.state.sortDateTerm === 'acc') {
                return (a, b) => {
                    if (a.date > b.date) {
                        return 1;
                    }
                    if (a.date < b.date) {
                        return -1;
                    }
                    return 0;
                }
            }
            else if (this.state.sortDateTerm === 'dec') {
                return (a, b) => {
                    if (a.date < b.date) {
                        return 1;
                    }
                    if (a.date > b.date) {
                        return -1;
                    }
                    return 0;
                }
            }
        };

        return [...data].sort(sortFunc());
    };

    onSortDateChange = (input) => {
        if (this.state.sortDateTerm === input) {
            this.setState({
                sortDateTerm: '',
            });
        }
        else {
            this.setState({
                sortDateTerm: input,
            })
        }
    };

    render() {
        const searchResults = this.sortDate(this.searchDate(this.sortLabel(this.searchLabel())));

        return (
            <div className='app-container'>
                <Header onTodoAdd={this.onTodoAdd}/>
                <div className='search-container'>
                    <TextSearch onSearchLabelChange={this.onSearchLabelChange}
                                onSortLabelChange={this.onSortLabelChange}/>
                    <DateSearch onSearchDateChange={this.onSearchDateChange}
                                onSortDateChange={this.onSortDateChange}/>
                </div>
                <TodoList
                    todos={searchResults}
                    onTodoDelete={this.onTodoDelete}
                    onTodoDone={this.onTodoDone}/>
            </div>
        );
    }
}

export default App;
