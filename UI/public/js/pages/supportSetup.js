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


const ServantRows = React.createClass({
  render() {
    return (
      <tr
        className={this.props.className}
        id={this.props.row.servant_name}
        name={this.props.name}
        onClick={this.props.rowClick}
        className={this.props.className + " craft-tr"}
        style={{backgroundColor: 'rgb(52, 73, 94)'}}
        >
        <td style={{backgroundColor: 'transparent'}}><img src={this.props.row.img_icon}/></td>
        <td style={{backgroundColor: 'transparent'}}>{this.props.row.servant_name}</td>
        <td style={{backgroundColor: 'transparent'}}>{this.props.row.level}</td>
        <td style={{backgroundColor: 'transparent'}}>{this.props.row.skill_1_lvl}</td>
        <td style={{backgroundColor: 'transparent'}}>{this.props.row.skill_2_lvl}</td>
        <td style={{backgroundColor: 'transparent'}}>{this.props.row.skill_3_lvl}</td>
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
              rowClick={this.props.rowClick}
              className={row.class.toLowerCase()}
            />
    })
  }
})

const App = React.createClass({
  getInitialState() {
    return {
      servantClasses: Object.keys(classIcons.classIconsOn),
      client: Utils.createClient(),
      loadedServants: [],
      loadedItems: [],
      selectedServants: [],
      addedServants: [],
      dbServants: {},
      full: false,
    }
  },
  componentWillMount() {
    selectedServantsArray = [];
    this.state.client.generateUserServants(Utils.getUser())
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
            onClick={this.testClick}>Add Servants</h1>
        </section>

        <div className="container edit-servant-holder">
          <div className="row">
            <div className="classes col-md-12">
              {classButtons}<br></br>
              <button
                onClick={this.addSelected}
                className="btn">Update Selected
              </button>
              <button
                onClick={this.removeAll}
                className="btn">Remove all
              </button>
            </div>
          </div>
          <div className="row servant-holder">
            <div className="col-md-6 servant-wrapper">
              <div>
                <ServantTable
                  rowClick={this.rowClick} servants={this.state.loadedServants}/>
              </div>
            </div>
            <div className="col-md-6 servant-wrapper-selected">
              <form onSubmit={this.handleSelectedSubmit}>
                <ServantTable
                  testClick={this.testClick}
                  servants={this.state.addedServants}
                  inputChange={this.inputChange}
                />
                <button className="btn">Add Selected Servants</button>
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
    console.log(this.state.loadedServants);
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
  rowClick(event) {
    const style = event.target.parentNode.style
    if(!this.state.full) {
      if(style.backgroundColor === 'rgb(52, 73, 94)') {
        style.transitionDuration = '0.2s';
        style.backgroundColor = 'red';
      } else {
        style.backgroundColor = 'rgb(52, 73, 94)'
      }
    }

    if(selectedServantsArray.length >= 5) {
      console.log('Can only add 5. Remove to add more');
      this.setState({full: true});
      if(selectedServantsArray.indexOf(event.target.parentNode.id)) {
        selectedServantsArray.splice(selectedServantsArray.indexOf(event.target.parentNode.id), 1);
        console.log('removed', event.target.parentNode.id);
        this.setState({full: false});
      }
    } else {
      this.setState({full: false});
      if(selectedServantsArray.indexOf(event.target.parentNode.id) === -1) {
        console.log('adding', event.target.parentNode.id);
        selectedServantsArray.push(event.target.parentNode.id);
      } else {
        selectedServantsArray.splice(selectedServantsArray.indexOf(event.target.parentNode.id), 1);
        console.log('removed', event.target.parentNode.id);
      }
    }
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
    // const selectedServantsArr = this.state.selectedServants;
    // console.log(selectedServantsArr);
    // if(selectedServantsArr.indexOf(event.target.name) === -1) {
    //   console.log('adding', event.target.name);
    //   this.setState({selectedServants: selectedServantsArr.push(event.target.name)
    //   })
    //   console.log(this.state.selectedServants);
    //   console.log(Array.isArray(selectedServantsArr));
    // } else {
    //   this.setState({selectedServants:
    //   selectedServantsArr.splice(selectedServantsArr.indexOf(event.target.name), 1)})
    //   console.log('removed', event.target.name);
    // }
    const style = event.target.style
    if(style.backgroundColor === 'transparent') {
      style.transitionDuration = '0.2s';
      style.backgroundColor = 'green';
      style.boxShadow = '0px 0px 10px 1px rgba(100, 30, 0, 0.8)'
      style.height = '110px';
      style.width = '110px';
    } else {
      style.backgroundColor = 'transparent'
      style.height = '100px';
      style.width = '100px';
      style.boxShadow = 'none';
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
    console.log(selectedServantsArray);
    const newStateArr = [];
    const loadServ = this.state.loadedServants;
    for(var x = 0; x < selectedServantsArray.length; x++) {
      for(var y = 0; y < loadServ.length; y++) {
        if(loadServ[y]["servant_name"] === selectedServantsArray[x]) {
          console.log(loadServ[y]);
          newStateArr.push(loadServ[y]);
        }
      }
    }
    this.setState({addedServants: newStateArr});
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
