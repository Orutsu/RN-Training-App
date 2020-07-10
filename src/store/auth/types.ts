import { ErrorState, LoadingState } from 'store/types'

export interface AuthState {
  isLoading: LoadingState
  error: ErrorState
  isAuth: boolean
  isConnected: boolean
}

export interface SetAuthLoadingAction {
  type: 'SET_AUTH_LOADING'
  payload: LoadingState
}

export interface SetAuthErrorAction {
  type: 'SET_AUTH_ERROR'
  payload: ErrorState
}

export interface SetIsAuthAction {
  type: 'SET_IS_AUTH'
  payload: boolean
}

export interface ResetAuthState {
  type: 'RESET_AUTH_STATE'
}

export interface SetIsConnectedAction {
  type: 'SET_IS_CONNECTED'
  payload: boolean
}

export type AuthActions =
  | SetAuthLoadingAction
  | SetAuthErrorAction
  | SetIsAuthAction
  | ResetAuthState
  | SetIsConnectedAction
