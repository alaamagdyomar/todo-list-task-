import React, { Component } from 'react';

export class textarea extends Component {
    render() {
        return (

            <textarea
                // name={this.props.fieldSettings.name}
                placeholder={this.props.fieldSettings.placeholder}
                // onChange={this.props.field.onChange}
                {...this.props.field}
            />

        )
    }

}
