import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Budget from "./Budget";
import Preferences from "./Preferences";
import Wishlist from "./Wishlist"
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "signup",
      loggedIn: true,
    };
    this.sendLogin = this.sendLogin.bind(this);
    this.changeView = this.changeView.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (!this.state.loggedIn) {
      this.setState({
        view: "login",
      });
    } else {
      this.setState({
        view: "home",
      });
    }
  }

  sendLogin() {
    axios.post('/users', {
      params: {
        username: this.state.username,
        password: this.state.password
      }
    })
    .then(() => {
      this.setState({
        loggedIn: true
      })
    })
    .catch(err => {
      console.error(err);
      alert("Incorrect username or password");
      sendStatus(403)
    })
  }

  getBudget() {
    //axios.get(endpoint for budgets?)
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    switch (view) {
      case "signup": {
        return <SignUp />;
      }
      case "budget": {
        return <Budget />;
      }
      case "login": {
        return <Login sendLogin={this.sendLogin}/>;
      }
      case "preferences": {
        return <Preferences />;
      }
      case "wishlist": {
        return <Wishlist />;
      }
      case 'home': {
        return <Budget />
      }
    }
  }

  logoutButton () {
    const isLoggedIn = this.state.loggedIn;
    if (isLoggedIn) {
      return <span className="logout nav" onClick={() => {this.logout()}}>Logout</span>
    } else {
      return <span className="signup nav" onClick={() => this.changeView('signup')}>Sign Up</span>
    }
  }

  logout() {
    //dump session;
    this.setState({
      view: 'home'
    })
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <span className="home nav" onClick={() => this.changeView('home')}>Home</span>
          <span className="budget nav" onClick={() => this.changeView('budget')}>Budget</span>
          <span className="wishlist nav" onClick={() => this.changeView('wishlist')}>Wishlist</span>
          <span className="preferences nav" onClick={() => this.changeView('preferences')}>Preferences</span>
          {this.logoutButton()}
        </div>
        <div className="home">{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
