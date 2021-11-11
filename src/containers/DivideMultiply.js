import Button from "../components/Button";
import InputField from "../components/InputField";
import useCalculator from "./useCalculator";

function DivideMultiply(props) {
  const {
    onDivideMulVal,
    onDivideMulCurrentVal,
    divideMulVal,
    divideMulCurrentVal,
  } = props;

  const { handleChange, increaseBy, decreaseBy, focus } = useCalculator({
    onChangeValue: onDivideMulVal,
    onChangeCurrentValue: onDivideMulCurrentVal,
    value: divideMulVal,
    currentValue: divideMulCurrentVal,
  });

  const multiplyNum = () => {
    increaseBy("*");
  };

  const divideNum = () => {
    decreaseBy("/");
  };

  return (
    <div className="board">
      <h2>Divide and Multiply </h2>
      <Button action={divideNum} sign="/" />
      <InputField
        currentValue={divideMulCurrentVal}
        handleChange={handleChange}
        focus={focus}
      />
      <Button action={multiplyNum} sign="x" />
    </div>
  );
}

export default DivideMultiply;
