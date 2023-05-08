import { CONSTANTS } from "../constants";

const { ACTIONTYPES } = CONSTANTS;

export default function reducer(state, action) {
	switch (action.type) {
    case ACTIONTYPES.GET_MESSAGE_SUCCESS:
			return {
				...state,
				messages: action.payload,
			};

		case ACTIONTYPES.GET_MESSAGE_ERROR:
			return {
				...state,
				error: action.error,
			};

		default:
      return {
        ...state,
      };
	}

	
}
