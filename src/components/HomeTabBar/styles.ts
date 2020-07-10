import { StyleSheet } from 'react-native'
import { SCREEN_WIDTH, isSmallDevice, SCREEN_HEIGHT } from 'styles/helpers'
import { typo, COLORS } from 'styles'
import logger from 'utils/logger'

logger.log('height', SCREEN_WIDTH)

export default StyleSheet.create({
  fon: {
    width: SCREEN_WIDTH,
  },
  text: {
    ...typo.bodyM14,
    fontSize: isSmallDevice ? 12 : 14,
    color: COLORS.WHITE,
  },
})
