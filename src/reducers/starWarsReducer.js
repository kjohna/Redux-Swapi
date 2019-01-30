import { 
    FETCHING_CHARACTERS, 
    FETCH_CHARACTERS_SUCCESS, 
    FETCH_CHARACTERS_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetching: true,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_CHARACTERS:
      return {
        ...state,
        fetching: false,
        error: null
      }
    case FETCH_CHARACTERS_SUCCESS:
      console.log("chars reducer payload: ", action.payload)
      return {
        ...state,
        fetching: false,
        error: null,
        characters: action.payload
      }
    case FETCH_CHARACTERS_FAILURE:
      console.log("chars reducer fail payload: ", action.payload)
      return {
        ...state,
        fetching: false,
        error: action.payload,
      }
    default:
      return state;
  }
};
