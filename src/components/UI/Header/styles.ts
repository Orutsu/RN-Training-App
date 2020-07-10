import { StyleSheet } from 'react-native'
import { typo, COLORS } from 'styles'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'styles/helpers'

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 30,
    paddingLeft: 45,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    zIndex: 10,
    elevation: 7,
  },
  text: {
    color: COLORS.HEADER_BLACK,
    ...typo.bodyM22,
  },
  logo: {
    position: 'absolute',
    paddingBottom: 10,
  },
})
