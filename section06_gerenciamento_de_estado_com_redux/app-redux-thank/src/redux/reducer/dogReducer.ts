// ./src/redux/reducer/dogReducer.ts
import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions';

const initialState = {
  isFetching: false,
  imageURL: '',
  errorMessage: '',
};

type ActionType = {
  payload: string,
  type: string,
};

function dogReducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
        errorMessage: '',
        imageURL: '',
      };

    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        errorMessage: '',
        imageURL: action.payload,
      };

    case REQUEST_FAILED:
      return {
        ...state,
        isFetching: false,
        imageURL: '',
        errorMessage: action.payload,
      };

    default:
      return state;
  }
}

export default dogReducer;