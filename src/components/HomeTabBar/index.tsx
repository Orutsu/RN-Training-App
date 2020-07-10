import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'

import fon from 'assets/images/fons/fonTabBar.png'
import News from 'assets/images/tabBarIcons/news.svg'
import Categories from 'assets/images/tabBarIcons/categories.svg'
import Levels from 'assets/images/tabBarIcons/levels.svg'
import Home from 'assets/images/tabBarIcons/home.svg'
import Profile from 'assets/images/tabBarIcons/profile.svg'

import NavigationService from 'navigation/helpers/NavigationService'
import styles from './styles'
import { typo, COLORS, spacingStyles, widthStyles } from 'styles'
import layoutStyles from 'styles/layoutStyles'

const HomeTabBar = () => (
  <ImageBackground
    style={[styles.fon, spacingStyles.pH25, layoutStyles.justifyCenter]}
    source={fon}
  >
    <View
      style={[
        widthStyles.w100,
        layoutStyles.spaceBetween,
        spacingStyles.pB20,
        spacingStyles.pT20,
      ]}
    >
      <TouchableOpacity
        style={[layoutStyles.column, layoutStyles.centerColumn]}
        onPress={() =>
          NavigationService.navigate('Home', {
            screen: 'News',
          })
        }
      >
        <News />
        <Text style={[spacingStyles.mT5, styles.text]}>NEWS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[layoutStyles.column, layoutStyles.centerColumn]}
        onPress={() => null}
      >
        <Categories />
        <Text style={[spacingStyles.mT5, styles.text]}>CATEGORIES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[layoutStyles.column, layoutStyles.centerColumn]}
        onPress={() => null}
      >
        <Levels />
        <Text style={[spacingStyles.mT5, styles.text]}>LEVELS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[layoutStyles.column, layoutStyles.centerColumn]}
        onPress={() =>
          NavigationService.navigate('Home', {
            screen: 'Dashboard_Page',
          })
        }
      >
        <Home />
        <Text style={[spacingStyles.mT5, styles.text]}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[layoutStyles.column, layoutStyles.centerColumn]}
        onPress={() =>
          NavigationService.navigate('Home', {
            screen: 'Settings',
          })
        }
      >
        <Profile />
        <Text style={[spacingStyles.mT5, styles.text]}>PROFILE</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
)

export default HomeTabBar
