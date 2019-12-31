import React, { Component } from 'react'
import { get } from 'lodash'
import * as AllFieldComponents from './index'
import { Field } from 'formik'



class MiddleComponent extends Component {


    render() {

        return (
            <Field name={this.props.fieldSettings.name}>
                {({ field }) => {
                    const Component = get(AllFieldComponents, this.props.fieldSettings.type, AllFieldComponents.text)
                    return <Component fieldSettings={this.props.fieldSettings} options={this.props.options} field={field} />
                }}
            </Field>
        )
    }
}
export default MiddleComponent