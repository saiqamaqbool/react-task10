import { Component } from "react";

class LoginButton extends Component {
  state = { userIsLoggedIn: false };

  
  render() {
    
      return <>{this.props.userIsLoggedIn ? "Logout" : "Login"}</>;
  
  }
}

export { LoginButton };
