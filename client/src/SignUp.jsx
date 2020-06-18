import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: '',
      firstName: '',
      lastName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.addUser = this.addUser.bind(this);
  }

  addUser() {
    //axios.post('/users', {
    // params: {
      // email: this.state.email,
      // username: this.state.username,
      // password: this.state.password,
      // firstName: this.state.firstName,
      // lastName: this.state.lastName,
    // })
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
      <div className="signup">
        <h1>Welcome to Alt-Budget!</h1>
        <h2>Please select a username and password:</h2>
        <form>
          <label>
            Username:{'  '}
            <input name="username" type="text" value='username' onChange={this.handleChange} />
          </label>{'    '}
          <label><br/>
            Password:{'  '}
            <input name="password" type="text" value='password' onChange={this.handleChange} />
          </label>
          <label><br/><br/>
            E-Mail:{'  '}
            <input name="email" type="text" value='email' onChange={this.handleChange} />
          </label>
          <label><br/><br/>
            First Name:{'  '}
            <input name="firstName" type="text" value='firstName' onChange={this.handleChange} />
          </label>
          <label><br/>
            Last Name:{'  '}
            <input name="lastName" type="text" value='lastName' onChange={this.handleChange} />
          </label><br/><br/>
          <button onClick={() => this.addUser}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
