//importing action creators variables
import { 
    FETCH_AMIIBO_DATA_START, 
    FETCH_AMIIBO_DATA_SUCCESS, 
    FETCH_AMIIBO_DATA_FAILURE 
} from '../actions/actions';


//InitialState of my object
const InitialState = {
    isLoading: false,
    amiiboList: [],
    error: ''
}


export const Reducer = (state = InitialState, action) => {
    // console.log(state)
    switch(action.type){
        case FETCH_AMIIBO_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case FETCH_AMIIBO_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                amiiboList: action.payload,
                error: ''
            }
        default: 
            return state;
    };
};