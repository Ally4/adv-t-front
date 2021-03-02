import { combineReducers } from 'redux';
import registerUserReducer from './registrationReducer';
import loginReducer from './loginReducer';

const allReducers = combineReducers({
    login: loginReducer,
    registerUser: registerUserReducer,
})

export default allReducers;
