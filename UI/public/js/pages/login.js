const React = require('react');
const Client = require('../../../../Client/clientFile');
const BASE = 'http://localhost:8000/api';
import Utils from '../utils';


class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

const App = React.createClass({
  getInitialState() {
    return {
      creds: {
        username: '',
        password: '',
      },
      confirm: '',
      client: Utils.createClient(),
      showPopup: false,
    }
  },
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
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
    else {
      console.log('SENDING CREDS', this.state.creds);
      const newClient = this.state.client.with(this.state.creds);
      newClient.authenticate()
        .then(() => {
          console.log('success')
          Utils.storeCredentials(this.state.creds);
          this.redirect()
        })
        .catch((err) => {
          console.log(err);
          this.setState({error: 'invalid login information'})
        })

    }
  },
  redirect() {
    this.props.router.replace('/profile');
  },
  render: function () {
    return (
      <div>
        <section className="upper-title">
          <h1>LOGIN</h1>
        </section>

        <div className='app'>
          <button onClick={this.togglePopup.bind(this)}>show popup</button>
          <button onClick={() => {alert('woooooooot?');}}>try me when popup is open</button>
          {this.state.showPopup ?
            <Popup
              text='Close Me'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>

        <section className="mid-content">
          <div className="register-block">
            <h2>{this.state.error}</h2>
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
                <div className="btn-wrapper">
                  <button className="btn">Login</button>
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
