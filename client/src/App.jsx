import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Budget from "./Budget";
import Preferences from "./Preferences";
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
    this.getBudget = this.getBudget.bind(this);
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

  getBudget() {
    axios
      .put("users/:username", {
        params: {},
      })
      .then((data) => {
        this.setState({
          userData: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addTransaction(data) {
    axios.put('/users:username', data
    )
    .then(() => {
      this.getBudget()
    })
    .catch(err => {
      console.error(err);
      res.sendStatus(400);
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
        return <Preferences />;
      }
      case "wishlist": {
        return <Wishlist />;
      }
      case "budget": {
        return <Budget getBudget={this.getBudget} addTransaction={this.addTransaction} transaction={this.state.userData.transactions}/>;
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
    //dump session;
    this.setState({
      view: "budget",
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <span className="home nav" onClick={() => this.changeView("home")}>
            Home
          </span>
          <span
            className="budget nav"
            onClick={() => this.changeView("budget")}
          >
            Budget
          </span>
          <span
            className="wishlist nav"
            onClick={() => this.changeView("wishlist")}
          >
            Wishlist
          </span>
          <span
            className="preferences nav"
            onClick={() => this.changeView("preferences")}
          >
            Preferences
          </span>
          {this.logoutButton()}
        </div>
        <div>{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
