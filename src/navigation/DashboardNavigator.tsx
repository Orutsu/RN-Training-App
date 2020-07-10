import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { DASHBOARD_ROUTES } from './helpers/routes'

import HomeNavigator from './HomeNavigator'
import HomeTabBar from 'components/HomeTabBar'

const Stack = createStackNavigator()

const Tab = createBottomTabNavigator()

const DashboardNavigator = () => (
  <Tab.Navigator tabBar={props => <HomeTabBar />}>
    <Stack.Screen name={DASHBOARD_ROUTES.HOME} component={HomeNavigator} />
  </Tab.Navigator>
)

export default DashboardNavigator
