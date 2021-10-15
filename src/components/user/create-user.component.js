import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeFname = this.onChangeFname.bind(this);
    this.onChangeLname = this.onChangeLname.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangePasswd = this.onChangePasswd.bind(this);
    this.onChangeRpasswd = this.onChangeRpasswd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      fname: '',
      lname: '',
      email: '',
      passwd: '',
      rpasswd: ''
    }
  }

  onChangeFname(e) {
    this.setState({ fname: e.target.value })
  }

  onChangeLname(e) {
    this.setState({ lname: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePasswd(e) {
    this.setState({ passwd: e.target.value })
  }

  onChangeRpasswd(e) {
    this.setState({ rpasswd: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    let { passwd, rpasswd } = this.state;
    if (passwd !== rpasswd) {
      alert("Passwords did not match!")
      return false;
    }

    const studentObject = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      passwd: this.state.passwd,
      rpasswd: this.state.rpasswd,
    };

    axios.post('http://localhost:4000/users/create-user', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      fname: '',
      lname: '',
      email: '',
      passwd: '',
      rpasswd: ''
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Link to={"/login"} className="nav-link">
        Already User?
      </Link>

      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="FirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={this.state.fname} onChange={this.onChangeFname} />
        </Form.Group>

        <Form.Group controlId="LastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={this.state.lname} onChange={this.onChangeLname} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.passwd} onChange={this.onChangePasswd} />
        </Form.Group>

        <Form.Group controlId="RepeatPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" value={this.state.rpasswd} onChange={this.onChangeRpasswd} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Signup
        </Button>
      </Form>
    </div>);
  }
}
