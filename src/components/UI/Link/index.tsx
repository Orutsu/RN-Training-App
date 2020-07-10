import React from 'react'
import { Text, TextStyle, View } from 'react-native'

import styles from './styles'
import NavigationService from 'navigation/helpers/NavigationService'
import { TRoutes } from 'navigation/helpers/routes'

interface Props {
  style?: TextStyle | TextStyle[]
  url?: TRoutes
}

const Link: React.FC<Props> = ({ children, url, style }) => (
  <View style={styles.container}>
    <Text
      style={[styles.text, style]}
      onPress={() => url && NavigationService.navigate(url)}
    >
      {children}
    </Text>
  </View>
)

export default Link
