import AsyncStorage from '@react-native-community/async-storage'
import logger from './logger'

const storeData = async (key: string, value: object) => {
  try {
    const jsonValue = JSON.stringify(value)
    const res = await AsyncStorage.setItem(`@${key}`, jsonValue)
    return res
  } catch (e) {
    logger.log('async storage', e)
    return e
  }
}

const getData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(`@${key}`)
    logger.log('value', value)
    return value !== null ? JSON.parse(value) : null
  } catch (e) {
    logger.log('async storage', e)
    return e
  }
}

export { storeData, getData }
