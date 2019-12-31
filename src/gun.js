import Gun from 'gun/gun'
import { uuidv4 } from './helpers'

var gun = Gun ()

export  function addDataToGun (App,Data) {
    gun.get(App).set({...Data,id:uuidv4()})
}

export function  addDataToRedux (set_Data,App) {
    gun.get(App).map().on((data)=>{
        set_Data(App, data)
    })
}
