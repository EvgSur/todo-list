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
        const activeButtons = this.state.buttons.map(el => {
            if(el === btn){
                return {...el, isActive: !el.isActive}
            }
            else {
                return {...el, isActive: false}
            }
        });

        this.setState({buttons: activeButtons})

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