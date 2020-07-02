import React from 'react';
import './TextSearch.css';
import ButtonSort from "../ButtonSort/ButtonSort";


class TextSearch extends React.Component {

    state = {
        input: '',
        activeBtn: '',
        buttons: [
            {
                btnClassName: 'btn btn-outline-success btn-bg',
                bodyClassName: 'fas fa-sort-alpha-up',
                isActive: false,
                sortMethod: 'acc'
            },
            {
                btnClassName: 'btn btn-outline-danger btn-bg',
                bodyClassName: 'fas fa-sort-alpha-down-alt',
                isActive: false,
                sortMethod: 'dec'
            }
        ]
    };

    onInputChange = (e) => {
        this.setState({input: e.target.value});
        this.props.onSearchLabelChange(e.target.value);
    };


    buttonToggleActive = (btn) => {
        if (!this.state.activeBtn) {
            const btnIndex = this.state.buttons.findIndex(el => el === btn);
            const buttonsCopy = [...this.state.buttons];
            buttonsCopy[btnIndex] = {...buttonsCopy[btnIndex], isActive: !buttonsCopy[btnIndex].isActive};
            this.setState({
                activeBtn: btn.sortMethod,
                buttons: buttonsCopy,
            })
        }
        else if (this.state.activeBtn === btn.sortMethod) {
            const btnIndex = this.state.buttons.findIndex(el => el === btn);
            const buttonsCopy = [...this.state.buttons];
            buttonsCopy[btnIndex] = {...buttonsCopy[btnIndex], isActive: !buttonsCopy[btnIndex].isActive};
            this.setState({
                activeBtn: buttonsCopy[btnIndex].isActive ? btn.sortMethod : '',
                buttons: buttonsCopy,
            })
        }
        else if (this.state.activeBtn !== btn.sortMethod) {
            const btnActiveIndex = this.state.buttons.findIndex(el => el.isActive === true);
            const btnIndex = this.state.buttons.findIndex(el => el === btn);

            const buttonsCopy = [...this.state.buttons];
            buttonsCopy[btnActiveIndex] = {
                ...buttonsCopy[btnActiveIndex],
                isActive: !buttonsCopy[btnActiveIndex].isActive
            };
            buttonsCopy[btnIndex] = {...buttonsCopy[btnIndex], isActive: !buttonsCopy[btnIndex].isActive};

            this.setState({
                activeBtn: btn.sortMethod,
                buttons: buttonsCopy,
            })
        }
    };

    onButtonClick = (sortMethod, btn) => {
        this.props.onSortLabelChange(sortMethod);
        this.buttonToggleActive(btn);
    };

    render() {
        return (
            <div className='textSearch-container'>
                <span>Поиск по тексту</span>
                <div className='textSearch-inner d-flex'>
                    <input className="form-control"
                           placeholder="Поиск по названию"
                           onChange={this.onInputChange}
                           value={this.state.input} type="text"/>
                    <ButtonSort btnInfo={this.state.buttons[0]}
                                onClick={this.onButtonClick}/>
                    <ButtonSort btnInfo={this.state.buttons[1]}
                                onClick={this.onButtonClick}/>
                </div>
            </div>
        )
    }

}

export default TextSearch;