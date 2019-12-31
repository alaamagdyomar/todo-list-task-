import React from 'react'
import { Modal, Button } from 'antd'
import {connect} from 'react-redux'
import {addSubTask} from '../actions/index'
import {Formik,Form} from 'formik'
import MiddleComponent from './MiddleComponent'
import {map} from 'lodash'
import * as subformikJson from '../subFormik.json'
import {allMapDispatchToProps} from '../Dispatcher/index'
import {addDataToGun} from '../gun'
import {addDataToRedux} from '../gun'

class Screen extends React.Component {
  constructor(props){
    super(props)
    addDataToRedux(props.setData,"subtasks")
  }
  state = { visible: false };

  onFormSubmit = (values) => {  
    // this.props.setData('subtasks',{ ...values })
    // this func to add data to gun 
    addDataToGun('subtasks',{...values})
    this.setState({
      visible:false
    })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add subTask
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          
        <Formik
          initialValues={{
            subTask: '',
            taskId:''
          }}
          onSubmit={this.onFormSubmit}
        >
          {/* Form rendering function */}
          {(FormikProps) => {
            return (
              <Form>
                {
                  //map fields component dynamically from json file using middle component
                  map(subformikJson.default, (fieldSettings, keyName) => {
                    return <MiddleComponent key={keyName} fieldSettings={{ ...fieldSettings }} options={this.props.tasks} />
                  })
                }
                <button type='submit'>Add Task</button>
              </Form>
            )
          }}

        </Formik>

        </Modal>
      </div>
    );
  }
}

const mapStatetoProps = (state)=>{
  return{
      tasks: state.tasks.data
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
  
    addSubTask: (data) => dispatch({
      type: 'setData_subtasks',
      payload: data
    })
  }
}

export default connect (mapStatetoProps,allMapDispatchToProps)(Screen)