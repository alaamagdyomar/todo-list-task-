   // this func is called {funcJson }  in the main file 


export const funcjsonPlan = (taskIdValue)=>({
    path: 'subtasks.data', // lazm yeb2a nafs el name elly fel state 
    key: 'filtering',
    params: {taskId : taskIdValue }, // lazm yeb2a nafs el key elly ben 2ksess  beh taskId 
    then:{
        key: 'count',
        countKey: '',
        init: 0
    }
})

// this json identify what plan that the apply func will do 

// path => the data that the apply func will get to use the data 

// key => func that we will use on the data 

// params => object hanfelter beeeh el data {
      //   taskId = is a key that i give .....
      //   taskIdValue = is the value that i will filter 
//}