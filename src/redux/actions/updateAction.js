import {
  CAP_NHAT_PASSWORD,
  CAP_NHAT_TODO,
  CAP_NHAT_NAME,
} from '../reducers/InfoReducer';
export const updateName = name => async dispatch => {
  try {
    dispatch({
      type: CAP_NHAT_NAME,
      name: name,
    });
  } catch (error) {
    console.log('ERROR');
  }
};
export const updatePassword = password => async dispatch => {
  try {
    dispatch({
      type: CAP_NHAT_PASSWORD,
      password: password,
    });
  } catch (error) {
    console.log('ERROR');
  }
};

export const updateTodo = todo => async dispatch => {
  try {
    dispatch({
      type: CAP_NHAT_TODO,
      todo: todo,
    });
  } catch (error) {
    console.log('ERROR');
  }
};
