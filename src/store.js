import { createStore } from "redux";
import reducer from './reducer'

// high order function
const store = createStore(reducer)

export default store;