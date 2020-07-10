// eslint-disable-next-line max-classes-per-file
declare module 'react-native-push-notification' {
  export interface PushNotificationPermissions {
    alert?: boolean
    badge?: boolean
    sound?: boolean
  }

  export interface PushNotificationMessage {
    foreground: boolean
    userInteraction: boolean
    title: string
    message: string
    data: object
    subText?: string
    badge: number
    alert: object
    sound: string
    finish: (fetchResult: string) => void
    'google.message_id': string
    id: 'string'
    notification?: {
      tag: string
      body: string
      title: string
    }
  }

  export interface PushNotificationOptions {
    onRegister?: (token: { os: string; token: string }) => void
    onNotification?: (notification: PushNotificationMessage) => void
    onError?: (err: string) => void
    senderID?: string
    permissions?: PushNotificationPermissions
    popInitialNotification?: boolean
    requestPermissions?: boolean
  }

  export type PriorityType = 'max' | 'high' | 'low' | 'min' | 'default'
  export type RepeatType = 'week' | 'day' | 'hour' | 'minute' | 'time'
  export type VisibilityType = 'private' | 'public' | 'secret'
  export type ImportanceType =
    | 'default'
    | 'max'
    | 'high'
    | 'low'
    | 'min'
    | 'none'
    | 'unspecified'

  export class PushNotificationObject {
    /* Android only properties */
    id?: string

    ticker?: string

    autoCancel?: boolean

    largeIcon?: string

    smallIcon?: string

    bigText?: string

    subText?: string

    color?: string

    vibrate?: boolean

    vibration?: number

    tag?: string

    group?: string

    ongoing?: boolean

    priority?: PriorityType

    visibility?: VisibilityType

    importance?: ImportanceType

    /* iOS only properties */
    alertAction?: any

    category?: any

    userInfo?: any

    /* iOS and Android properties */
    title?: string

    message: string

    playSound?: boolean

    soundName?: string

    number?: string

    repeatType?: RepeatType

    repeatTime?: number

    actions?: string
  }

  export class PushNotificationScheduleObject extends PushNotificationObject {
    date: Date
  }

  interface PushNotification {
    configure(options: PushNotificationOptions): void
    unregister(): void
    localNotification(details: PushNotificationObject): void
    localNotificationSchedule(details: PushNotificationScheduleObject): void
    requestPermissions(
      permissions?: Array<'alert' | 'badge' | 'sound'>
    ): Promise<PushNotificationPermissions>
    subscribeToTopic(topic: string): void
    presentLocalNotification(details: PushNotificationObject): void
    scheduleLocalNotification(details: PushNotificationScheduleObject): void
    cancelLocalNotifications(details: object): void
    cancelAllLocalNotifications(): void
    setApplicationIconBadgeNumber(badgeCount: number): void
    getApplicationIconBadgeNumber(callback: (badgeCount: number) => void): void
    popInitialNotification(
      callback: (notification: PushNotificationMessage | null) => void
    ): void
    abandonPermissions(): void
    checkPermissions(
      callback: (permissions: PushNotificationPermissions) => void
    ): void
    registerNotificationActions(actions: string[]): void
    clearAllNotifications(): void
  }
  const PushNotification: PushNotification

  export default PushNotification
}
