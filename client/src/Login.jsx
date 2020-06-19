import React from "react";
import axios from 'axios';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
        <form className='login-form'>
          <h2>LOGIN</h2>
          <input name='username' type='text' onChange={this.handleChange} placeholder='Username'/>
          <input name='password' type='text' onChange={this.handleChange} placeholder='Password'/>
          <button onClick={(e) => this.props.sendLogin(e, this.state.username, this.state.password)}>Login</button>
        </form>
    )
  }
}

export default Login;
