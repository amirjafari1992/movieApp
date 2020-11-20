import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class Login extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password')
  };

  validate = () => {
    const {error} = Joi.validate(this.state.account, this.schema, {
      abortEarly: false
    });
    if(!error) return null;

    const errors = {};
    for(let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();

    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("submited!");
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <React.Fragment>
        <form className="login">
          <h1>Login</h1>
          <div className="d-flex mt-5">
            <Input
              name="username"
              label="Username"
              type="text"
              placeholder="Enter your username or email"
              onChange={this.handleChange}
              value={account.username}
              error={errors.username}
            />
            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={this.handleChange}
              value={account.password}
              error={errors.password}
            />
          </div>
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
