import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

export class selectClass extends Component {
    render() {
        // console.log(this.props.users)
        return (
            <>
            <label>Select User </label>
            <select 
                placeholder={this.props.fieldSettings.placeholder}
                {...this.props.field}

            >
                { // options 
                    _.map(this.props.options, (value, key) => {
                        return <option key={key} value={key}>{value.title}</option>
                    })
                }
            </select>
        </>
        )
    }
}

const mapStateToProps = (state) => ({
    users:state.users.data
})

const mapDispatchToProps = {
    
}

export const select= connect(mapStateToProps, mapDispatchToProps)(selectClass)
