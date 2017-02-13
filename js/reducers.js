import { SET_SEARCH_TERM } from './actions'

const DEFAULT_STATE = {
  searchTerm: ''
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.searchTerm})
  return newState
  // OR
  // return Object.assign({}, state, {searchTerm: action.searchTerm})
}

// making our own instead of combineReducers from redux
const rootReducer = (state = DEFAULT_STATE, action) => {
  // same as above
  // state = state || DEFAULT_STATE
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    default:
      return state
  }
}

export default rootReducer
