import React from 'react';
import './DateSearch.css';
import ButtonSort from "../ButtonSort/ButtonSort";
import {onSearchDateChange, onSortDateChange,} from "../../redux/actionCreators";
import {connect} from "react-redux";


class DateSearch extends React.Component {
    state = {
        dateInput: '',
        activeBtn: '',
        buttons: [
            {
                btnClassName: 'btn btn-outline-success btn-bg',
                bodyClassName: 'fas fa-sort-numeric-up',
                isActive: false,
                sortMethod: 'acc'
            },
            {
                btnClassName: 'btn btn-outline-danger btn-bg',
                bodyClassName: 'fas fa-sort-numeric-down-alt',
                isActive: false,
                sortMethod: 'dec'
            }
        ]
    };

    onDateInputChange = (e) => {
        this.setState({dateInput: e.target.value});
        this.props.onSearchDateChange(e.target.value);
    };

    clearDateInput = () => {
        this.setState({dateInput: ''});
        this.props.onSearchDateChange('');
    };

    buttonToggleActive = (btn) => {
        const activeButtons = this.state.buttons.map(el => {
            if (el === btn) {
                return {...el, isActive: !el.isActive}
            }
            else {
                return {...el, isActive: false}
            }
        });

        this.setState({buttons: activeButtons})

    };

    onButtonClick = (sortMethod, btn) => {
        this.props.onSortDateChange(sortMethod);
        this.buttonToggleActive(btn);
    };

    render() {
        return (
            <div className='dateSearch-container'>
                <span>Поиск по дате</span>
                <div className='dateSearch-inner d-flex'>
                    <input type="date"
                           className="form-control"
                           value={this.state.dateInput}
                           onChange={this.onDateInputChange}/>
                    <button type="button"
                            className="btn btn-outline-secondary btn-bg"
                            onClick={() => {
                                this.clearDateInput();
                            }}>
                        Clear
                    </button>
                    <ButtonSort btnInfo={this.state.buttons[0]}
                                onClick={this.onButtonClick}/>
                    <ButtonSort btnInfo={this.state.buttons[1]}
                                onClick={this.onButtonClick}/>

                </div>

            </div>
        )
    }
}

const mapDispatchToProps = {
    onSearchDateChange,
    onSortDateChange
};

export default connect(null, mapDispatchToProps)(DateSearch);
