
export const addUser = (data) => {
  return {
    type: 'addUser',
    payload: data
  }
}

export const addTask = (data) => {
  return {
    type: 'ADD_TASK',
    payload: data
  }
}

export const addSubTask = (data) => {
  return {
    type: 'addSubTask',
    payload: data
  }
}