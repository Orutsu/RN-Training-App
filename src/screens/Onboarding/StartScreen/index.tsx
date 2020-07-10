import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Logo from 'assets/images/logo.svg'
import TextLogo from 'assets/images/textLogo.svg'
import fon from 'assets/images/fonWelcome.png'

import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'styles/helpers'
import layoutStyles from 'styles/layoutStyles'
import Title from 'components/UI/Title'
import { spacingStyles, COLORS } from 'styles'
import Button from 'components/UI/Button'
import NavigationService from 'navigation/helpers/NavigationService'

const StartScreen = () => (
  <ImageBackground
    source={fon}
    style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
  >
    <SafeAreaView
      style={[
        layoutStyles.centerColumn,
        layoutStyles.flex1,
        spacingStyles.pH25,
      ]}
    >
      <View style={layoutStyles.centerColumn}>
        <View style={spacingStyles.mB20}>
          <Logo />
        </View>
        <TextLogo />
      </View>
      <Title style={spacingStyles.mT60}>Getting Started!</Title>
      <Button
        text="Sign In"
        style={spacingStyles.mT20}
        onPress={() => NavigationService.navigate('SignIn')}
      />
      <Button
        text="Sign Up"
        style={spacingStyles.mT20}
        background={COLORS.WHITE}
        color={COLORS.BLACK_GREY}
        onPress={() => NavigationService.navigate('SignUp')}
      />
    </SafeAreaView>
  </ImageBackground>
)

export default StartScreen
