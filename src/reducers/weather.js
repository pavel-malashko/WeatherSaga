import { FETCH_REQUESTED_SUCCEEDED, FETCH_REQUESTED_FAILED} from '../constants'

const initialState = {
    data: "",
    error: null
};
export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUESTED_SUCCEEDED:
            return {
                data: action.data,
                temperature: Math.round((action.data.main.temp - 273.15) * 10) / 10,
                city: action.data.name,
                country: action.data.sys.country,
                humidity: action.data.main.humidity,
                description: action.data.weather[0].description,
                image: action.data.weather[0].main,
            };
        case FETCH_REQUESTED_FAILED:
            return {
                message: action.error.message
            };
        default:
            return state;
    }
};