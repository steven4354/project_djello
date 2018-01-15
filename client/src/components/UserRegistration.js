import React, {Component} from "react";
import serialize from "form-serialize";

class UserForm extends Component {
  register(e) {
    e.preventDefault();

    let form = document.querySelector("#example-form");

    let obj = serialize(form, {hash: true});
    // obj -> { foo: 'bar' }

    console.log("obj =>", obj);

    //set this up at the end after boards

    // fetch("api/users", {
    //   method: "POST",
    //   body: JSON.stringify(obj),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(function(response) {
    //     // The response is a Response instance.
    //     // You parse the data into a useable format using `.json()`
    //     return response.json();
    //   })
    //   .then(function(data) {
    //     // `data` is the parsed version of the JSON returned from the above endpoint.
    //     console.log("response data =>", data); // { "userId": 1, "id": 1, "title": "...", "body": "..." }
    //   });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="login-modal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="loginmodal-container">
            <h1 style={{color: "black"}}>Register For An Account</h1>
            <br />
            <form onSubmit={this.register} id="example-form">
              <input type="text" name="user" placeholder="Username" />
              <input type="password" name="pass" placeholder="Password" />
              <input
                type="submit"
                name="register"
                className="login loginmodal-submit"
                value="register"
              />
            </form>

            <div className="login-help">
              <a href="/">Login</a> - <a href="#">Forgot Password</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserForm;
