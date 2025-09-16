import { Component } from "react";

class LoginButton extends Component {
  state = { userIsLoggedIn: false };

  toggleLogin = () => {
    this.setState({ userIsLoggedIn: !this.state.userIsLoggedIn });
  };
  render() {
    return (
      <>{this.state.userIsLoggedIn ? "Logout" : "Login"}</>
    );
  }
}

export { LoginButton };
