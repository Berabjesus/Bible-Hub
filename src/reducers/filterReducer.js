/* eslint-disable*/
const initialState = {
  filterValue: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BIBLE_VERSIONS_FILTER': {
      console.log('filter red called');
      return {
        ...state,
        filterValue: action.payload ,
      };
    }
    default:
      return state;
  }
};

export default filterReducer