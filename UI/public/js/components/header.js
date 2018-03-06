const React = require('react');
const ReactDOM = require('react-dom');
const style = require('../../css/app.css');
const Client = require('../../../../Client/clientFile');
import styled, {css} from 'styled-components';
import media from '../media/media';
import { Link } from 'react-router';
import Utils from '../utils';

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  height: 50px;
  background-color: #1A237E;
  box-shadow: 0 3px 2px -2px rgba(0, 0, 0, 0.8);
  .logo img {
    max-width: 45px;
    max-height: 45px;
    padding-bottom: 10px;
  }
  .form-control {
    background-color: #2C3E50;
    border: 1px solid #FFA300;
  }

  @media (max-width: 1000px) {
    .form-inline {
      display: none;
    }
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

function ShowHeader(props) {
  const show = props.show;
  if(show) {
    return <ExpandedHeader/>;
  }
  return <div></div>;
 }

const ExpandedHeader = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="dropdown col-md-12">
            <Link to="/news"><h3>News</h3></Link>
          </div>
          <div className="dropdown col-md-12">
            <Link to="/friendfinder"><h3>Friend Finder</h3></Link>
          </div>
          <div className="dropdown col-md-12">
            <Link to="/register"><h3>Register</h3></Link>
          </div>
          <div className="dropdown col-md-12">
            <Link to="/profile"><h3>Profile</h3></Link>
          </div>
        </div>
      </div>
    )
  },
})

const SmallHeader = React.createClass({
  render() {
    return (
      <div className="small-header">
        <ul>
          <li className="logo"><Link to="/home"><img src='https://i.imgur.com/xXY0fLC.png'></img></Link></li>
        </ul>
        <img onClick={this.props.onClick} className="hamburger" src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png"/>
      </div>
    )
  },
})

class Popup extends React.Component {
  render() {
    return (
      <div className="join-box popup">
        <div className="join-box-inner popup_inner">
          <button onClick={this.props.closePopup}>X</button>
          <h1 style={{textAlign: 'center', color: '#FFA300'}}>LOGIN</h1>
          <form onSubmit={this.props.handleSubmit}>
            <input
              className="general-input"
              type="text"
              placeholder="username"
              name="username"
              onChange={this.props.handleChange}
            /><br></br>
            <input
              className="general-input"
              type="password"
              placeholder="password"
              name="password"
              onChange={this.props.handleChange}
            /><br></br>
            <div className="btn-wrapper">
              <button className="btn">LOGIN ACCOUNT</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const App = React.createClass({
  getInitialState() {
    return {
      show: false,
      showPopup: false,
      creds: {
        username: '',
        password: '',
      },
      confirm: '',
      client: Utils.createClient(),
    }
  },
  handleChange(event) {
    const value = event.target.value;
    const field = event.target.name
    this.setState({
      creds: Object.assign({}, this.state.creds, {[field]: value})
    });
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
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          this.setState({error: 'invalid login information'})
        })

    }
  },
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  },
  loggedIn(logged) {
    if(logged) {
      return (
        <ul>
          <li className="logo"><Link to="/home"><img src='https://i.imgur.com/xXY0fLC.png'></img></Link></li>
          <li><Link to="/news"><h3>News</h3></Link></li>
          <li><Link to="/friendfinder"><h3>Friend Finder</h3></Link></li>
          <li><Link to="/logout"><h3>logout</h3></Link></li>
          <li><Link to="/profile"><h3>Profile</h3></Link></li>
        </ul>
      )
    } else {
      return (
        <div>
          <ul>
            <li className="logo"><Link to="/home"><img src='https://i.imgur.com/xXY0fLC.png'></img></Link></li>
            <li><Link to="/news"><h3>News</h3></Link></li>
            <li><Link to="/friendfinder"><h3>Friend Finder</h3></Link></li>
            <li><a>
              <h3 onClick={this.togglePopup}>Login</h3>
            </a></li>
          </ul>
          <form className="form-inline">
            <div className="form-group">
              <label className="sr-only" for="exampleInputEmail3">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email"/>
            </div>
            <div className="form-group">
              <label className="sr-only" for="exampleInputPassword3">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword3" placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-default">Sign in</button>
          </form>
        </div>
      )
    }
  },
  handleClick() {
    console.log('taco');
    this.setState({show: !this.state.show})
  },
  render: function () {
    return (
      <div>
        <SmallHeader onClick={this.handleClick}/>
        <Header>
          {this.loggedIn(this.props.loggedIn)}
        </Header>
        <ShowHeader show={this.state.show}/>
        {this.state.showPopup ?
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          : null
        }
      </div>
    );
  }
})

// Wait for the window to load
// window.onload = function () {
//   const exampleApp = document.querySelector('#story-app');
//
//   ReactDOM.render(
//     <App/>,
//     exampleApp
//   );
// }
export default App;
