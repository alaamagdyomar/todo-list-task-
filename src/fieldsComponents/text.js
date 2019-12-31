import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export class text extends Component {
    render() {
        return (

            <input
                type='text'
                // name={this.props.fieldSettings.name}
                placeholder={this.props.fieldSettings.placeholder}
                // onChange={this.props.field.onChange}
                {...this.props.field} // field = {onChange: handleChange}
            />

        )
    }

}
