import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { registrationAction } from "../redux/actions/registrationAction";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/registration.scss';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      dateofbirth: "",
      gender: "",
      firstnameError: "",
      lastnameError: "",
      emailError: "",
      dateofbirthError: "",
      genderError: "",
      firstnameErrorStatus: false,
      lastnameErrorStatus: false,
      emailErrorStatus: false,
      dateofbirthErrorStatus: false,
      genderErrorStatus: false,
    };
  }

  notify = () => toast("Loading!");

  handleSubmit = () => {
    this.setState(() => this.initialState);
  };

  validation = () => {
    let isError = false;

    const errors = {
      firstnameError: "",
      lastnameError: "",
      emailError: "",
      dateofbirthError: "",
      genderError: "",
      firstnameErrorStatus: false,
      lastnameErrorStatus: false,
      emailErrorStatus: false,
      dateofbirthErrorStatus: false,
      genderErrorStatus: false,
    };

    if (this.state.firstname.length <= 1) {
      isError = true;
      errors.firstnameErrorStatus = true;
      errors.firstnameError = "over 1 characters required";
    }

    if (this.state.lastname.length <= 1) {
      isError = true;
      errors.lastnameErrorStatus = true;
      errors.lastnameError = "over 1 characters required";
    }

    if (this.state.email.indexOf("@") === -1) {
        isError = true;
        errors.emailErrorStatus = true;
        errors.emailError = "Provide a valid email";
      }

      if (this.state.dateofbirth.length <= 1) {
        isError = true;
        errors.dateofbirthErrorStatus = true;
        errors.dateofbirthError = "over 1 characters required";
      }

    if (this.state.gender.length <= 1) {
      isError = true;
      errors.genderErrorStatus = true;
      errors.genderError = "over 1 characters required";
    }

    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const error = this.validation();
    if (!error) {
      const data = {
        email: this.state.email,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        gender: this.state.gender,
        address: this.state.address,
        role: this.state.role,
        dateofbirth: this.state.dateofbirth,
      };
      await this.props.registrationAction(data);
    }
  };

  change = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.error) {
      toast.error(this.props.error);
    } 
    if (this.props.message) {
      toast.success(this.props.message);
    }
    return(
      <div className="registration_background">
        <div className="registration">
          <div className="form">
            <form onSubmit={(e) => this.onSubmit(e)}>
              <div>
              <h1>Registration</h1> <br />
              </div>
              <div>
              <input
                type="text"
                name="firstname"
                aria-label="firstname"
                placeholder=" firstname"
                onChange={(e) => this.change(e)}
                className="input_register"
              />
              </div>
              <div>
              <input
                type="text"
                name="lastname"
                aria-label="lastname"
                placeholder=" lastname"
                onChange={(e) => this.change(e)}
                className="input_register"
              />
              </div>
              <div>
              <input
                type="email"
                name="email"
                aria-label="email"
                placeholder=" email"
                onChange={(e) => this.change(e)}
                className="input_register"
              /> 
              </div> 
              <div>
              <select
                type="text"
                name="gender"
                aria-label="gender"
                placeholder=" Gender"
                onChange={(e) => this.change(e)}
                className="input_register"
              >
                <option >Select gender</option>
                <option >MALE</option>
                <option>FEMALE</option>
                <option>Prefer not</option>
              </select>
              </div>
              <div>            
              <label htmlFor="">Date of Birth</label> <br />
              <input
                type="date"
                name="dateofbirth"
                aria-label="dateofbirth"
                onChange={(e) => this.change(e)}
                className="input_register"
              />
              </div>
              <div className="register_button">
              <button className="loginButton" type="submit" value="LOGIN" aria-label="login" >
              Register
            </button>
              </div>
              <ToastContainer />
              <div>
              <Link to="/login" className="login_link mb4">
                Login
            </Link>
              </div>
            </form>
          </div>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.registerUser.error,
    message: state.registerUser.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registrationAction: (data) => dispatch(registrationAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
