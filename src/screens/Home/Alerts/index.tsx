import React, { useState } from 'react'
import { SafeAreaView, View, Text, ScrollView } from 'react-native'

import CheckMark from 'assets/images/icons/checkMark.svg'

import Header from 'components/UI/Header'

import { COLORS, spacingStyles } from 'styles'
import layoutStyles from 'styles/layoutStyles'
import styles from './styles'

const Alerts = () => {
  const [state, setstate] = useState([
    { title: 'Lorem ipsum' },
    { title: 'Lorem ipsum' },
    { title: 'Lorem ipsum' },
    { title: 'Lorem ipsum' },
    { title: 'Lorem ipsum' },
  ])

  const AlertsMessages = state.map(item => (
      <View style={styles.inputContainer} key={Math.floor(Math.random() * Math.floor(1000))}>
        <View style={styles.checkMarkContainer}>
          <CheckMark />
        </View>
        <Text style={styles.alertTitle}>{item.title}</Text>
      </View>
  ))

  return (
    <SafeAreaView style={[layoutStyles.flex1]}>
      <Header>Alerts</Header>
      <ScrollView
        style={[
          spacingStyles.pT20,
          spacingStyles.pL15,
          spacingStyles.pR15,
          {
            backgroundColor: COLORS.CREAMY_WHITE,
          },
          layoutStyles.flex1,
        ]}
      >
        <View
          style={[
            layoutStyles.centerColumn,
            spacingStyles.mT15,
            spacingStyles.mB15,
          ]}
        >
          <Text style={styles.mainText}>YOU COULD MISS</Text>
        </View>
        {AlertsMessages}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Alerts
