
export function uuidv4() {
  // returns a Universal Unique Identifier (UUID)
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

// export function createUsers() {
//   const UUIDs = [uuidv4(), uuidv4(), uuidv4()]
//   const users = {
//     [UUIDs[0]]: { name: 'Khaled', id: UUIDs[0] },
//     [UUIDs[1]]: { name: 'Amr', id: UUIDs[1] },
//     [UUIDs[2]]: { name: 'Alaa', id: UUIDs[2] }
//   }
//   return users
// }
