import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { SIGNUP_ROUTES } from './helpers/routes'

import WelcomeScreen from 'screens/Onboarding/WelcomeScreen'
import SignIn from 'screens/Onboarding/SignIn'
import StartScreen from 'screens/Onboarding/StartScreen'
import SignUp from 'screens/Onboarding/SignUp'

const Stack = createStackNavigator()

const OnboardingNavigator = () => (
  <Stack.Navigator
    initialRouteName={SIGNUP_ROUTES.START_SCREEN}
    screenOptions={{ gestureEnabled: false, animationEnabled: false }}
    headerMode="none"
  >
    <Stack.Screen name={SIGNUP_ROUTES.WELCOME} component={WelcomeScreen} />
    <Stack.Screen name={SIGNUP_ROUTES.SIGNIN} component={SignIn} />
    <Stack.Screen name={SIGNUP_ROUTES.START_SCREEN} component={StartScreen} />
    <Stack.Screen name={SIGNUP_ROUTES.SIGNUP} component={SignUp} />
  </Stack.Navigator>
)

export default OnboardingNavigator
