import { StyleSheet } from 'react-native'
import { typo, COLORS } from 'styles'
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'styles/helpers'

export default StyleSheet.create({
  blackContainer: {
    width: '100%',
    height: 325,
    backgroundColor: COLORS.LIGHT_GREY,
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginTop: 10,
  },
  imageStyle: {
    width: '100%',
    height: 325,
    overflow: 'hidden',
  },
  bottomField: {
    width: '100%',
    backgroundColor: 'rgba(68, 68, 71, 0.9)',
  },
  blackAuthorNameText: {
    textAlign: 'right',
    color: COLORS.WHITE,
    ...typo.bodyM16,
  },
  infoTextStyle: {
    marginLeft: 5,
    color: COLORS.LIGHT_GREY,
    ...typo.bodyM12,
  },
  authorRoleTextStyle: {
    marginLeft: 5,
    color: COLORS.ORANGE,
    ...typo.bodyM12,
  },
  authorImage: {
    borderRadius: 100,
  },
  blackDescriptionText: {
    textAlign: 'right',
    color: COLORS.WHITE,
    ...typo.bodyM14,
  },
  whiteContainer: {
    marginTop: 10,
    width: '100%',
    height: 325,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignSelf: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 15,
  },
  whiteAuthorNameText: {
    textAlign: 'right',
    color: COLORS.BLACK_GREY,
    ...typo.bodyM16,
  },
  whiteDescriptionText: {
    textAlign: 'right',
    color: COLORS.LIGHT_GREY,
    ...typo.bodyM14,
  },
  whiteImageContainer: {
    marginTop: 15,
    overflow: 'hidden',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  whiteImage: {
    borderRadius: 8,
    height: 175,
    width: '100%',
    resizeMode: 'cover',
  },
})
