import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { HOME_ROUTES } from './helpers/routes'

import Dashboard_Home from 'screens/Home/Dashboard_Home'
import Settings from 'screens/Home/Settings'
import Alerts from 'screens/Home/Alerts'
import News from 'screens/Home/News'

const Stack = createStackNavigator()

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName={HOME_ROUTES.DASHBOARD}
    screenOptions={{ gestureEnabled: false, animationEnabled: false }}
    headerMode="none"
  >
    <Stack.Screen name={HOME_ROUTES.DASHBOARD} component={Dashboard_Home} />
    <Stack.Screen name={HOME_ROUTES.SETTINGS} component={Settings} />
    <Stack.Screen name={HOME_ROUTES.ALERTS} component={Alerts} />
    <Stack.Screen name={HOME_ROUTES.NEWS} component={News} />
  </Stack.Navigator>
)

export default HomeNavigator
