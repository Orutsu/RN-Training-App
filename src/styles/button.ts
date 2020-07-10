import { StyleSheet } from 'react-native'

import { COLORS } from 'styles'

export default StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 6,
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE_LIGHT,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
    // paddingHorizontal: 35,
  },
})
