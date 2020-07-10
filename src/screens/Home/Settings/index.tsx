import React, { useState } from 'react'
import { SafeAreaView, View, Image, ScrollView, Text } from 'react-native'

import Header from 'components/UI/Header'
import RoundPicture from 'components/UI/RoundPicture'
import SettingsInput from 'components/UI/SettingsInput'

import SettingsBg from 'assets/images/fons/settingsBg.png'
import SettingsMan from 'assets/images/ilidan.jpg'
import SignoutIcon from 'assets/images/icons/signout.svg'

import layoutStyles from 'styles/layoutStyles'
import { widthStyles, spacingStyles, COLORS, typo } from 'styles'
import styles from './styles'
import Button from 'components/UI/Button'
import { useDispatch } from 'react-redux'
import { setIsAuth } from 'store/auth/actions'

const Dashboard_Home = () => {
  const dispatch = useDispatch()
  const [nameLastName, setNameLastName] = useState('Иллидан Ярость Бури')
  const [phone, setPhone] = useState('+38 (057) 700-69-96')
  const [email, setEmail] = useState('ilidan@gmail.com')

  const onSignut = () => {
    dispatch(setIsAuth(false))
  }

  return (
    <ScrollView style={styles.bg} contentContainerStyle={spacingStyles.pB40}>
      <SafeAreaView style={[layoutStyles.flex1, styles.wrapper]}>
        <Header>Settings</Header>
        <View style={[styles.bg, layoutStyles.flex1]}>
          <View>
            <Image source={SettingsBg} style={[styles.img]} />
          </View>
          <View style={layoutStyles.centerColumn}>
            <View style={[widthStyles.w100, spacingStyles.pH15]}>
              <RoundPicture image={SettingsMan} style={spacingStyles.mT40} />
              <View>
                <Text style={[styles.youHaveText]}>
                  You have{' '}
                  <Text style={[styles.lessonsText]}> 3 Lessons Left</Text>
                </Text>
              </View>
              <SettingsInput
                value={nameLastName}
                style={spacingStyles.mT10}
                onChangeText={value => setNameLastName(value)}
              />
              <SettingsInput
                value={phone}
                keyboardType="phone-pad"
                onChangeText={value => setPhone(value)}
              />
              <SettingsInput
                value={email}
                keyboardType="email-address"
                onChangeText={value => setEmail(value)}
              />
              <SettingsInput value="forDate" />
              <SettingsInput value="forPassword" />
              <Button
                style={[spacingStyles.mT50, spacingStyles.pH25, styles.btn]}
                text="SIGN OUT"
                background={COLORS.WHITE}
                color={COLORS.ORANGE_TEXT}
                textStyle={spacingStyles.mL10}
                leftIcon={SignoutIcon}
                onPress={onSignut}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Dashboard_Home
