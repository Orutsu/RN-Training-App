import React, { useState } from 'react'
import {
  Text,
  TextStyle,
  View,
  TouchableHighlightProps,
  TouchableHighlight,
} from 'react-native'

import styles from './styles'
import { spacingStyles, COLORS } from 'styles'

interface Props extends TouchableHighlightProps {
  style?: TextStyle | TextStyle[]
  onPress: () => void
  icon?: () => React.ReactNode
  amount?: number
  name?: string
}

const DashboardCard: React.FC<Props> = ({
  style,
  onPress,
  icon,
  name,
  amount,
  ...restProps
}) => {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <TouchableHighlight
      style={styles.block}
      underlayColor={COLORS.ORANGE}
      onShowUnderlay={() => setIsPressed(true)}
      onHideUnderlay={() => setIsPressed(false)}
      onPress={onPress}
      {...restProps}
    >
      <View style={styles.container}>
        {icon && icon()}
        <Text
          style={[
            styles.amountText,
            isPressed ? { color: COLORS.WHITE } : { color: COLORS.ORANGE },
          ]}
        >
          {amount}
        </Text>
        <View
          style={[
            styles.containerName,
            spacingStyles.mT5,
            spacingStyles.pT5,
            isPressed
              ? { borderTopColor: COLORS.WHITE }
              : {
                  borderTopColor: COLORS.LIGHT_GREY,
                },
          ]}
        >
          <Text
            style={[
              styles.nameText,
              isPressed
                ? { color: COLORS.WHITE, borderTopColor: COLORS.WHITE }
                : {
                    color: COLORS.LIGHT_GREY,
                    borderTopColor: COLORS.LIGHT_GREY,
                  },
            ]}
          >
            {name}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default DashboardCard
