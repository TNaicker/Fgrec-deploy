const React = require('react');
const Client = require('../../../../Client/clientFile');
import classIcons from '../media/classIcons';
import Utils from '../utils';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
var selectedServantsArray = [];
var holdObj = {};

const ServantImages = React.createClass({
  render: function() {
    return (
      <div className="servant-icons">
        <div className={this.props.className}>
          <p style={{color: 'yellow'}}>{this.props.name}</p>
          <img
            className="servant-img"
            style={{backgroundColor: 'transparent'}}
            onClick={this.props.onClick}
            onMouseOver={this.props.onHover}
            onMouseOut={this.props.onLeave}
            src={this.props.image}
            name={this.props.servantName}
          />
        </div>
      </div>
    )
  }
})

const SelectedServants = React.createClass({
  render: function() {
    return (
      <div className={this.props.className}>
        <div className="servant-row row">
          <div className="col-md-12">
            <img src={this.props.image}/>
          </div>
        </div>
      </div>
    )
  }
})

const ItemImages = React.createClass({
  render: function() {
    return (
      <div className="item-icon">
        <img src={this.props.itemImg}/>
      </div>
    )
  }
})

const ClassImages = React.createClass({
  render() {
    return (
      <div onClick={this.props.onClick}>
        <img className={this.props.className} src={this.props.src}/>
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
        <td><input
          min="1"
          max="100"
          onClick={this.props.testClick}
          name="level"
          id={this.props.row.servant_name}
          onChange={this.props.inputChange}
          type="number">
        </input></td>
        <td><input
          min="1"
          max="10"
          onClick={this.props.testClick}
          name="skill_1_lvl"
          id={this.props.row.servant_name}
          onChange={this.props.inputChange}
          type="number">
        </input></td>
        <td><input
          min="1"
          max="10"
          onClick={this.props.testClick}
          name="skill_2_lvl"
          id={this.props.row.servant_name}
          onChange={this.props.inputChange}
          type="number">
        </input></td>
        <td><input
          min="1"
          max="10"
          onClick={this.props.testClick}
          name="skill_3_lvl"
          id={this.props.row.servant_name}
          onChange={this.props.inputChange}
          type="number">
        </input></td>
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
              key={"SROW" + ind}
              row={row}
              className={row.class.toLowerCase()}
              testClick={this.props.testClick}
              inputChange={this.props.inputChange}
            />
    })
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

const FriendResults = React.createClass({
  render() {
    return (
      <div className="row fake-friend-holder">
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/blackbeard.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/arturia.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/girugamesh.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/hektor.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/marie_antionette.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/medea.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/hassan.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/lancelot.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div className="col-md-12">
          <h3>Name: Alfoonso</h3>
          <h3>Friend Code: 8889889</h3>
          <h3>Only accepting people past level 70</h3>
        </div>
      </div>
    )
  }
})

const FriendResults1 = React.createClass({
  render() {
    return (
      <div className="row fake-friend-holder">
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/caligula.jpg")', backgroundSize: "contain"}}className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/arturia.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/emiya.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/cu_chulainn.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/georgio.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/waver.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/sanson.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/caligula.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div className="col-md-12">
          <h3>Tagi</h3>
          <h3>Friend Code: 8889889</h3>
          <h3>Looking for Waver friends only!</h3>
        </div>
      </div>
    )
  }
})

const FriendResults2 = React.createClass({
  render() {
    return (
      <div className="row fake-friend-holder">
        <div style={{backgroundColor: "#95a5a6", boxShadow: "inset 0px 0px 10px 5px rgba(0, 0, 0, 0.7)"}} className="col-md-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/faber.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/emiya.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/hektor.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/georgio.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/william.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/hassan.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div style={{backgroundImage: 'url("https://s3.us-east-2.amazonaws.com/servant-icons-full/hercules.jpg")', backgroundSize: "contain"}} className="col-md-3 col-xs-3 fake-friend"></div>
        <div className="col-md-12">
          <h3>presentation</h3>
          <h3>Friend Code: 777</h3>
          <h3>Looking for any friends! Everyone welcome!</h3>
        </div>
      </div>
    )
  }
})

const App = React.createClass({
  getInitialState() {
    return {
      servantClasses: Object.keys(classIcons.classIconsOn),
      client: Utils.createClient(),
      loadedServants: [],
      loadedItems: [],
      addedServants: [],
      supportServants: [],
      dbServants: {},
    }
  },
  componentWillMount() {
    this.state.client.generateSupportInfo()
      .then((result) => {
        console.log(result);
        this.setState({supportServants: result});
      })
    this.state.client.servants()
      .then((result) => {
        console.log(result);
        this.setState({loadedServants: result});
      })
    console.log(this.state.loadedServants, 'state');

    this.state.client.items()
      .then((items) => {
        console.log(items);
        this.setState({loadedItems: items});
      })
  },
  render: function () {
    const myItems = this.state.loadedItems.map((items, ind) => {
      if(items.img != null) {
        return <ItemImages itemImg={items.img} key={"IT" + ind}/>
      }
    })
    const selectedServants = this.state.addedServants.map((servant, ind) => {
      return <SelectedServants
              className={servant.class.toLowerCase()}
              image={servant.img_icon}
            />
    })
    const myServants = this.state.loadedServants.map((servant, ind) => {
      return <ServantImages
        key={"SI" + ind}
        className={servant.class.toLowerCase()}
        name={servant.class}
        onClick={this.handleClick}
        onHover={this.handleHover}
        image={servant.img_icon}
        onLeave={this.handleLeave}
        servantName={servant.servant_name}
      />
    })
    const classButtons = this.state.servantClasses.map((el, ind) => {
      return <ClassImages
        onClick={this.classClick}
        className={el + " off"}
        src={classIcons.classIconsOn[el]}
        key={"CI" + ind}
      />
    })

    return (
      <div>
        <section className="upper-title">
          <h1
            style={{color: '#2ecc71'}}
            onClick={this.testClick}>Search Friends</h1>
        </section>

        <div className="container edit-servant-holder">
          <div className="row">
            <div className="classes col-md-12">
              {classButtons}<br></br>
              <button
                onClick={this.addSelected}
                className="btn">Search Selected
              </button>
              <button
                onClick={this.removeAll}
                className="btn">Remove all
              </button>
            </div>
          </div>
          <div className="row servant-holder">
            <div className="col-md-6 servant-wrapper">
              {myServants}
            </div>
            <div className="col-md-6 servant-wrapper-selected">
              <form onSubmit={this.handleSelectedSubmit}>
                <h1 style={{textAlign: "center", color: "white"}}>Results</h1>
                <div>
                  <FriendResults/>
                  <FriendResults1/>
                  <FriendResults2/>
                </div>
                {/* <button className="btn">Search Selected Servants</button> */}
              </form>
            </div>
          </div>
        </div>
        <div className="sideBar">
          <img onClick={this.closeClick} className="hamburger" src="http://simpleicon.com/wp-content/uploads/arrow-17.png"/>
          <SidebarButton title="Profile" to="/profile"/>
          <SidebarButton title="Add Crafts" to="/profile/edit/crafts"/>
          <SidebarButton title="Add Items" to="/profile"/>
          <SidebarButton title="Add Servants" to="/profile/edit"/>
        </div>
        <img
          style={{transform: 'rotate(180deg)'}}
          onClick={this.openClick}
          className="hamburger openB" src="http://simpleicon.com/wp-content/uploads/arrow-17.png"/>
      </div>
    );
  },
  testClick(event) {
    console.log(this.state.dbServants);
  },
  inputChange(event) {
    const {name, value, id} = event.target;

    console.log(this.state.dbServants);
    this.state.client.userID(Utils.getUser())
      .then((result) => {
        this.state.addedServants.forEach((servant) => {
          const servN = servant.servant_name;
          const servID = servant.id;
          if(servN === id) {
            this.setState({dbServants:
              Object.assign({}, this.state.dbServants, {[servN]:
                Object.assign({}, this.state.dbServants[servN], {[name]: value, servant_id: servID, user_id: result})
              })
            });
          }
        })
      })
  },
  handleHover(event) {
    event.target.style.transitionDuration = '0.2s'
    event.target.style.opacity = 0.5;
  },
  handleLeave(event) {
    event.target.style.opacity = 1;
  },
  classClick(event) {
    event.target.src="https://kazemai.github.io/fgo-vz/common/images/icon/class/class_10_1.png";
  },
  handleClick(event) {
    if(selectedServantsArray.indexOf(event.target.name) === -1) {
      console.log('adding', event.target.name);
      selectedServantsArray.push(event.target.name);
    } else {
      selectedServantsArray.splice(selectedServantsArray.indexOf(event.target.name), 1);
      console.log('removed', event.target.name);
    }
    const style = event.target.style
    if(style.backgroundColor === 'transparent') {
      style.transitionDuration = '0.2s';
      style.backgroundColor = 'green';
      style.border = '3px groove gold';
      style.boxShadow = '0px 0px 10px 1px rgba(100, 30, 0, 0.8)'
      style.height = '110px';
      style.width = '110px';
    } else {
      this.unSelectAll();
    }
  },
  handleSelectedSubmit(event) {
    event.preventDefault();
    // Need user_id, servant_id, ascension(?), skill 1-3.
    this.state.client.postServant(Object.values(this.state.dbServants))
      .then(() => {
        console.log('worked')
        this.unSelectAll();
        this.setState({addedServants: []});
        selectedServantsArray = [];
      })
      .catch((err) => {
        console.log('failedddd');
      })

  },
  addSelected(event) {
    const friends = ReactDOM.findDOMNode(this).getElementsByClassName('fake-friend-holder');
    for(var x = 0; x < friends.length; x++) {
      friends[x].style.display = 'block';
    }
  },
  removeAll(event) {
    console.log(this.state.addedServants);
    this.unSelectAll();
    this.setState({addedServants: []});
    selectedServantsArray = [];
  },
  unSelectAll() {
    const icons = ReactDOM.findDOMNode(this).getElementsByClassName('servant-img')
    for(var x = 0; x < icons.length; x++) {
      icons[x].style.backgroundColor = 'transparent';
      icons[x].style.height = '100px';
      icons[x].style.width = '100px';
      icons[x].style.boxShadow = 'none';
      icons[x].style.border = '3px groove white'
    }
  },
  classClick(event) {
    const classRegex = /( off)/g;
    const iconClassName = event.target.className.split(' ')[0];
    const servantClassName = event.target.className.split(' ')[0].toLowerCase();
    const htCol = ReactDOM.findDOMNode(this).getElementsByClassName(servantClassName);


    if(event.target.className.match(classRegex)) {
      event.target.src = classIcons.classIconsOff[iconClassName];
      event.target.className = iconClassName + " on";
      for(let x = 0; x < htCol.length; x++) {
        htCol[x].style.display = 'none';
      }
    } else {
      event.target.src = classIcons.classIconsOn[iconClassName];
      event.target.className = iconClassName + " off";
      for(let x = 0; x < htCol.length; x++) {
        htCol[x].style.display = 'block';
      }
    }
    console.log(event.target.className);
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
