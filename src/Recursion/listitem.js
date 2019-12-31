import React, { Component } from 'react'
import {DataList} from './dataList'


export default  class ListItem extends Component {
    constructor(props){
       super(props)
       this.state = { clicked: false } 
    }
    render() {
        // get item data & plan from props 
        const { item , displayPlan } = this.props 
        

        return (
            
            <div>

                {console.log(displayPlan)}
               <a 
               onClick={() => this.setState({ clicked: !this.state.clicked })}
               >
                <li key={item.id} > {item.title} </li>
               </a>
                {/* recurse if (item is in users/tasks level) and (item is toggled to true) */}
                { displayPlan.children && this.state.clicked && 
                <DataList displayPlan = {{ ...displayPlan.children, params:{ [displayPlan.children.filterKey]: item.id}}} />}
                 
            </div>
        )
    }
}


