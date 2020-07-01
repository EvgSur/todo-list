import React from 'react';
import './DateSearch.css';


class DateSearch extends React.Component {
    state = {
        dateInput: '',
        activeBtn: ''
    };

    onDateInputChange = (e) => {
        this.setState({dateInput: e.target.value});
        this.props.onSearchDateChange(e.target.value);
    };

    clearDateInput = () => {
        this.setState({dateInput: ''});
        this.props.onSearchDateChange('');
    };

    buttonToggleActive = (e) => {
        if (!this.state.activeBtn) {
            e.currentTarget.classList.toggle('active');
            this.setState({activeBtn: e.currentTarget})
        }
        else if (this.state.activeBtn === e.currentTarget) {
            e.currentTarget.classList.toggle('active');
        }
        else if (this.state.activeBtn !== e.currentTarget) {
            if (this.state.activeBtn.classList.contains('active')) {
                this.state.activeBtn.classList.toggle('active');
                e.currentTarget.classList.toggle('active');
                this.setState({activeBtn: e.currentTarget})
            }
            else if (!this.state.activeBtn.classList.contains('active')) {
                e.currentTarget.classList.toggle('active');
                this.setState({activeBtn: e.currentTarget})
            }
        }
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
                    <button type="button"
                            className="btn btn-outline-success btn-bg"
                            onClick={(e) => {
                                this.props.onSortDateChange('acc');
                                this.buttonToggleActive(e)
                            }}>
                        <i className="fas fa-sort-numeric-up"/>
                    </button>
                    <button type="button"
                            className="btn btn-outline-danger btn-bg"
                            onClick={(e) => {
                                this.props.onSortDateChange('dec');
                                this.buttonToggleActive(e)
                            }}>
                        <i className="fas fa-sort-numeric-down-alt"/>
                    </button>

                </div>

            </div>
        )
    }
}

export default DateSearch;