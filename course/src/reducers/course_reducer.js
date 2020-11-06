export default function(state={}, action){
    switch(action.type){
        case 'GET_COURSES':
            return{...state, courses:action.payload}
        default:
            return state;
    }
}