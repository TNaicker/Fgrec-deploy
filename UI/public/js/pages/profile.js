import React from 'react';
import Utils from '../utils';
import Client from '../../../../Client/clientFile';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

const ServantImages = React.createClass({
  render: function() {
    return (
      <div className="servant-icons">
        <div className={this.props.className}>
          <img
            style={{backgroundColor: 'transparent'}}
            src={this.props.image}
          />
        </div>
      </div>
    )
  }
})

const ServantDetails = React.createClass({
  render: function() {
    return (
      <div className="servant-row row">
        <div className="col-md-12">
          <img src={this.props.image}/>
          <div className="servant-profile-info">
            <h3>servant lvl: {this.props.level}</h3>
            <h3>skill 1: {this.props.skill1}</h3>
            <h3>skill 2: {this.props.skill2}</h3>
            <h3>skill 3: {this.props.skill3}</h3>
          </div>
        </div>
      </div>
    )
  }
})

const ServantRows = React.createClass({
  render() {
    return (
      <tr className={this.props.className}>
        <td><img src={this.props.row.img_icon}/></td>
        <td>{this.props.row.servant_name}</td>
        <td>{this.props.row.level}</td>
        <td>{this.props.row.skill_1_lvl}</td>
        <td>{this.props.row.skill_2_lvl}</td>
        <td>{this.props.row.skill_3_lvl}</td>
      </tr>
    )
  }
})
const ServantTable = React.createClass({
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              <th>Servant Lvl</th>
              <th>Skill 1</th>
              <th>Skill 2</th>
              <th>Skill 3</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  },
  renderRows() {
    return this.props.servants.map((row, ind) => {
      return <ServantRows
              key={'servRow' + ind}
              row={row}
              className={row.class.toLowerCase()}
            />
    })
  }
})

const CraftRows = React.createClass({
  render() {
    return (
      <tr className={this.props.className}>
        <td><img src={this.props.row.img_icon}/></td>
        <td>{this.props.row.craft_name}</td>
        <td>{this.props.row.description}</td>
        <td>{this.props.row.description_mlb}</td>
        <td>{this.props.row.MLB.toString()}</td>
      </tr>
    )
  }
})
const CraftTable = React.createClass({
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              <th>effect</th>
              <th>MLB effect</th>
              <th>MLB</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  },
  renderRows() {
    return this.props.crafts.map((row, ind) => {
      return <CraftRows
              key={'craft' + ind}
              row={row}
              className={row.rarity}
            />
    })
  }
})

const ImgHolder = React.createClass({
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.src}/>
        <p>{this.props.servantClass}</p>
      </div>
    )
  }
})

const ServantTeams = React.createClass({
  render() {
    return (
      <div className={this.props.className + " row"}>
        <div className="col-md-3"></div>
        <div className="col-md-1 team-servant">

        </div>

        <div className="col-md-1 team-servant">
        </div>

        <div className="col-md-1 team-servant">

        </div>
        <div className="col-md-1 team-servant">

        </div>
        <div className="col-md-1 team-servant">

        </div>
        <div className="col-md-1 team-servant">

        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
})

const FavoriteServants = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-2 fav-servant">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-2 fav-servant">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-2 fav-servant">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-2 fav-servant">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-2 fav-servant">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-1"></div>
      </div>
    )
  }
})
const SupportSetup = React.createClass({
  render() {
    return (
      <div>
        <div className="col-md-3 col-xs-3 support-setup">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-3 col-xs-3 support-setup">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-3 col-xs-3 support-setup">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-3 col-xs-3 support-setup">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-3 col-xs-3 support-setup">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-3 col-xs-3 support-setup">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-3 col-xs-3 support-setup">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
        <div className="col-md-3 col-xs-3 support-setup">
          <img src="https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg" />
        </div>
      </div>
    )
  }
})

const SidebarButton = React.createClass({
  render() {
    return (
      <div className="sidebar-button">
        <div className="sidebar-icon">
        </div>
        <Link to={this.props.to}><h4>{this.props.title}</h4></Link>
      </div>
    )
  }
})

