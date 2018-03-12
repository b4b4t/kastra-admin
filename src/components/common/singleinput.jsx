import React, {Component} from 'react';

export default class SingleInput extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.props.onChange.bind(this);
    }

    render() {
        const classInput = this.props.displayError ? 'form-control border-danger' : 'form-control';

        return (
            <div className="form-group row">
                <label htmlFor={this.props.name} className="col-sm-2 col-form-label">{this.props.title}</label>
                <div className="col-sm-10">
                    <input id={this.props.name} className={classInput} type={this.props.type} name={this.props.name} value={this.props.value} onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}