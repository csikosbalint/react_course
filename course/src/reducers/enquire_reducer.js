export default function(state={}, action){
    switch(action.type){
        case 'GET_ENQUIRES':
            return{...state, enquires:action.payload}
        default:
            return state;
    }
}