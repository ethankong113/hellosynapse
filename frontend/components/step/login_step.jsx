import React from 'react';
import TextField from 'material-ui/TextField';

class LoginStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""};
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const {updateParent, username, password} = this.props;
    return (
      <div className="login-step">
        <TextField
          hintText="Enter your Online Banking Username"
          floatingLabelText="Username"
          fullWidth={true}
          value={username}
          onChange={updateParent('username')}
          /><br />
        <TextField
          hintText="Enter your Online Banking Password"
          floatingLabelText="Password"
          type="password"
          fullWidth={true}
          value={password}
          onChange={updateParent('password')}
          /><br />
      </div>
    );
  }
}

export default LoginStep;
