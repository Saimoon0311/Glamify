import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const minDate = new Date();

const DatePicker = ({date, isVisible, toggle, handleConfirm, min = false}) => (
  <DateTimePickerModal
    isVisible={isVisible}
    mode="date"
    onConfirm={handleConfirm}
    onCancel={toggle}
    minimumDate={min && minDate}
    date={date}
  />
);

export default DatePicker;
