import { StyleSheet } from 'react-native'
import { COLORS, typo } from 'styles'
import { isAndroid } from 'styles/helpers'

export default StyleSheet.create({
  mainText: {
    color: COLORS.BLACK_GREY,
    ...typo.bodyM32,
  },
  inputContainer: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: 8,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.07,
    shadowRadius: 5.97,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: isAndroid ? 'hidden' : 'visible',
    margin: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkMarkContainer: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  alertTitle: {
    color: COLORS.BLACK_GREY,
    ...typo.bodyM16,
  },
})
