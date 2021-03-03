import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "react-bootstrap/";
import { Link, NavLink } from 'react-router-dom';
import { registrationAction } from "../redux/actions/registrationAction";

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
    return (
      <div>
        <div id="registration">
          <div id="form">
            <form onSubmit={(e) => this.onSubmit(e)}>
              <h1>Registration</h1> <br />
              <div className="group1">
              <div className="input2" >
              <label htmlFor="">First name</label> <br />
              <input
                type="text"
                name="firstname"
                aria-label="firstname"
                placeholder="firstname"
                onChange={(e) => this.change(e)}
              />
              <br />
              <Badge variant="danger">{this.state.firstnameError}</Badge>
              <br />
              </div>
              </div>
              <div className="group2">
              <div className="input3" >
              <label htmlFor="">Last name</label> <br />
              <input
                type="text"
                name="lastname"
                aria-label="lastname"
                placeholder="lastname"
                onChange={(e) => this.change(e)}
              />
              <br />
              <Badge variant="danger">{this.state.lastnameError}</Badge>
              <br />
              </div>
              <div className="input1" >
              <label htmlFor="">Email</label>
              <br />
              <input
                type="email"
                name="email"
                aria-label="email"
                placeholder="email"
                onChange={(e) => this.change(e)}
              />{" "}
              <br />
              <Badge variant="danger">{this.state.emailError}</Badge>
              <br />
              </div>              
              <div className="group1">
              <div className="input7" >
              <label htmlFor="">Date of Birth</label> <br />
              <input
                type="date"
                name="dateofbirth"
                aria-label="dateofbirth"
                placeholder="Date of birth"
                onChange={(e) => this.change(e)}
              />
              <br />
              <Badge variant="danger">{this.state.dateofbirthError}</Badge>
              <br />
              </div>
              </div>
              <div className="input4" >
              <label htmlFor="">Gender</label> <br />
              <select
                type="text"
                name="gender"
                aria-label="gender"
                placeholder="Gender"
                onChange={(e) => this.change(e)}
              >
                <option role="male">MALE</option>
                <option>FEMALE</option>
                <option>UNDEFINED</option>
              </select>
              <br />
              <Badge variant="danger">{this.state.genderError}</Badge>
              <br />
              </div>
              </div>
              <input type="submit" value="SIGN UP" aria-label="signup" />
              <div>
                <Link to="/login">Login</Link>
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
    registrationState: state.registration,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registrationAction: (data) => dispatch(registrationAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
