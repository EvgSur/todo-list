import React from 'react';


class ModalWindow extends React.Component {
    state = {
        label: '',
        date: '',
    };

    onLabelChange = (e) => {
        this.setState({label: e.target.value})
    };

    onDateChange = (e) => {
        this.setState({date: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onTodoAdd(this.state);

        this.setState({
            label: '',
            date: '',
        })
    };

    render() {
        return (
            <>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#addTaskModal">
                    Добавить
                </button>

                <form onSubmit={this.onSubmit} className="modal fade" id="addTaskModal" tabIndex="-1" role="dialog"
                      aria-labelledby="addTaskModalLabel"
                      aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addTaskModalLabel">Добавить задачу</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group row">
                                    <label htmlFor="inputTask" className="col-sm-2 col-form-label">Задача</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="inputTask"
                                               placeholder="Описание задачи"
                                               required
                                               onChange={this.onLabelChange}
                                               value={this.state.label}/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="inputDate" className="col-sm-2 col-form-label">Дата</label>
                                    <div className="col-sm-10">
                                        <input type="date" className="form-control" id="inputDate"
                                               required
                                               onChange={this.onDateChange}
                                               value={this.state.date}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        )

    }
}

export default ModalWindow;