const App = React.createClass({
  getInitialState() {
    return {
      client: Utils.createClient(),
      loadedServants: [],
      loadedCrafts: [],
      generalServants: [],
      generalItems: [],
      generalCrafts: [],
    }
  },
  componentWillMount() {
    this.state.client.generateUserServants(Utils.getUser())
      .then((result) => {
        console.log(result);
        this.setState({loadedServants: result});
      })
    this.state.client.items()
      .then((result) => {
        this.setState({generalItems: result});
      })
    this.state.client.crafts()
      .then((result) => {
        this.setState({generalCrafts: result});
      })
    this.state.client.generateUserCrafts(Utils.getUser())
      .then((result) => {
        this.setState({loadedCrafts: result});
      })
  },
  render() {
    const myItems = this.state.generalItems.map((el, ind) => {
      if(el.img !== null) {
        return <ServantImages
                image={el.img}
              />
      }
    })
    return (
      <div>
        <div className="profile container">
          <div className="row">
            <div className="col-md-12">
              <section className="upper-title">
                <h1 onClick={this.test}>PROFILE</h1>
                <h2 style={{color: 'white'}}>Welcome {this.state.client.username}</h2>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <section className="profile-tabs">
                <button>
                  <h1
                    onClick={this.toggleDisplay}
                    className="mainB"
                  >Main</h1>
                </button>
                <button>
                  <h1
                    onClick={this.toggleDisplay}
                    className="servantB"
                  >Servants</h1>
                </button>
                <button>
                  <h1
                    onClick={this.toggleDisplay}
                    className="craftsB"
                  >Crafts</h1>
                </button>
                <button>
                  <h1
                    onClick={this.toggleDisplay}
                    className="itemB"
                  >Items</h1>
                </button>
              </section>
            </div>
          </div>
          <section className="news-content">
            <div className="news-block">
              <div className="classes">
              </div>
              <div className="servant-wrapper">
                <div className="profile-main">
                  <h1>My support setup</h1>
                  <SupportSetup/>
                  <h3>Friend Code</h3>
                  <h4 style={{color: 'red'}}><strong>Not yet entered</strong></h4>
                  <h3>Support message</h3>
                  <h4 style={{color: 'red'}}><strong>None</strong></h4>
                  <h1>Favorite servants</h1>
                  <FavoriteServants/>
                  <h1>My Teams</h1>
                  <ServantTeams className="team-box"/>
                  <ServantTeams className="team-box"/>
                  <ServantTeams className="team-box"/>
                </div>
                <div className="profile-servants">
                  <button className="btn" style={{width: '50%'}}>EDIT</button>
                  <button className="btn" style={{width: '50%'}}>Ascension Data</button>
                  <ServantTable servants={this.state.loadedServants}/>
                </div>
                <div className="profile-items">
                  {myItems}
                </div>
                <div className="profile-crafts">
                  <h1>crafts here</h1>
                  <CraftTable crafts={this.state.loadedCrafts}/>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="sideBar">
          <img onClick={this.closeClick} className="hamburger" src="http://simpleicon.com/wp-content/uploads/arrow-17.png"/>
          <SidebarButton title="Profile" to="/profile"/>
          <SidebarButton title="Add Crafts" to="/profile/edit/crafts"/>
          <SidebarButton title="Add Items" to="/profile"/>
          <SidebarButton title="Add Servants" to="/profile/edit"/>
          <SidebarButton title="Support setup" to="/supporttest"/>
        </div>
        <img
          style={{transform: 'rotate(180deg)'}}
          onClick={this.openClick}
          className="hamburger openB" src="http://simpleicon.com/wp-content/uploads/arrow-17.png"/>
      </div>
    )
  },
  test(event) {
    console.log(this.state.loadedCrafts);
  },
  toggleDisplay(event) {
    const serv = ReactDOM.findDOMNode(this).getElementsByClassName('profile-servants');
    const items = ReactDOM.findDOMNode(this).getElementsByClassName('profile-items');
    const crafts = ReactDOM.findDOMNode(this).getElementsByClassName('profile-crafts');
    const main = ReactDOM.findDOMNode(this).getElementsByClassName('profile-main');
    if(event.target.className === "itemB") {
      serv[0].style.display = 'none';
      items[0].style.display = 'block';
      crafts[0].style.display = 'none';
      main[0].style.display = 'none';
    }
    else if(event.target.className === "servantB") {
      serv[0].style.display = 'block';
      items[0].style.display = 'none';
      crafts[0].style.display = 'none';
      main[0].style.display = 'none';
    }
    else if(event.target.className === "craftsB") {
      serv[0].style.display = 'none';
      items[0].style.display = 'none';
      crafts[0].style.display = 'block';
      main[0].style.display = 'none';
    }
    else if(event.target.className === "mainB") {
      serv[0].style.display = 'none';
      items[0].style.display = 'none';
      crafts[0].style.display = 'none';
      main[0].style.display = 'block';
    }
  },
  closeClick(event) {
    const side = ReactDOM.findDOMNode(this).getElementsByClassName('sideBar');
    const open = ReactDOM.findDOMNode(this).getElementsByClassName('openB');
    side[0].style.display = 'none';
    open[0].style.display = 'block';
  },
  openClick(event) {
    const side = ReactDOM.findDOMNode(this).getElementsByClassName('sideBar');
    const open = ReactDOM.findDOMNode(this).getElementsByClassName('openB');
    side[0].style.display = 'block';
    open[0].style.display = 'none';
  }
})

export default App;
