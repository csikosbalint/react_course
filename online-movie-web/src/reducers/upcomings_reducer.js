export default function upcomings_reducer(state = {}, action) {
    switch (action.type) {
      case 'GET_UPCOMINGS':
           return { ...state, loading: true };
      case 'UPCOMINGS_RECEIVED':
           return { ...state, upcomings: action.json, loading: false }
      default: 
           return state;
    }
   };