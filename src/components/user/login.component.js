import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateUser extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangePasswd = this.onChangePasswd.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      email: '',
      passwd: '',
    }
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangePasswd(e) {
    this.setState({ passwd: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      email: this.state.email,
      passwd: this.state.passwd,
    };

    axios.post('http://localhost:4000/users/get-user', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      email: '',
      passwd: '',
    });
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} required />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={this.state.passwd} onChange={this.onChangePasswd} required />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Login
        </Button>
      </Form>
    </div>);
  }
}
