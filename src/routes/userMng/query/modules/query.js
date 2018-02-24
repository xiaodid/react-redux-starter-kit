import { createReducer, createAction } from 'store/common'

const USER_MNG_QUERY = 'USER_MNG_QUERY'

export const queryUsers = createAction(USER_MNG_QUERY)

const intialState = {
  userList: ['dxd', 'dengxiaodi']
}

export default createReducer(intialState, {
  [USER_MNG_QUERY]: (state, payload) => {
    return Object.assign({}, state, payload.payload)
  }
})
