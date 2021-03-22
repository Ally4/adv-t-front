import { REGISTER, REGISTER_SUCCESS, REGISTER_FAIL} from "../types/registrationTypes";



const initialState = {
    loading: false,
    data: [],
    error: '',
    message:''
};

const registration = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true
      };
    case REGISTER_SUCCESS:
      return {
        data: action.payload,
        error: '',
        message: action.payload.message,
      };
    case REGISTER_FAIL:
      return {
        data: [],
        error: action.payload
      };

    default:
      return state;
  }
};

export default registration;