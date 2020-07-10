import React from 'react'
import {
  TextStyle,
  View,
  ImageBackground,
  ImageSourcePropType,
  Text,
  Image,
} from 'react-native'

import CalendarIcon from 'assets/images/newsIcons/calendar.svg'
import ClockIcon from 'assets/images/newsIcons/clock.svg'

import styles from './styles'
import layoutStyles from 'styles/layoutStyles'
import { spacingStyles } from 'styles'

export enum NewsDesigh {
  BLACK = 'black',
  WHITE = 'white',
}

type UserInfo = {
  name: string
  status: string
  avatar: ImageSourcePropType
}

type NewsInfo = {
  date: string
  time: string
  description: string
}

interface Props {
  style?: TextStyle | TextStyle[]
  image?: any
  type: NewsDesigh
  user: UserInfo
  news: NewsInfo
}

const ItemNews: React.FC<Props> = ({ image, style, type, user, news }) => {
  if (type === NewsDesigh.BLACK) {
    return (
      <ImageBackground
        source={image}
        style={[styles.blackContainer, style]}
        imageStyle={styles.imageStyle}
        resizeMode="cover"
      >
        <View
          style={[styles.bottomField, spacingStyles.pH15, spacingStyles.pV15]}
        >
          <View style={[layoutStyles.row, layoutStyles.flexEnd]}>
            <View
              style={[
                layoutStyles.column,
                layoutStyles.flexEnd,
                spacingStyles.mR15,
              ]}
            >
              <Text style={[styles.blackAuthorNameText]}>{user.name}</Text>
              <View
                style={[
                  layoutStyles.row,
                  layoutStyles.flexEnd,
                  layoutStyles.alignCenter,
                ]}
              >
                <CalendarIcon style={spacingStyles.mL5} />
                <Text style={styles.infoTextStyle}>{news.date}</Text>
                <Text style={styles.infoTextStyle}>|</Text>
                <ClockIcon style={spacingStyles.mL5} />
                <Text style={styles.infoTextStyle}>{news.time}</Text>
                <Text style={styles.infoTextStyle}>|</Text>
                <Text style={styles.authorRoleTextStyle}>{user.status}</Text>
              </View>
            </View>
            <Image style={styles.authorImage} source={user.avatar} />
          </View>
          <View style={spacingStyles.mT15}>
            <Text style={styles.blackDescriptionText}>{news.description}</Text>
          </View>
        </View>
      </ImageBackground>
    )
  } else {
    return (
      <View style={[styles.whiteContainer, style]}>
        <View style={[layoutStyles.row, layoutStyles.flexEnd]}>
          <View
            style={[
              layoutStyles.column,
              layoutStyles.flexEnd,
              spacingStyles.mR15,
            ]}
          >
            <Text style={[styles.whiteAuthorNameText]}>{user.name}</Text>
            <View
              style={[
                layoutStyles.row,
                layoutStyles.flexEnd,
                layoutStyles.alignCenter,
              ]}
            >
              <CalendarIcon style={spacingStyles.mL5} />
              <Text style={styles.infoTextStyle}>{news.date}</Text>
              <Text style={styles.infoTextStyle}>|</Text>
              <ClockIcon style={spacingStyles.mL5} />
              <Text style={styles.infoTextStyle}>{news.time}</Text>
              <Text style={styles.infoTextStyle}>|</Text>
              <Text style={styles.authorRoleTextStyle}>{user.status}</Text>
            </View>
          </View>
          <Image style={styles.authorImage} source={user.avatar} />
        </View>
        <View style={spacingStyles.mT15}>
          <Text style={styles.whiteDescriptionText}>{news.description}</Text>
        </View>
        <Image style={styles.whiteImage} source={image} />
      </View>
    )
  }
}

export default ItemNews
