import {
    ON_SEARCH_DATE_CHANGE,
    ON_SEARCH_LABEL_CHANGE,
    ON_SORT_DATE_CHANGE,
    ON_SORT_LABEL_CHANGE, ON_TODO_ADD, ON_TODO_DELETE, ON_TODO_DONE
} from "./actionCreators";

let initialState;

const getDateNow = () => {

    let date = new Date();


    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }

    return (`${year}-${month}-${day}`)
};
const createID = () => {
    return (Math.random() * 1000000000).toFixed()
};

if (!localStorage.getItem('todos')) {
    initialState = {
        todos: [{label: 'This is your first task', date: getDateNow(), isDone: false, id: createID()}],
        searchLabelTerm: '',
        sortLabelTerm: '',
        searchDateTerm: '',
        sortDateTerm: '',
    };
}
else {
    initialState = {
        todos: JSON.parse(localStorage.getItem('todos')),
        searchLabelTerm: '',
        sortLabelTerm: '',
        searchDateTerm: '',
        sortDateTerm: '',
    };
}


export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ON_SEARCH_LABEL_CHANGE:
            return {
                ...state,
                searchLabelTerm: action.searchLabelTerm,
            };

        case ON_SORT_LABEL_CHANGE:
            if (state.sortLabelTerm === action.sortLabelTerm) {
                return {
                    ...state,
                    sortLabelTerm: '',
                }
            }
            else {
                return {
                    ...state,
                    sortLabelTerm: action.sortLabelTerm,
                }
            }
        case ON_SEARCH_DATE_CHANGE:
            return {
                ...state,
                searchDateTerm: action.searchDateTerm,
            };
        case ON_SORT_DATE_CHANGE:
            if (state.sortDateTerm === action.sortDateTerm) {
                return {
                    ...state,
                    sortDateTerm: '',
                }
            }
            else {
                return {
                    ...state,
                    sortDateTerm: action.sortDateTerm,
                }
            }
        case ON_TODO_DONE:
            const todosCopy = state.todos.map(el => {
                if (el.id === action.todoDoneId) {
                    return {...el, isDone: !el.isDone}
                }
                else {
                    return {...el}
                }

            });

            const newTodosCopyStringify = JSON.stringify(todosCopy);
            localStorage.setItem('todos', newTodosCopyStringify);

            return {...state, todos: todosCopy};

        case ON_TODO_DELETE:
            const newTodos = state.todos.filter(item => item.id !== action.todoDeleteId);

            const newTodosStringify = JSON.stringify(newTodos);
            localStorage.setItem('todos', newTodosStringify);

            return {...state, todos: newTodos};

        case ON_TODO_ADD:
            const newTodoItem = {label: action.todoData.label, date: action.todoData.date, isDone: false, id: createID()};
            const newTodosArr = [...state.todos, newTodoItem];

            const newTodosArrStringify = JSON.stringify(newTodosArr);
            localStorage.setItem('todos', newTodosArrStringify);

            return {...state, todos: newTodosArr};


        default:
            return state;

    }

}
