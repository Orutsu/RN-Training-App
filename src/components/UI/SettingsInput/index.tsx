import React, { useState, useRef } from 'react'
import { TextStyle, View, Text, TextInput, TextInputProps } from 'react-native'

import ChangeIcon from 'assets/images/changeIcon.svg'
import CheckMark from 'assets/images/icons/checkMark.svg'

import styles from './styles'
import { HIT_SLOT_DEFAULT } from 'styles/helpers'
import { spacingStyles } from 'styles'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends TextInputProps {
  style?: TextStyle | TextStyle[]
  value?: string
}

const SettingsInput: React.FC<Props> = ({
  children,
  value,
  style,
  ...restProps
}) => {
  const [isClosed, setIsClosed] = useState(true)

  return (
    <>
      {isClosed ? (
        <View style={[styles.closedContainer, spacingStyles.pH15, style]}>
          <TouchableOpacity
            onPress={() => {
              setIsClosed(false)
            }}
          >
            <ChangeIcon />
          </TouchableOpacity>
          <Text style={styles.textStyle}>{value}</Text>
        </View>
      ) : (
        <View style={[styles.inputContainer, style]}>
          <TouchableOpacity
            onPress={() => setIsClosed(true)}
            style={styles.icon}
            hitSlop={HIT_SLOT_DEFAULT}
          >
            <CheckMark />
          </TouchableOpacity>
          <TextInput style={styles.input} value={value} {...restProps} />
        </View>
      )}
    </>
  )
}

export default SettingsInput
