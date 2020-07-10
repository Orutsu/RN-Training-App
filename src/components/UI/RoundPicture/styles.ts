import { StyleSheet } from 'react-native'
import { typo, COLORS } from 'styles'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'styles/helpers'

export default StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.3,
    backgroundColor: COLORS.LIGHT_GREY,
    alignSelf: 'center',
    borderRadius: 100,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  imageStyle: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.3,
    borderRadius: 100,
    overflow: 'hidden',
  },
  addField: {
    width: '100%',
    height: '20%',
    backgroundColor: COLORS.BLACK,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
