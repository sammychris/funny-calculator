export const addSubVal = (num) => ({
  type: "ADD_SUBTRACT_VALUE",
  payload: num,
});

export const addSubCurrentVal = (num) => ({
  type: "ADD_SUBTRACT_CURRENT_VALUE",
  payload: num,
});

export const divideMulVal = (num) => ({
  type: "DIVIDE_MULTIPLY_VALUE",
  payload: num,
});

export const divideMulCurrentVal = (num) => ({
  type: "DIVIDE_MULTIPLY_CURRENT_VALUE",
  payload: num,
});
