import React from 'react'
import {
  TouchableOpacity,
  ViewStyle,
  Text,
  TextStyle,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
} from 'react-native'

import styles from './styles'
import { spacingStyles } from 'styles'
import { SvgProps } from 'react-native-svg'

interface Props extends TouchableOpacityProps {
  text?: string
  style?: ViewStyle | ViewStyle[]
  textStyle?: TextStyle | TextStyle[]
  background?: string
  color?: string
  isLoading?: boolean
  leftIcon?: any
}

const Button: React.FC<Props> = ({
  text,
  background,
  color,
  textStyle,
  style,
  isLoading,
  leftIcon,
  ...restProps
}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    {...restProps}
    style={[
      styles.container,
      { backgroundColor: background || '#434345' },
      style,
    ]}
  >
    {leftIcon && leftIcon({})}
    <Text style={[styles.text, { color: color || '#fff' }, textStyle]}>
      {text}
    </Text>
    {isLoading && (
      <View style={spacingStyles.mL20}>
        <ActivityIndicator />
      </View>
    )}
  </TouchableOpacity>
)

export default Button
