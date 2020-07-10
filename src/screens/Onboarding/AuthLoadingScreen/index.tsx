import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import OnboardingNavigator from 'navigation/OnboardingNavigator'
import {
  navigationRef,
  isMountedRef,
} from 'navigation/helpers/NavigationService'
import DashboardNavigator from 'navigation/DashboardNavigator'
import { useTypedSelector } from 'store'

const AuthLoadingScreen = () => {
  const { isAuth } = useTypedSelector(store => store.auth)
  useEffect(() => {
    isMountedRef.current = true
  }, [])
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        colors: {
          background: '#fff',
        },
      }}
    >
      {!isAuth && <OnboardingNavigator />}
      {isAuth && <DashboardNavigator />}
    </NavigationContainer>
  )
}
export default AuthLoadingScreen
