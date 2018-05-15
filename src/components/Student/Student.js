import React, { Component } from "react";
import axios from "axios";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    };
  }
  componentDidMount() {
    console.log(this.props);

    return axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(results => {
        this.setState({
          studentInfo: results.data
        });
      });
  }
  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>
          {this.state.studentInfo.first_name} {this.state.studentInfo.last_name}
        </h1>
        Grade: <h3>{this.state.studentInfo.grade}</h3>
        Email: <h3>{this.state.studentInfo.email}</h3>
      </div>
    );
  }
}
