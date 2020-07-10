import React from 'react'
import {
  TextInputProps,
  TextInput,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native'
import styles from './styles'
import { COLORS } from 'styles'
import { HIT_SLOT_DEFAULT } from 'styles/helpers'

interface Props extends TextInputProps {
  style?: ViewStyle | ViewStyle[] | TextStyle
  placeholderTextColor?: string
  icon?: () => React.ReactNode
  onIconPress?: () => void
  error?: boolean | string
}

const Input: React.FC<Props> = ({
  style,
  placeholderTextColor,
  error,
  icon,
  onIconPress,
  ...restProps
}) => (
  <View style={[styles.container, style, error ? styles.error : {}]}>
    <TouchableOpacity
      onPress={onIconPress}
      style={styles.icon}
      hitSlop={HIT_SLOT_DEFAULT}
    >
      {icon && icon()}
    </TouchableOpacity>
    <View style={styles.inputContainer}>
      <TextInput
        selectionColor={COLORS.ERROR}
        style={[styles.input, error && styles.inputErr]}
        placeholderTextColor={
          error ? COLORS.ERROR : placeholderTextColor || COLORS.LIGHT_GREY
        }
        {...restProps}
      />
    </View>
  </View>
)

export default Input
