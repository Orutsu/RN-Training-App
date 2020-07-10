import React from 'react'
import AuthLoadingScreen from 'screens/Onboarding/AuthLoadingScreen'
import { Provider } from 'react-redux'
import configureStore from 'store'
import { StatusBar } from 'react-native'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
    <AuthLoadingScreen />
  </Provider>
)

export default App
