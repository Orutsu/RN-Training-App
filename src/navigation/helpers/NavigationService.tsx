import React, { useRef } from 'react'

import {
  CommonActions,
  StackActions,
  DrawerActions,
  NavigationProp,
  RouteProp,
  NavigationContainerRef,
  NavigationState,
  PartialState,
} from '@react-navigation/native'

import { StackNavigationProp } from '@react-navigation/stack'

import { TRoutes, RootRoutes, SignUpRoutes } from './routes'

import {
  GroupState,
  CompetitionChallengeState,
  UserState,
  ArticleState,
  WorkoutState,
  CommentState,
  TrainingState,
  Modal,
  TrainngsVodeosType,
  // RouteProp,
} from 'store/types'

let navigator: any

type Params = {
  back?: TRoutes
  selectDay?: Date
  group?: GroupState | UserState[]
  competition?: CompetitionChallengeState
  competitionId?: number
  challengeId?: number
  groupId?: number
  article?: ArticleState
  articleId?: number
  video?: ArticleState
  user?: UserState
  profile?: UserState
  userId?: number
  membersList?: UserState[]
  workout?: WorkoutState
  workoutId?: number
  title?: string
  memberRoute?: TRoutes
  comment?: CommentState
  refresh?: boolean
  type?: string
  trainings?: TrainingState
  isRegister?: boolean
  resetPassword?: boolean
  email?: string
  trainingId?: number
  modal?: Modal
  auth?: {
    firstName?: string
    lastName?: string
    email?: string
  }
  winnigCriteria?: string
  trainingsVideos?: TrainngsVodeosType
}

export const isMountedRef = React.createRef<boolean>()
export const navigationRef = React.createRef<NavigationContainerRef>()

export type NestedRoute = {
  screen?: TRoutes
  params?: Params
}

function navigate(
  routeName: RootRoutes | SignUpRoutes,
  params?: NestedRoute | Params
) {
  if (navigationRef.current && isMountedRef.current) {
    navigationRef.current?.navigate(routeName, params)
  }
}

// function push(routeName: TRoutes) {
//   navigator.dispatch(
//     StackActions.push({
//       routeName,
//     })
//   )
// }

function reset(params: any) {
  // navigator.dispatch(
  //   StackActions.reset({
  //     index: 0,
  //     key: null,
  //     actions: [
  //       CommonActions.navigate({
  //         routeName,
  //         params,
  //       }),
  //     ],
  //   })
  // )
  navigationRef.current?.dispatch(CommonActions.reset(params))
}

function replace(name: any, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params))
}

// function pop() {
//   navigator.dispatch(StackActions.pop({}))
// }

function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop())
}

function openDrawer() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer())
}

function closeDrawer() {
  navigationRef.current?.dispatch(DrawerActions.closeDrawer())
}

function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack())
}

const getActiveRouteName = (): string => {
  const state = navigationRef.current?.getRootState()
  let routeName = ''
  if (state?.routes) {
    routeName = getActiveRouteNameFromState(state)
  }
  return routeName
}

const getActiveRouteNameFromState = (
  state: NavigationState | PartialState<NavigationState>
): string => {
  if (!state.routes) {
    return ''
  }

  const route = state.routes[state.index!]

  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteNameFromState(route.state)
  }

  return route.name
}

function getNavigationState(): any[] | null {
  if (!navigator) {
    return null
  }
  return navigator.state
}

export default {
  navigate,
  reset,
  replace,
  // pop,
  popToTop,
  // setTopLevelNavigator,
  getActiveRouteName,
  openDrawer,
  closeDrawer,
  goBack,
  // push,
  // getNavigationState,
}
