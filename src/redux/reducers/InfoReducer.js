export const CAP_NHAT_NAME = 'CAP_NHAT_NAME';
export const CAP_NHAT_PASSWORD = 'CAP_NHAT_PASSWORD';
export const CAP_NHAT_TODO = 'CAP_NHAT_TODO';

const initialState = {
  name: '',
  password: '',
  todo: [],
};

export default function actionForReducer(state = initialState, payload) {
  switch (payload.type) {
    case CAP_NHAT_NAME:
      return {...state, name: payload.name};
    case CAP_NHAT_PASSWORD:
      return {...state, password: payload.password};
    case CAP_NHAT_TODO:
      return {...state, todo: payload.todo};

    default:
      return state;
  }
}
