import { INCREMENT, DECREMENT, DUPLICATE } from './actions';

const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case DUPLICATE:
        return {
            ...state,
            count: state.count + state.count
        }
    default:
      return state;
  }
}

export default counterReducer;