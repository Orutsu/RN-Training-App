import { AuthActions } from './types'
import { ErrorState, LoadingState } from 'store/types'
import { AppThunk } from 'store'
import logger from 'utils/logger'

export const setAuthError = (payload: ErrorState): AuthActions => ({
  type: 'SET_AUTH_ERROR',
  payload,
})

export const resetAuthError = (): AuthActions => ({
  type: 'SET_AUTH_ERROR',
  payload: null,
})

export const setAuthLoading = (payload: LoadingState): AuthActions => ({
  type: 'SET_AUTH_LOADING',
  payload,
})

export const setIsAuth = (payload: boolean): AuthActions => ({
  type: 'SET_IS_AUTH',
  payload,
})

export const authorization = (): AppThunk => async dispatch => {
  dispatch(setAuthLoading(true))
  try {
    return Promise.resolve('Ok')
  } catch (e) {
    logger.error('authorization', e)
  } finally {
    dispatch(setAuthLoading(false))
  }
}
