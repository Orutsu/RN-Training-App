import React from 'react'
import DatePicker from 'react-native-datepicker'
import Input from '.'
import { View, TextInputProps, ViewStyle, TextStyle } from 'react-native'

import styles from './styles'

interface Props extends TextInputProps {
  style?: ViewStyle | ViewStyle[] | TextStyle
  icon?: () => React.ReactNode
  onIconPress?: () => void
  error?: boolean | string
  onChangeDate?: (dateStr: string, date: Date) => void
  onCloseCalendar?: () => void
  date?: string | Date
}

const DateSelect: React.FC<Props> = ({
  style,
  date,
  error,
  onChangeDate,
  onCloseCalendar,
  ...restProps
}) => (
  <View>
    <Input {...restProps} error={error} style={style} editable={false} />
    <DatePicker
      style={styles.dateSelect}
      mode="date"
      placeholder="select date"
      format="YYYY-MM-DD"
      date={date}
      maxDate={new Date()}
      minDate={new Date('1950-01-01')}
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      onCloseModal={onCloseCalendar}
      onDateChange={onChangeDate}
      customStyles={{
        dateIcon: {
          display: 'none',
        },
        dateInput: {
          opacity: 0,
          width: 400,
        },
      }}
    />
  </View>
)

export default DateSelect
