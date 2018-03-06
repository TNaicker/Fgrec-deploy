const React = require('react');
const Client = require('../../../../Client/clientFile');
const BASE = 'http://localhost:8000/api';
import Utils from '../utils';

const App = React.createClass({
  getInitialState() {
    return {
      creds: {
        username: '',
        password: '',
      },
      confirm: '',
      client: Utils.createClient(),
      taco: 'blank'
    }
  },
  handleChange(event) {
    const value = event.target.value;
    const field = event.target.name
    this.setState({
      creds: Object.assign({}, this.state.creds, {[field]: value})
    });
  },
  confirmChange(event) {
    const value = event.target.value;
    this.setState({confirm: value})
  },
  handleSubmit(event) {
    event.preventDefault();
    const user = this.state.creds.username;
    const pass = this.state.creds.password;
    if(user === '') {
      console.log('username field empty... can\'t submit...');
    }
    else if (pass === '') {
      console.log('please enter a password');
    }
    else if(pass === this.state.confirm) {
      console.log('SENDING CREDS', this.state.creds);
      const newClient = this.state.client.with(this.state.creds);
      newClient.register()
        .then(() => {
          console.log('success')
          this.setState({taco: 'DINGDONG'})
          Utils.storeCredentials(this.state.creds);
          this.redirect()
        })
        .catch((err) => {
          console.log(err);
        })

    }
    else {
      console.log('passwords do not match');
    }
  },
  redirect() {
    this.props.router.replace('/profile');
  },
  render: function () {
    return (
      <div>
        <section className="upper-title">
          <h1 onClick={this.redirect}>REGISTER</h1>
        </section>

        <section className="mid-content">
          <div className="register-block">
            <form onSubmit={this.handleSubmit}>
              <div className="register-forms">
                <div className="input-block">
                  <h4>Username</h4>
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    onChange={this.handleChange}
                  /><br></br>
                </div>
                <div className="input-block">
                  <h4>Password</h4>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={this.handleChange}
                  /><br></br>
                </div>
                <div className="input-block">
                  <h4>Confirm Password</h4>
                  <input
                    type="password"
                    placeholder="password"
                    name="confirm"
                    onChange={this.confirmChange}
                  />
                </div>
                <div className="btn-wrapper">
                  <button className="btn">Register</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
})
export default App;
