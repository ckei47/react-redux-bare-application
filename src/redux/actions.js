export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DUPLICATE = 'DUPPLICATE';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const duplicate = () => {
    return {
      type: DUPLICATE,
    };
  };