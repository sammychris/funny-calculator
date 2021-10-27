const initialValue = {
  addSubVal: 1,
  addSubCurrentVal: 0,
  divideMulVal: 1,
  divideMulCurrentVal: 0,
};

export const counterReducer = (state = initialValue, action = {}) => {
  switch (action.type) {
    case "ADD_SUBTRACT_VALUE":
      return { ...state, addSubVal: action.payload };
    case "ADD_SUBTRACT_CURRENT_VALUE":
      return { ...state, addSubCurrentVal: action.payload };
    case "DIVIDE_MULTIPLY_VALUE":
      return { ...state, divideMulVal: action.payload };
    case "DIVIDE_MULTIPLY_CURRENT_VALUE":
      return { ...state, divideMulCurrentVal: action.payload };
    default:
      return state;
  }
};
