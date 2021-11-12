function useCalculator({
  onChangeValue,
  onChangeCurrentValue,
  value,
  currentValue,
}) {
  const handleChange = (e) => {
    const { value } = e.target;
    const convertToNum = Number(value);
    onChangeValue(convertToNum);
    onChangeCurrentValue(convertToNum);
  };

  const focus = (e) => {
    e.target.select();
  };

  const lessThanZero = (num) => {
    return Math.floor(num) <= 0;
  };

  const decreaseBy = (sign) => {
    // eslint-disable-next-line no-eval
    const finalVal = eval(currentValue + sign + value);
    if (lessThanZero(finalVal)) return;
    onChangeCurrentValue(finalVal);
  };

  const increaseBy = (sign) => {
    // eslint-disable-next-line no-eval
    const finalVal = eval(currentValue + sign + value);
    onChangeCurrentValue(finalVal);
  };

  return { handleChange, increaseBy, decreaseBy, focus, currentValue };
}

export default useCalculator;
