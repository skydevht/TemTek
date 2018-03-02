import Api from '../services/api';

export const TOGGLE_LOADING = 'UI/ToggleLoading';
export const toggleLoading = visible => ({
  type: TOGGLE_LOADING,
  payload: {
    visible,
  },
});

export const RECEIVE_TERM = 'App/ReceiveTerm';
export const receiveTerm = term => ({
  type: RECEIVE_TERM,
  payload: {
    term,
  },
});

export const getRandomWord = () => (dispatch) => {
  dispatch(toggleLoading(true));
  Api.getRandomWord().then((res) => {
    dispatch(toggleLoading(false));
  });
};
