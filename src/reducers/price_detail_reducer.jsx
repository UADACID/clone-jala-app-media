export const priceDetailReducer = (state, action) => {
  if (action.type === 'set_value') {
    return {
      ...state,
      ...action.paylod,
    };
  } else {
    return state;
  }
};
