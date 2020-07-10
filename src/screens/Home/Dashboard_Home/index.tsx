import React from 'react'
import { SafeAreaView, View } from 'react-native'

import Header from 'components/UI/Header'

import BookIcon from 'assets/images/bookIcon.svg'
import NewspaperIcon from 'assets/images/newspaperIcon.svg'
import FolderIcon from 'assets/images/folderIcon.svg'
import CalendarIcon from 'assets/images/calendarIcon.svg'

import { COLORS, spacingStyles } from 'styles'
import layoutStyles from 'styles/layoutStyles'
import DashboardCard from 'components/UI/DashboardCard'

const Dashboard_Home = () => (
  <SafeAreaView style={[layoutStyles.flex1]}>
    <Header>Dashboard</Header>
    <View
      style={[
        spacingStyles.pT20,
        layoutStyles.spaceBetween,
        layoutStyles.flexWrap,
        spacingStyles.pL15,
        spacingStyles.pR15,
        {
          backgroundColor: COLORS.CREAMY_WHITE,
        },
        layoutStyles.flex1,
      ]}
    >
      <DashboardCard
        name="Practics"
        icon={() => <BookIcon />}
        onPress={() => console.log('fff')}
        amount={228}
      />
      <DashboardCard
        name="Schedule"
        icon={() => <CalendarIcon />}
        onPress={() => console.log('f')}
        amount={24}
      />
      <DashboardCard
        name="News"
        icon={() => <NewspaperIcon />}
        onPress={() => console.log('fff')}
        amount={74}
      />
      <DashboardCard
        name="Exercise"
        icon={() => <FolderIcon />}
        onPress={() => console.log('fff')}
        amount={72}
      />
    </View>
  </SafeAreaView>
)

export default Dashboard_Home
