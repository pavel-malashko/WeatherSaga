import { combineReducers } from 'redux'
import { weatherReducer } from './weather'
import { mapReducer } from './map'

export const rootReducer = combineReducers({
    weather: weatherReducer,
    map: mapReducer,
});