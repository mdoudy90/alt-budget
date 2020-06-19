import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    axios.post("/users", this.state);
  }

  handleChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
        <form className='user-form signup-form'>
        <h2>USER SIGN UP</h2>
            <input
              name="username"
              type="text"
              placeholder='Username'
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              name="password"
              type="text"
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <input
              name="email"
              type="text"
              placeholder='Email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              name="firstName"
              type="text"
              placeholder='First name'
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            <input
              name="lastName"
              type="text"
              placeholder='Last name'
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          <button onClick={this.addUser}>Submit</button>
        </form>
    );
  }
}

export default SignUp;
