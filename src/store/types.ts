export type Gender = 'male' | 'female' | string

export type Modal = {
  type: ModalType
  actionType: ModalActionType
  isShow: boolean
  title?: string
  text: string
  data?: any
}

export type ErrorState = string | null

export type LoadingState = boolean

export type ModalActionType =
  | 'leave'
  | 'join'
  | 'date'
  | 'time'
  | 'broadcast'
  | 'fetch_err'
  | ''
export type ModalType = 'confirm' | 'choose' | 'success' | 'error'

export interface UserState {
  email?: string
  first_name?: string
  id?: number
  token?: string
  user_type?: string
  uses_card?: boolean
}
