import {CAP_NHAT_EMAIL, CAP_NHAT_ID} from '../reducers/InfoReducer';

export const updateEmail = email => async dispatch => {
  try {
    dispatch({
      type: CAP_NHAT_EMAIL,
      email: email,
    });
  } catch (error) {
    console.log('ERROR');
  }
};
