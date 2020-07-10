import React from 'react'
import {
  TextStyle,
  View,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native'

import AddIcon from 'assets/images/addIcon.svg'

import styles from './styles'
import { HIT_SLOT_DEFAULT, SCREEN_HEIGHT } from 'styles/helpers'

interface Props {
  style?: TextStyle | TextStyle[]
  image?: ImageSourcePropType
}

const RoundPicture: React.FC<Props> = ({ children, image, style }) => (
  <ImageBackground
    source={image}
    style={[styles.container, style]}
    imageStyle={styles.imageStyle}
  >
    <View style={styles.addField}>
      <TouchableOpacity onPress={() => null} hitSlop={HIT_SLOT_DEFAULT}>
        <AddIcon />
      </TouchableOpacity>
    </View>
  </ImageBackground>
)

export default RoundPicture
