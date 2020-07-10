import React from 'react'
import { Text, TextStyle, View } from 'react-native'

import Logo from 'assets/images/greyLogo.svg'
import Bell from 'assets/images/bell.svg'

import styles from './styles'
import layoutStyles from 'styles/layoutStyles'
import { spacingStyles, positionStyles } from 'styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NavigationService from 'navigation/helpers/NavigationService'

interface Props {
  style?: TextStyle | TextStyle[]
}

const Header: React.FC<Props> = ({ children, style }) => (
  <View style={[styles.container, style]}>
    <View />
    <View style={layoutStyles.centerColumn}>
      <View style={styles.logo}>
        <Logo />
      </View>
      <Text style={styles.text}>{children}</Text>
    </View>
    <TouchableOpacity
      onPress={() =>
        NavigationService.navigate('Home', {
          screen: 'Alerts',
        })
      }
    >
      <Bell />
    </TouchableOpacity>
  </View>
)

export default Header
