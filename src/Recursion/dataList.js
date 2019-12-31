import React, { Component } from 'react'
import {  map } from 'lodash'
import { displayJsonPlan } from './file'
import { apply } from '../functions/index'
import  ListItem  from './listitem'

export class DataList extends Component {    
    render() {
        const displayPlan = this.props.displayPlan ? this.props.displayPlan: displayJsonPlan()
        const listItems = apply(displayPlan)   /// el apply beta3raf el plan men parameter elly gwaha 
        return (
           
              <ul>
                  {
                   map(listItems, item=><ListItem key={item.id } item={item} displayPlan={displayPlan}/>)
                  }
              </ul>   
        )
    }
}

