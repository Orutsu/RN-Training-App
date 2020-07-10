export const DASHBOARD_ROUTES = {
  HOME: 'Home',
  QUESTION: 'Question',
} as const

export const SIGNUP_ROUTES = {
  WELCOME: 'Welcome',
  SIGNIN: 'SignIn',
  SIGNUP: 'SignUp',
  START_SCREEN: 'Start',
} as const

export const HOME_ROUTES = {
  DASHBOARD: 'Dashboard_Page',
  SETTINGS: 'Settings',
  ALERTS: 'Alerts',
  NEWS: 'News',
}

type KeysRootRoutes = keyof typeof DASHBOARD_ROUTES
export type RootRoutes = typeof DASHBOARD_ROUTES[KeysRootRoutes]

type KeysDashboardRoutes = keyof typeof DASHBOARD_ROUTES
type DashboardRoutes = typeof DASHBOARD_ROUTES[KeysDashboardRoutes]

type KeysSignUpRoutes = keyof typeof SIGNUP_ROUTES
export type SignUpRoutes = typeof SIGNUP_ROUTES[KeysSignUpRoutes]

export type TRoutes = RootRoutes | DashboardRoutes | SignUpRoutes | HOME_ROUTES
