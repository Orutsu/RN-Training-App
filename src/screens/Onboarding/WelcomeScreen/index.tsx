import React, { useEffect } from 'react'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Logo from 'assets/images/logo.svg'
import TextLogo from 'assets/images/textLogo.svg'
import fon from 'assets/images/fonWelcome.png'

import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'styles/helpers'
import layoutStyles from 'styles/layoutStyles'
import { useTypedSelector } from 'store'
import NavigationService from 'navigation/helpers/NavigationService'

const WelcomeScreen = () => {
  const { isLoading } = useTypedSelector(store => store.auth)
  useEffect(() => {
    NavigationService.navigate('Start')
  }, [isLoading])
  return (
    <ImageBackground
      source={fon}
      style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
    >
      <SafeAreaView style={[layoutStyles.centerColumn, layoutStyles.flex1]}>
        <Logo />
        <TextLogo />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default WelcomeScreen
