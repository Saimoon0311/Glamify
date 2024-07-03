import {useState, useCallback} from 'react';

const useDatePicker = () => {
  const [isVisible, setVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  /**
   * toggleDatePicker function hide datePicker
   * @return {void}
   */
  const toggle = useCallback(() => setVisibility(!isVisible), [isVisible]);
  /**
   * handleConfirm function set date to state and hide datePicker
   * @param {Object} confirmDate receive as a param from DateTimePickerModal
   * @return {void}
   */
  const handleConfirm = useCallback(
    date => {
      setDate(date);
      toggle();
    },
    [isVisible],
  );
  return {
    date,
    isVisible,
    toggle,
    handleConfirm,
  };
};

export default useDatePicker;
