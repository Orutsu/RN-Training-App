import { createStore, applyMiddleware, combineReducers, Action } from 'redux'
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import authReducer from 'store/auth/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector

export type AppThunk = ThunkAction<void, AppState, unknown, Action<string>>

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  )

  return store
}
