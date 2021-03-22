import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../types/registrationTypes";
import axios from "axios";


export const registrationAction = (data) => async (dispatch) => {
  try {
    dispatch(registration());
    const token = localStorage.getItem("token");
    const instance = axios.create({
      headers: { "authorization": token },
    });

    const res = await instance.post(
      "http://localhost:1234/api/v1/auth/register",
      data
    );
    

    // await axios.post(
    //   "http://localhost:3020/api/v1/auth/register",
    //   localStorage.setItem("x-access-token", token),
    //   data
    // );
    dispatch(registrationSuccess(res));

    // window.alert(res.data.message);
    // window.alert(res.data.message);
  } catch (error) {
    if (error) {
      const errorMessage = error.response.data.message;
      console.log(`this is the data ${errorMessage}`);
      // dispatch(registrationFail(errorMessage));
      dispatch(registrationFail(error.response.data.message));
      // window.alert(error);
      // window.alert(errorMessage);
    } else {
      dispatch(registrationFail("Error in the Network"));
    }
  }
};

export const registration = () => {
  return {
    type: REGISTER,
  };
};

export const registrationSuccess = (data) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
    message: data.message
  };
};

export const registrationFail = (error) => {
  return {
    type: REGISTER_FAIL,
    payload: error,
  };
};
