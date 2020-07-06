import React from 'react';


const ButtonSort = (props) => {
    return (
        <button type="button"
                className={`${props.btnInfo.btnClassName} ${props.btnInfo.isActive ? 'active' : ''}`}
                onClick={() => props.onClick(props.btnInfo.sortMethod, props.btnInfo)}>
            <i className={props.btnInfo.bodyClassName}/>
        </button>
    )
};

export default ButtonSort;