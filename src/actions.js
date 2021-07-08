import * as Actions from "./actionTypes";

// export function bugAdded(description) {
//   return {
//     type : Actions.BUG_ADDED,
//     payload : {
//       description:'Bug1'
//     }
//   }
// }

export const bugAdded = description => ({
  type: Actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugResolved = id =>({
    type: Actions.BUG_RESOLVED,
    payload : {
        id
    }
})
