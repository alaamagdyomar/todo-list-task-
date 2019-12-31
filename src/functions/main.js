import {filter,size} from 'lodash'
import { funcjsonPlan } from './funcjson'

export const filtering = (funcjsonPlan,data,state,props)=>{   // esm elfunction hwa nafs el key fel json file
    return filter(data, funcjsonPlan.params)
}

export const count =(funcjsonPlan,data,state,props) =>{        // state =  all state ,props = 3shan lw fe arguments hanbaseeha 
    return size(data)  
}


// return filter(data,  funcjsonPlan.params) => beta5ood data = objects of ( users & tasks & subtasks)

//  funcjsonPlan.params) => data elly ana hafalter 3la asasha elly gaya men el json file 