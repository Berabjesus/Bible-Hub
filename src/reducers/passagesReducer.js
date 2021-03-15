import * as passageTypes from '../types/passageTypes';

const initialState = {
  loading: false,
  passages: {},
  error: '',
  stored: false,
};

const passagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case passageTypes.PASSAGE_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case passageTypes.PASSAGE_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        passages: action.payload,
        stored: true,
      };
    case passageTypes.PASSAGE_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: return state;
  }
};

export default passagesReducer;
