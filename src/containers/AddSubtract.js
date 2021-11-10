import Button from "../components/Button";
import InputField from "../components/InputField";
import useCalculator from "./useCalculator";

function AddSubtract(props) {
  const { onAddSubVal, onAddSubCurrentVal, addSubVal, addSubCurrentVal } =
    props;

  const { handleChange, increaseBy, decreaseBy, focus } = useCalculator({
    onChangeValue: onAddSubVal,
    onChangeCurrentValue: onAddSubCurrentVal,
    value: addSubVal,
    currentValue: addSubCurrentVal,
  });

  const increaseNum = () => {
    increaseBy("+");
  };

  const decreaseNum = () => {
    decreaseBy("-");
  };

  return (
    <div className="board">
      <h2>Increase and Decrease </h2>
      <Button action={decreaseNum} sign="-" />
      <InputField
        currentValue={addSubCurrentVal}
        handleChange={handleChange}
        focus={focus}
      />
      <Button action={increaseNum} sign="+" />
    </div>
  );
}

export default AddSubtract;
