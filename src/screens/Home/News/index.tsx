import React, { useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'

import Header from 'components/UI/Header'
import ItemNews, { NewsDesigh } from './itemNews'

import NewsExample from 'assets/images/ilidan.jpg'
import AuthorImageExample from 'assets/images/newsIcons/newsAuthorExample.png'

import { COLORS, spacingStyles } from 'styles'
import layoutStyles from 'styles/layoutStyles'
import styles from './styles'
import { ScrollView } from 'react-native-gesture-handler'

const News = () => (
  <SafeAreaView style={[layoutStyles.flex1]}>
    <Header>News</Header>
    <ScrollView
      style={[
        spacingStyles.pT10,
        spacingStyles.pL15,
        spacingStyles.pR15,
        {
          backgroundColor: COLORS.CREAMY_WHITE,
        },
        layoutStyles.flex1,
      ]}
    >
      <ItemNews
        image={NewsExample}
        user={{
          name: 'Иллидан Иллиданов',
          avatar: AuthorImageExample,
          status: 'Admin',
        }}
        news={{
          time: '11:00',
          date: '15.05',
          description:
            'Предатель… На самом деле предали меня. Всеми гонимый. Всеми отринутый. Но я, слепой, вижу то, что недоступно зрячим.',
        }}
        type={NewsDesigh.BLACK}
      />
      <ItemNews
        image={NewsExample}
        user={{
          name: 'Иллидан Иллиданов',
          avatar: AuthorImageExample,
          status: 'Admin',
        }}
        news={{
          time: '11:00',
          date: '15.05',
          description:
            'Предатель… На самом деле предали меня. Всеми гонимый. Всеми отринутый. Но я, слепой, вижу то, что недоступно зрячим. ',
        }}
        type={NewsDesigh.WHITE}
      />
      <View style={spacingStyles.mb50} />
    </ScrollView>
  </SafeAreaView>
)

export default News
