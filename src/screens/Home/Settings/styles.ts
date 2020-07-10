import { StyleSheet } from 'react-native'
import { COLORS, typo } from 'styles'

export default StyleSheet.create({
  bg: {
    backgroundColor: COLORS.CREAMY_WHITE,
  },
  wrapper: {
    backgroundColor: COLORS.WHITE,
  },
  img: {
    width: '100%',
    height: 211,
    position: 'absolute',
  },
  btn: {
    borderColor: COLORS.ORANGE,
    borderWidth: 1,
  },
  youHaveText: {
    color: COLORS.BLACK_GREY,
    ...typo.bodyM16,
    alignSelf: 'center',
    marginTop: 10,
  },
  lessonsText: {
    color: COLORS.ORANGE,
  },
})
