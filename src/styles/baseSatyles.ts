import { StyleSheet } from 'react-native'

import { COLORS, typo } from 'styles'
import * as FONTS from 'styles/fontFamily'

export default StyleSheet.create({
  headerWr: {
    paddingTop: 0,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // paddingLeft: 10,
    // paddingRight: 56,
    marginVertical: 30,
  },
  titleContainer: {
    height: 28,
    // alignSelf: 'center',
    overflow: 'visible',
  },
  title: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontSize: 24,
    fontWeight: '600',
    alignSelf: 'center',
    bottom: 7,
  },
  subscription: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    // paddingTop: 18,
    fontSize: 24,
    lineHeight: 33,
    textAlign: 'center',
  },
  feedBlokWr: {
    backgroundColor: '#fff',
    borderRadius: 22,
    flex: 1,
    shadowColor: COLORS.BORDER_GREY,
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 2,
    // minHeight: 400
  },
  feedBlokHeader: {
    borderBottomColor: '#D2EBFF',
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingVertical: 12,
  },
  feedBlokTitle: {
    fontSize: 16,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontWeight: '400',
  },
  textBtn: {
    color: COLORS.TEXT_SECOND,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontWeight: 'bold',
  },
  arcticlePrewievWr: {
    padding: 15,
  },
  arcticleImg: {
    width: '100%',
    height: 140,
  },
  arcticleTitle: {
    marginTop: 15,
    fontSize: 12,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontWeight: '400',
  },
  arcticleDesc: {
    marginTop: 15,
    fontSize: 10,
    fontFamily: FONTS.MONTSERRAT_REGULAR,
    fontWeight: '200',
  },
  errorText: {
    color: COLORS.ERROR,
    ...typo.bodyR14,
  },
})
