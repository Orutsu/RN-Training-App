import { StyleSheet } from 'react-native'
import { typo, COLORS } from 'styles'

export default StyleSheet.create({
  container: {
    borderBottomColor: COLORS.WHITE,
    borderBottomWidth: 1,
  },
  text: {
    color: COLORS.WHITE,
    ...typo.bodyM14,
  },
})
