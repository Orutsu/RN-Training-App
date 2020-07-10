import { useReducer } from 'react'
import logger from 'utils/logger'
import request_custom from 'utils/request'
import queryString from 'query-string'
import pickBy from 'lodash/pickBy'

interface InitialState {
  isPending: boolean
  dataRespons: any
  error: any | undefined
}

const initialQueryState: InitialState = {
  isPending: false,
  dataRespons: {},
  error: undefined,
}

interface QueryAction {
  type: 'UPDATE_STATE'
  payload: Partial<InitialState>
}

const queryReducer = (
  state: InitialState,
  action: QueryAction
): InitialState => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export const useCreateRequest = (serviceName: string) => {
  const [state, dispatch] = useReducer(queryReducer, initialQueryState)

  const updateStateAction = (payload: Partial<InitialState>) =>
    dispatch({
      type: 'UPDATE_STATE',
      payload,
    })

  const createEntity = async <T>(payload: T, query: object = {}) => {
    if (state.error) {
      updateStateAction({ error: undefined })
    }

    updateStateAction({ isPending: true })
    try {
      const resp = request_custom.post(serviceName, payload)
      logger.log(`Create ${serviceName}`, resp)
      updateStateAction({ dataRespons: resp })
      return Promise.resolve(resp)
    } catch (e) {
      logger.error(`Create error ${serviceName}`, e)
      updateStateAction({ error: e.message })
      return Promise.reject(e)
    } finally {
      updateStateAction({ isPending: false })
    }
  }

  return {
    createEntity,
    ...state,
  }
}
