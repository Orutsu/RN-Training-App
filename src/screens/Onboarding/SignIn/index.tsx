import React, { useState, useEffect, useCallback } from 'react'
import { ImageBackground, Text, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Logo from 'assets/images/logo.svg'
import Eye from 'assets/images/eye.svg'
import TextLogo from 'assets/images/textLogo.svg'
import fon from 'assets/images/fonWelcome.png'

import Title from 'components/UI/Title'
import Button from 'components/UI/Button'
import Input from 'components/UI/Input'
import Link from 'components/UI/Link'

import { SCREEN_WIDTH, SCREEN_HEIGHT, isSmallDevice } from 'styles/helpers'
import layoutStyles from 'styles/layoutStyles'
import { spacingStyles, COLORS, typo } from 'styles'
import { useCreateRequest } from 'hooks/apiClientHooks'
import logger from 'utils/logger'
import useForm from 'hooks/useFormHooks'
import { isEmptyStr } from 'helpers/regexp'
import { storeData, getData } from 'utils/asyncStorage'
import { setIsAuth } from 'store/auth/actions'
import { useDispatch } from 'react-redux'

const initialState = {
  phoneEmail: '',
  password: '',
}

const SignIn = () => {
  const dispatch = useDispatch()
  const { formState, updateFormValuesAction, updateFormErrors } = useForm(
    initialState
  )

  const { phoneEmail, password, errors } = formState

  const [isPasswordVisible, setPasswordVisibility] = useState(true)
  const { createEntity, isPending } = useCreateRequest('/api/users/login/')

  const validate = useCallback(
    (fieldName?: keyof typeof initialState) => {
      let isValid = true
      if (!fieldName || fieldName === 'phoneEmail') {
        if (isEmptyStr(phoneEmail)) {
          updateFormErrors({
            phoneEmail: 'Please enter phone or email',
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
    [phoneEmail, password]
  )

  const onSignin = async () => {
    if (!validate()) return

    try {
      dispatch(setIsAuth(true))
    } catch (err) {
      Alert.alert('Something went wrong')
      logger.log('err', err)
    }
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
            layoutStyles.centerColumn,
            layoutStyles.flex1,
            spacingStyles.pH25,
            layoutStyles.alignFlexStart,
          ]}
        >
          <View style={layoutStyles.centerColumn}>
            <View style={[spacingStyles.mT80]}>
              <Logo width="144" height="114" />
            </View>
            <TextLogo width="168" height="40" />
          </View>
          <View
            style={[
              layoutStyles.centerColumn,
              isSmallDevice ? spacingStyles.mT20 : spacingStyles.mT50,
              layoutStyles.w100,
            ]}
          >
            <Title style={spacingStyles.mT20}>Welcome Back!</Title>
            <Input
              style={spacingStyles.mT20}
              placeholder="E-mail or Phone"
              value={phoneEmail}
              onChangeText={value =>
                updateFormValuesAction({ phoneEmail: value })
              }
              error={errors.phoneEmail}
              onBlur={() => validate('phoneEmail')}
            />
            <Input
              style={spacingStyles.mT10}
              icon={() => <Eye fillOpacity={isPasswordVisible ? 1 : 0.5} />}
              onIconPress={() => setPasswordVisibility(!isPasswordVisible)}
              placeholder="Password"
              secureTextEntry={isPasswordVisible}
              value={password}
              onChangeText={value =>
                updateFormValuesAction({ password: value })
              }
              error={errors.password}
              onBlur={() => validate('password')}
            />
            <Link style={spacingStyles.mT15} url="Start">
              Forgot your password?
            </Link>
            <Button
              text="Sign In"
              style={spacingStyles.mT15}
              onPress={onSignin}
              isLoading={isPending}
            />
            <Text
              style={[
                spacingStyles.mT40,
                typo.bodyM18,
                { color: COLORS.BLACK_GREY },
              ]}
            >
              Do you haven't account?
            </Text>
            <Link style={[spacingStyles.mT5, typo.bodyM18]} url="SignUp">
              Sign up
            </Link>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </KeyboardAwareScrollView>
  )
}

export default SignIn
