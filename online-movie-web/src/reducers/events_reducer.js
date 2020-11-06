export default function events_reducer(state = {}, action) {
    switch (action.type) {
      case 'GET_EVENTS':
           return { ...state, loading: true };
      case 'EVENTS_RECEIVED':
           return { ...state, events: action.json, loading: false }
      default: 
           return state;
    }
   };