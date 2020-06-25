import { lightMode,darkMode } from '../actions';
import { combineReducers } from 'redux';

const initialState = false;

export const lighmodeReducer = (state=initialState, action) => {
    if(action.type === "LIGHT_MODE"){
        return action.payload
        
    }
    return state;
}

// export const darkmodeReducer = (state=true, action) => {
//     if(action.type === "DARK_MODE"){
//         return state
        
//     }
// }




export default combineReducers({
    light: lightMode,
    dark: darkMode
});