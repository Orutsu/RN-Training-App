import { StyleSheet } from 'react-native'
import { typo, COLORS } from 'styles'

export default StyleSheet.create({
  text: {
    color: COLORS.WHITE,
    ...typo.bodyM32,
  },
})
