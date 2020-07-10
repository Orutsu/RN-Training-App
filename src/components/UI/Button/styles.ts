import { StyleSheet } from 'react-native'
import { typo } from 'styles'

export default StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
  },
  text: {
    ...typo.bodyM18,
  },
})
