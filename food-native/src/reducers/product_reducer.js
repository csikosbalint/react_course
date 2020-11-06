import { foodActions } from '../actions/index';

const initialState = {
  data: [],
  error: null,
  requesting: false,
};
const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case foodActions.PENDING: {
      return { ...state, requesting: true };
    }
    case foodActions.FULFILLED: {
      return { ...state, requesting: false, data: action.payload };
    }
    case foodActions.REJECTED: {
      return { ...state, requesting: false, error: 'Cannot fetch food' };
    }
    default: {
      return state;
    }
  }
};

export default foodReducer;