import React, { useState, useCallback } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Logo from 'assets/images/logo.svg'
import Eye from 'assets/images/eye.svg'
import fon from 'assets/images/fonWelcome.png'
import Person from 'assets/images/person.svg'
import Calendar from 'assets/images/calendar.svg'
import Envelope from 'assets/images/envelope.svg'
import Phone from 'assets/images/phone.svg'

import Title from 'components/UI/Title'
import Button from 'components/UI/Button'
import Input from 'components/UI/Input'
import Link from 'components/UI/Link'

import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'styles/helpers'
import layoutStyles from 'styles/layoutStyles'
import { spacingStyles, COLORS, typo } from 'styles'
import useForm from 'hooks/useFormHooks'
import { useCreateRequest } from 'hooks/apiClientHooks'
import { isEmptyStr, isEmailValid } from 'helpers/regexp'
import { storeData, getData } from 'utils/asyncStorage'
import DateSelect from 'components/UI/Input/DateSelect'
import logger from 'utils/logger'
import { setIsAuth } from 'store/auth/actions'
import { useDispatch } from 'react-redux'

const initialState = {
  nameLastName: '',
  phone: '',
  email: '',
  date: '',
  password: '',
}

const SignUp = () => {
  const dispatch = useDispatch()
  const { formState, updateFormValuesAction, updateFormErrors } = useForm(
    initialState
  )

  const { nameLastName, phone, email, date, password, errors } = formState

  const [isPasswordVisible, setPasswordVisibility] = useState(true)

  const validate = useCallback(
    (fieldName?: keyof typeof initialState) => {
      let isValid = true
      if (!fieldName || fieldName === 'nameLastName') {
        if (isEmptyStr(nameLastName)) {
          updateFormErrors({
            nameLastName: 'Please enter your name / last name',
          })
          isValid = false
        }
      }

      if (!fieldName || fieldName === 'phone') {
        if (isEmptyStr(phone) || phone.length < 4) {
          updateFormErrors({
            phone: 'Please enter your phone',
          })
          isValid = false
        }
      }

      if (!fieldName || fieldName === 'email') {
        if (isEmptyStr(email) || email.length < 4) {
          updateFormErrors({
            email: 'Please enter email',
          })
          isValid = false
        }

        if (!isEmailValid(email)) {
          updateFormErrors({
            email: 'Invalid email',
          })
          isValid = false
        }
      }

      if (!fieldName || fieldName === 'date') {
        if (isEmptyStr(date)) {
          updateFormErrors({
            date: 'Please enter your birthday',
          })
          isValid = false
        }
      }

      if (!fieldName || fieldName === 'password') {
        if (isEmptyStr(password) || password.length < 4) {
          updateFormErrors({
            password: 'Please enter password',
          })
          isValid = false
        }
      }

      return isValid
    },
    [nameLastName, phone, email, date, password]
  )

  const onSignUp = async () => {
    if (!validate()) return false
    dispatch(setIsAuth(true))
    // місце для api
  }

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      extraHeight={100}
    >
      <ImageBackground
        source={fon}
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      >
        <SafeAreaView
          style={[
            // layoutStyles.centerColumn,
            layoutStyles.alignFlexStart,
            spacingStyles.pH25,
          ]}
        >
          <View style={[layoutStyles.centerColumn, spacingStyles.mT40]}>
            <View>
              <Logo width="88" height="68" />
            </View>
          </View>
          <View style={[layoutStyles.centerColumn]}>
            <Title style={[typo.bodyM32]}>Sign Up</Title>
          </View>
          <View style={[spacingStyles.mT15]}>
            <Input
              style={spacingStyles.mT10}
              icon={() => <Person />}
              placeholder="Name / Last Name"
              onChangeText={value =>
                updateFormValuesAction({ nameLastName: value })
              }
              error={errors.nameLastName}
              onBlur={() => validate('nameLastName')}
            />
            <Input
              style={spacingStyles.mT10}
              icon={() => <Phone />}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={value => updateFormValuesAction({ phone: value })}
              error={errors.phone}
              onBlur={() => validate('phone')}
            />
            <Input
              style={spacingStyles.mT10}
              icon={() => <Envelope />}
              placeholder="E-mail"
              onChangeText={value => updateFormValuesAction({ email: value })}
              error={errors.email}
              onBlur={() => validate('email')}
            />
            <DateSelect
              style={[spacingStyles.mT10]}
              placeholder="Date of Birth"
              icon={() => <Calendar />}
              value={date}
              onChangeDate={value => {
                validate('date')
                updateFormValuesAction({ date: value })
              }}
              error={errors.date}
            />
            <Input
              style={spacingStyles.mT10}
              icon={() => <Eye fillOpacity={isPasswordVisible ? 1 : 0.5} />}
              onIconPress={() => setPasswordVisibility(!isPasswordVisible)}
              placeholder="Password"
              secureTextEntry={isPasswordVisible}
              onChangeText={value =>
                updateFormValuesAction({ password: value })
              }
              error={errors.password}
              onBlur={() => validate('password')}
            />
          </View>
          <Button
            text="Sign Up"
            onPress={onSignUp}
            style={spacingStyles.mT15}
          />
          <View
            style={[
              layoutStyles.spaceBetween,
              layoutStyles.w100,
              spacingStyles.mT30,
            ]}
          >
            <Link style={typo.bodyM18} url="SignIn">
              Sign In
            </Link>
            <Text style={[typo.bodyM18, { color: COLORS.BLACK_GREY }]}>
              Do you haven't account?
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default SignUp
