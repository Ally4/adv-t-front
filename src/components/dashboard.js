import React, { Component } from "react";

export default class dashboard extends Component {
  render() {
    const token = localStorage.getItem("token");

    if (token) {
      return (
        <div>
          <h1>WELCOME TO ADVERTISE</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Try to login first</h1>
        </div>
      );
    }
  }
}
