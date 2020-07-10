import { StyleSheet } from 'react-native'
import { isSmallDevice, isVSmallDevice } from 'styles/helpers'
import { COLORS } from 'styles'

export default StyleSheet.create({
  topContent: {
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  scroll: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  scrollContent: {
    paddingBottom: 80,
    backgroundColor: '#fff',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerColumn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  wrapper: {
    paddingHorizontal: isSmallDevice ? 25 : 30,
    paddingBottom: 20,
  },
  paddingTabNav: {
    paddingBottom: isVSmallDevice ? 70 : 50,
  },
  flex1: {
    flex: 1,
  },
  halfFlex: {
    flex: 0.45,
  },
  alignFlexStart: {
    justifyContent: 'flex-start',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  w100: {
    width: '100%',
  },
  dn: {
    display: 'none',
  },
  df: {
    display: 'flex',
  },
  posa: {
    position: 'absolute',
  },
  posr: {
    position: 'relative',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
})
