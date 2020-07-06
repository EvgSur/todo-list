export const ON_SEARCH_LABEL_CHANGE = 'ON_SEARCH_LABEL_CHANGE';
export const ON_SORT_LABEL_CHANGE = 'ON_SORT_LABEL_CHANGE';
export const ON_SEARCH_DATE_CHANGE = 'ON_SEARCH_DATE_CHANGE';
export const ON_SORT_DATE_CHANGE = 'ON_SORT_DATE_CHANGE';
export const ON_TODO_DELETE = 'ON_TODO_DELETE';
export const ON_TODO_DONE = 'ON_TODO_DONE';
export const ON_TODO_ADD = 'ON_TODO_ADD';




export const onSearchLabelChange = (input) =>{
    return {type: ON_SEARCH_LABEL_CHANGE, searchLabelTerm: input}
};

export const onSortLabelChange = (input) =>{
    return {type: ON_SORT_LABEL_CHANGE, sortLabelTerm: input}
};

export const onSearchDateChange = (input) =>{
    return {type: ON_SEARCH_DATE_CHANGE, searchDateTerm: input}
};

export const onSortDateChange = (input) =>{
    return {type: ON_SORT_DATE_CHANGE, sortDateTerm: input}
};

export const onTodoDelete = (id) =>{
    return {type: ON_TODO_DELETE, todoDeleteId: id}
};

export const onTodoDone = (id) =>{
    return {type: ON_TODO_DONE, todoDoneId: id}
};

export const onTodoAdd = (data) =>{
    return {type: ON_TODO_ADD, todoData: data}
};
