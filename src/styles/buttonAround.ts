import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  container: {
    height: 57,
    width: 57,
  },
  background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    top: Platform.OS === 'ios' ? 0 : -2,
  },
})
