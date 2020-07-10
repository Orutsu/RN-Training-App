import React from 'react'
import { Text, TextStyle } from 'react-native'

import styles from './styles'

interface Props {
  style?: TextStyle | TextStyle[]
}

const Title: React.FC<Props> = ({ children, style }) => (
  <Text style={[styles.text, style]}>{children}</Text>
)

export default Title
