import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export class checkbox extends Component {
    render() {
        return (
            <>
                <input
                    type='checkbox'
                    // name={this.props.fieldSettings.name}
                    // onChange={this.props.field.onChange}
                    placeholder={this.props.fieldSettings.placeholder} 
                    {...this.props.field}
                /> Active/Inactive
                    
            </>
        )
    }

}
