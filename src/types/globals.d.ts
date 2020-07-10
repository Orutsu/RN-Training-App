declare module '*.png' {
  const value: any
  export = value
}

declare module 'react-native-uuid'
declare module 'react-native-actionsheet'

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  export default content
}
