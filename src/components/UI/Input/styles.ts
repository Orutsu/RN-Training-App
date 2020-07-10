import { StyleSheet } from 'react-native'
import { typo, COLORS } from 'styles'
import { SCREEN_WIDTH } from 'styles/helpers'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS.WHITE,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.WHITE,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  error: {
    borderColor: COLORS.ERROR,
    borderWidth: 1.5,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    textAlign: 'right',
    width: '100%',
    ...typo.bodyR16,
  },
  icon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 100,
    marginLeft: 5,
  },
  inputErr: {
    color: COLORS.ERROR,
  },
  dateSelect: { width: SCREEN_WIDTH * 0.9, position: 'absolute', zIndex: 100 },
})
