const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_FOOD':
           return { ...state, loading: true };
      case 'FOOD_RECEIVED':
           return { ...state, food: action.json, loading: false }
      default: 
           return state;
    }
   };
   export default reducer;