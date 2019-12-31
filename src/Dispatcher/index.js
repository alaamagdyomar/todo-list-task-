export const allMapDispatchToProps =(dispatch)=>({
setData : (app,data)=> (dispatch)({
    type:`setData_${app}`,
    payload:data
})
})