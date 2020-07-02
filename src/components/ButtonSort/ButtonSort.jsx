import React from 'react';


class ButtonSort extends React.Component {
    state = {
        input: '',
        activeBtn: ''
    };


    render() {
        return (
            <button type="button"
                    className={`${this.props.btnInfo.btnClassName} ${this.props.btnInfo.isActive ? 'active': ''}`}
                    onClick={() => this.props.onClick(this.props.btnInfo.sortMethod, this.props.btnInfo)}>
                <i className={this.props.btnInfo.bodyClassName}/>
            </button>
        )
    }

}

export default ButtonSort;