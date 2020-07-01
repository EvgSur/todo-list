import React from 'react';
import './TextSearch.css';


class TextSearch extends React.Component {
    state = {
        input: '',
        activeBtn: ''

    };

    onInputChange = (e) => {
        this.setState({input: e.target.value});
        this.props.onSearchLabelChange(e.target.value);
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
            <div className='textSearch-container'>
                <span>Поиск по тексту</span>
                <div className='textSearch-inner d-flex'>
                    <input className="form-control"
                           placeholder="Поиск по названию"
                           onChange={this.onInputChange}
                           value={this.state.input} type="text"/>
                    <button type="button"
                            className="btn btn-outline-success btn-bg"
                            onClick={(e) => {
                                this.props.onSortLabelChange('acc');
                                this.buttonToggleActive(e);
                            }}>
                        <i className="fas fa-sort-alpha-up"/>
                    </button>
                    <button type="button"
                            className="btn btn-outline-danger btn-bg"
                            onClick={(e) => {
                                this.props.onSortLabelChange('dec');
                                this.buttonToggleActive(e);
                            }}>
                        <i className="fas fa-sort-alpha-down-alt"/>
                    </button>
                </div>
            </div>
        )
    }

}

export default TextSearch;