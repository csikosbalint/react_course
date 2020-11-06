import { combineReducers } from 'redux'
import latest_reducer from './latest_reducer'
import events_reducer from './events_reducer'
import upcomings_reducer from './upcomings_reducer'

const rootReducer = combineReducers({
     latest_reducer,
     upcomings_reducer,
     events_reducer
})

export default rootReducer;