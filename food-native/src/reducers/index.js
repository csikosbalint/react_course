import { combineReducers } from 'redux';
import food from './product_reducer';

const rootReducer = combineReducers({
    food
})

export default rootReducer;