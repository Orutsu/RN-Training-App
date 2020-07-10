import { StyleSheet } from 'react-native'
import { COLORS, typo } from 'styles'

export default StyleSheet.create({
  heading: {
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  text: {
    ...typo.bodyR14,
    color: COLORS.GREY_TEXT,
    lineHeight: 20,
  },
})
