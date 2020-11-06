import { combineReducers } from 'redux';
import courses from './course_reducer';
import enquires from './enquire_reducer';

const rootReducer = combineReducers({
    courses,
    enquires
})

export default rootReducer;