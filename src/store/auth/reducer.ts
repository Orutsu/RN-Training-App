import { combineReducers } from 'redux'

import {
  AuthActions,
  AuthState,
  SetAuthLoadingAction,
  SetAuthErrorAction,
} from './types'

import { ErrorState, LoadingState } from 'store/types'

const isLoading = (
  state: LoadingState = true,
  { type, payload }: SetAuthLoadingAction
) => {
  switch (type) {
    case 'SET_AUTH_LOADING':
      return payload
    default:
      return state
  }
}

const error = (
  state: ErrorState = null,
  { type, payload }: SetAuthErrorAction
) => {
  switch (type) {
    case 'SET_AUTH_ERROR':
      return payload
    default:
      return state
  }
}

const isAuth = (state = true, action: AuthActions) => {
  switch (action.type) {
    case 'SET_IS_AUTH':
      return action.payload
    case 'RESET_AUTH_STATE':
      return false
    default:
      return state
  }
}

const isConnected = (state = true, action: AuthActions) => {
  switch (action.type) {
    case 'SET_IS_CONNECTED':
      return action.payload
    case 'RESET_AUTH_STATE':
      return true
    default:
      return state
  }
}

export default combineReducers<AuthState>({
  isLoading,
  error,
  isAuth,
  isConnected,
})
