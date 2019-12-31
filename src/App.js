import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { set_data } from './reducers'
import { Formik, Form, Field, ErrorMessage, FormikConsumer } from 'formik'
import _ from 'lodash'
import * as fieldsJSON from './fields.json'
import MiddleComponent from './fieldsComponents/MiddleComponent'
import Screen from './fieldsComponents/Screen'
import './App.css'
import {allMapDispatchToProps} from './Dispatcher/index'
import {apply} from './functions/index'
import {funcjsonPlan} from './functions/funcjson'
import {addDataToGun} from './gun'
import {addDataToRedux} from './gun'
import {DataList} from './Recursion/dataList'



class App extends Component {
  constructor(props){
    super(props)// lazm 
    addDataToRedux(props.setData,"tasks")
    props.setData('users',{title:'Alaa',id:"a"})
    props.setData('users',{title:'Ahmed',id:"b"})
    props.setData('users',{title:'Khaled',id:"c"})
    props.setData('users',{title:'Amr',id:"d"})
    props.setData('users',{title:'esraa',id:"e"})
    props.setData('users',{title:'wafaa',id:"f"})
    props.setData('users',{title:'Aml',id:"g"})
  }

  onFormSubmit = (values) => {
    // this.props.setData('tasks',{ ...values })
    addDataToGun('tasks',{...values})
  }

  render() {
    return (
      <>
      <div class='container'>
        <div>
        <Formik
          initialValues={{
            title: '',
            description: '',
            userID: '',
            active: false
          }}
          onSubmit={this.onFormSubmit}
        >
          {/* Form rendering function */}
          {(FormikProps) => {

            return (  
              <Form>
                {
                  //map fields component dynamically from json file using middle component
                  _.map(fieldsJSON.default, (fieldSettings, keyName) => {
                    return <MiddleComponent key={keyName} fieldSettings={{ ...fieldSettings }} options={this.props.users} />
                    
                  })
                }
                <button type='submit'>Add Task</button>
              </Form>
            )
          }}

        </Formik>
        </div>
        <div>
          <Screen/>
        </div>
        <div>
          <DataList/>
          </div>
      
   </div>
      </>
      
    )
  }
}

// map props to state data
const mapStateToProps = (state) => {
  return {
    users: state.users.data,
    tasks: _.get(state.tasks, 'data'),
    subtasks:state.subtasks.data
    // stateval: state
  }
}

export default connect(
  mapStateToProps,
  allMapDispatchToProps
)(App)
