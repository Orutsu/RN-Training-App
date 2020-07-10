import { StyleSheet } from 'react-native'
import { typo, COLORS } from 'styles'
import { isAndroid } from 'styles/helpers'

export default StyleSheet.create({
  closedContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.BLACK_GREY,
    ...typo.bodyM16,
  },
  inputContainer: {
    width: '100%',
    height: 50,
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
  },
  input: {
    textAlign: 'right',
    width: '80%',
    height: 50,
    paddingRight: 15,
    ...typo.bodyM16,
  },
  icon: {
    width: 45,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 100,
    backgroundColor: COLORS.CREAMY_WHITE,
    flex: 1,
  },
})
