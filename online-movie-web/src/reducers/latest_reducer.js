export default function latest_reducer(state = {}, action) {
    switch (action.type) {
      case 'GET_LATEST':
           return { ...state, loading: true };
      case 'LATEST_RECEIVED':
           return { ...state, latest: action.json, loading: false }
      default: 
           return state;
    }
   };