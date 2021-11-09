const InputField = ({ currentValue, handleChange, focus }) => {
  return (
    <input
      type="text"
      value={currentValue}
      onChange={handleChange}
      onFocus={focus}
    />
  );
};

export default InputField;
