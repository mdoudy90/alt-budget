import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Budget from "./Budget";
import Preferences from "./components/Preferences";
import Wishlist from "./Wishlist";
import axios from "axios";
import Home from './Home'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      loggedIn: false,
      userData: {},
    };
    this.sendLogin = this.sendLogin.bind(this);
    this.changeView = this.changeView.bind(this);
    this.logout = this.logout.bind(this);
    this.getUserData = this.getUserData.bind(this);
    this.addTransaction = this.addTransaction.bind(this);
    this.addPreference = this.addPreference.bind(this);
  }

  componentDidMount() {
    if (!this.state.loggedIn) {
      this.setState({
        view: "login",
      });
    } else {
      this.setState({
        view: "budget",
      });
    }
  }

  sendLogin(e, username, password) {
    e.preventDefault();
    let userData = JSON.stringify({ username, password });

    axios
      .get("/users", { headers: { userData } })
      .then(({ data }) => {
        this.setState({
          loggedIn: true,
          userData: data[0],
          view: "budget",
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Incorrect username or password");
      });
  }

  getUserData() {
    let userData = JSON.stringify({ username: this.state.userData.username });
    axios
      .get("/users", { headers: { userData } })
      .then(({data}) => {
        this.setState({
          userData: data[0],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addTransaction(data) {
    let newTransactionData = { transactions: [ ...this.state.userData.transactions, data ] };
    axios.put(`/users/${this.state.userData.username}`, newTransactionData
    )
    .then(() => {
      this.getUserData()
    })
    .catch(err => {
      console.error(err);
    })
  }

  addPreference(event) {
    let newPrefs = { preferences: [ ...this.state.userData.preferences, event.target.getAttribute('value') ] };
    axios.put(`/users/${this.state.userData.username}`, newPrefs
    )
    .then(() => {
      this.getUserData()
    })
    .catch(err => {
      console.error(err);
    })
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    switch (view) {
      case "home": {
        return <Home />;
      }
      case "signup": {
        return <SignUp />;
      }
      case "login": {
        return <Login sendLogin={this.sendLogin} />;
      }
      case "preferences": {
        return <Preferences addPreference = { this.addPreference }/>;
      }
      case "wishlist": {
        return <Wishlist />;
      }
      case "budget": {
        return <Budget
          getUserData={this.getUserData}
          addTransaction={this.addTransaction}
          transactions={this.state.userData.transactions}
          preferences = {this.state.userData.preferences} />;
      }
    }
  }

  logoutButton() {
    const isLoggedIn = this.state.loggedIn;
    if (isLoggedIn) {
      return (
        <span
          className="logout nav"
          onClick={() => {
            this.logout();
          }}
        >
          Logout
        </span>
      );
    } else {
      return (
        <span className="signup nav" onClick={() => this.changeView("signup")}>
          Sign Up
        </span>
      );
    }
  }

  logout() {
    this.setState({
      view: "home",
      loggedIn: false,
      userData: {},
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          {this.state.loggedIn && <span className="home nav" onClick={() => this.changeView("home")}>
            Home
          </span>}
          {this.state.loggedIn && <span
            className="budget nav"
            onClick={() => this.changeView("budget")}
          >
            Budget
          </span>}
          {this.state.loggedIn && <span
            className="wishlist nav"
            onClick={() => this.changeView("wishlist")}
          >
            Wishlist
          </span>}
          {this.state.loggedIn && <span
            className="preferences nav"
            onClick={() => this.changeView("preferences")}
          >
            Preferences
          </span>}
          {this.logoutButton()}
        </div>
        <div>{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
