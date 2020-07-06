import React from 'react';
import './TodoList.css';
import ListItem from "./ListItem/ListItem";
import {connect} from 'react-redux';
import {onTodoDelete, onTodoDone} from "../../redux/actionCreators";


const TodoList = ({todos, onTodoDelete, onTodoDone, searchLabelTerm, sortLabelTerm, searchDateTerm, sortDateTerm}) => {
    const searchLabel = () => {
        if (!searchLabelTerm) {
            return todos
        }
        return todos.filter(el => el.label.toLowerCase().indexOf(searchLabelTerm.toLocaleLowerCase()) > -1);
    };

    const sortLabel = (data) => {
        if (!sortLabelTerm) {
            return data
        }
        const sortFunc = () => {
            if (sortLabelTerm === 'acc') {
                return (a, b) => {
                    let labelA = a.label.toLowerCase();
                    let labelB = b.label.toLowerCase();

                    if (labelA > labelB) {
                        return 1;
                    }
                    if (labelA < labelB) {
                        return -1;
                    }
                    return 0;
                }
            }
            else if (sortLabelTerm === 'dec') {
                return (a, b) => {
                    let labelA = a.label.toLowerCase();
                    let labelB = b.label.toLowerCase();

                    if (labelA < labelB) {
                        return 1;
                    }
                    if (labelA > labelB) {
                        return -1;
                    }
                    return 0;
                }
            }
        };

        return [...data].sort(sortFunc());
    };

    const searchDate = (data) => {
        if (!searchDateTerm) {
            return data
        }
        return data.filter(el => el.date === searchDateTerm);
    };

    const sortDate = (data) => {
        if (!sortDateTerm) {
            return data
        }

        const sortFunc = () => {
            if (sortDateTerm === 'acc') {
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
            else if (sortDateTerm === 'dec') {
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


    const searchResults = () =>{
        const searchLabelResults = searchLabel();
        const sortLabelResults = sortLabel(searchLabelResults);
        const searchDateResults = searchDate(sortLabelResults);

        return sortDate(searchDateResults)
    };

    const todoElements = searchResults().map(el =>
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

const mapStateToProps = state => ({
    todos: state.todoState.todos,
    searchLabelTerm: state.todoState.searchLabelTerm,
    sortLabelTerm: state.todoState.sortLabelTerm,
    searchDateTerm: state.todoState.searchDateTerm,
    sortDateTerm: state.todoState.sortDateTerm,
});

const mapDispatchToProps = {
    onTodoDelete,
    onTodoDone
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
