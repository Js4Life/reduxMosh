import * as Actions from "./actionTypes";

let lastId = 0;

// []

//reducer -- pure function no DOM elem,global state,api calls like that

export default function reducer(state = [], action) {
  switch (action.type) {
    case Actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case Actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case Actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}

// if (action.type === "bugAdded") {
//   return [
//     ...state,
//     {
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     },
//   ];
// } else if (action.type === "bugRemoved") {
//   return state.filter((bug) => bug.id !== action.payload.id);
// }
