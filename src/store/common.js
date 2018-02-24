export function createAction (actionType) {
  return (value): Action => {
    return {
      type: actionType,
      payload: value
    }
  }
}

export function createReducer (initialState, ACTION_HANDLERS) {
  return (state = initialState, action: Action) => {
    let handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
  }
}
