import React, {Component} from "react";

class UserForm extends Component {
  // login() {
  //   fetch("localhost:3000/api")
  // }

  render() {
    return (
      <div
        class="modal fade"
        id="login-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="loginmodal-container">
            <h1 style={{color: "black"}}>Login to Your Account</h1>
            <br />
            <form>
              <input type="text" name="user" placeholder="Username" />
              <input type="password" name="pass" placeholder="Password" />
              <input
                type="submit"
                name="login"
                class="login loginmodal-submit"
                value="Login"
              />
            </form>

            <div class="login-help">
              <a href="/registration">Register</a> -{" "}
              <a href="#">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
