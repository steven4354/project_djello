import React, {Component} from "react";

class UserForm extends Component {
  register(e) {
    // {"firstName":"xyz", "lastName": "ddk", "email": "skjdflkjsd@gmail.welcome", "password":"xyz"}

    let form = document.querySelector("#example-form");

    let obj serialize(form, {hash: true});
    // obj -> { foo: 'bar' }

    // fetch("/api/users", {
    //   method: "post",
    //   body: JSON.stringify(opts)
    // });

    console.log("obj =>", obj);
  }

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
            <h1 style={{color: "black"}}>Register For An Account</h1>
            <br />
            <form onSubmit={this.register} id="example-form">
              <input type="text" name="user" placeholder="Username" />
              <input type="password" name="pass" placeholder="Password" />
              <input
                type="submit"
                name="register"
                class="login loginmodal-submit"
                value="register"
              />
            </form>

            <div class="login-help">
              <a href="/">Login</a> - <a href="#">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
