import { StyleSheet } from 'react-native'
import { typo, COLORS } from 'styles'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'styles/helpers'

export default StyleSheet.create({
  block: {
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    width: SCREEN_WIDTH * 0.45,
    height: SCREEN_HEIGHT * 0.28,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 6.62,

    elevation: 4,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountText: {
    marginTop: 10,
    ...typo.bodyM35,
  },
  nameText: {
    color: COLORS.LIGHT_GREY,
    ...typo.bodyM14,
  },
  containerName: {
    borderTopColor: COLORS.LIGHT_GREY,
    borderTopWidth: 1,
  },
})
