export const displayJsonPlan =()=> ({
      path:'users.data',
      children:{
            path:'tasks.data',
            key:'filtering',
            filterKey:'userID',
            children:{
                  path:'subtasks.data',
                  key:'filtering',
                  filterKey:'taskId'
            }
      }  
})