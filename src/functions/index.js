import * as rendfunctions from './main'   // rendFunctions contains the 2 functions in the main file {filtering,count}
import {get} from 'lodash'
import {store} from '../index'


export const apply = (funcjsonPlan,data={},state=store.getState(),props={})=>{
    const returnedData = get(state,funcjsonPlan.path,data)
    let returnedFunction = get(rendfunctions,funcjsonPlan.key,(funcjsonPlan,data) => data) // return data as a second default parameter 
                                                                                    
    
    let result = returnedFunction(funcjsonPlan, returnedData, state, {...props, apply:apply})
   
    if (funcjsonPlan.then) {
        return apply (funcjsonPlan.then,result,state,props) // result is a list contains filtered subTasks comes from main func 
    }
    return result 
}



// d=>d  = is a default value to be returned if mothing comes from the function 

// then lama tshofha el function betnady 3la el apply tany bs betedeeha eldata elly ba3d el then 

// 