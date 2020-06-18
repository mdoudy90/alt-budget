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
      <div className='login'>
        <h1>Please Log In:</h1>
        <form>
          <label>Username:{'  '}
            <input name='username' type='text' onChange={this.handleChange} />
          </label>{'    '}
          <label>Password:{'  '}
            <input name='password' type='text' onChange={this.handleChange} />
          </label>
          <button onClick={(e) => this.props.sendLogin(e, this.state.username, this.state.password)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;
