const React = require('react');
const servantIcons = require('../../assets/ServantIcons');
const Client = require('../../../../Client/clientFile');
import Utils from '../utils';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
var selectedCraftsArray = [];

const AddedCraftTable = React.createClass({
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
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
      return <AddedCraftRows
              key={'AddCraft' + ind}
              row={row}
              className={row.rarity}
              onChange={this.props.onChange}
            />
    })
  }
})
const AddedCraftRows = React.createClass({
  render() {
    return (
      <tr
        id={this.props.row.craft_name}
        className={this.props.className}
        style={{backgroundColor: 'rgb(52, 73, 94)'}}
        >
        <td><img src={this.props.row.img_icon}/></td>
        <td>{this.props.row.craft_name}</td>
        <td>
          <select
            id={this.props.row.craft_name}
            onChange={this.props.onChange}
            className="MLB"
            style={{color: 'black'}}
          >
            <option value="" selected> </option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select></td>
      </tr>
    )
  }
})

const CraftRows = React.createClass({
  render() {
    return (
      <tr
        id={this.props.row.craft_name}
        name={this.props.name}
        onClick={this.props.rowClick}
        className={this.props.className + " craft-tr"}
        style={{backgroundColor: 'rgb(52, 73, 94)'}}
        >
        <td><img src={this.props.row.img_icon}/></td>
        <td>{this.props.row.craft_name}</td>
        <td>{this.props.row.description}</td>
        <td>{this.props.row.description_mlb}</td>
        <td>{this.props.row.max_lvl}</td>
      </tr>
    )
  }
})
const MobileCraftRows = React.createClass({
  render() {
    return (
      <tr
        id={this.props.row.craft_name}
        name={this.props.name}
        onClick={this.props.rowClick}
        className={this.props.className + " craft-tr"}
        style={{backgroundColor: 'rgb(52, 73, 94)'}}
        >
        <td><img src={this.props.row.img_icon}/></td>
        <td>{this.props.row.craft_name}</td>
        <td>{this.props.row.description}</td>
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
              <th>Max lvl</th>
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
              rowClick={this.props.rowClick}
              name={row.craft_name}
            />
    })
  }
})
const MobileCraftTable = React.createClass({
  render() {
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th>Name</th>
              <th>effect</th>
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
      return <MobileCraftRows
              key={'craft' + ind}
              row={row}
              className={row.rarity}
              rowClick={this.props.rowClick}
              name={row.craft_name}
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

const App = React.createClass({
  getInitialState() {
    return {
      loading: true,
      client: Utils.createClient(),
      loadedCrafts: [],
      loadedItems: [],
      selectedCrafts: [],
      addedCrafts: [],
      dbCrafts: {},
    }
  },
  componentWillMount() {
    this.state.client.crafts()
      .then((result) => {
        this.setState({loadedCrafts: result, loading: false});
      })
  },
  render() {
    return (
      <div>
        <section className="upper-title">
          <h1 style={{color: '#3498db'}}onClick={this.test}>EDIT CRAFTS</h1>
        </section>

        <div className="container craft-container">
          <div className="row">
            <div className="col-md-12 filter-crafts">
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
          {this.isLoading()}
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
    console.log(this.state.dbCrafts);
  },
  isLoading() {
    if(this.state.loading) {
      return (
        <img
          style={{textAlign: 'center'}}
          src="https://media.giphy.com/media/rcwkj93o4L9As/giphy.gif"
        />
      )
    } else {
      return (
        <div className="row craft-holder">
          <div className="col-md-6 craft-list">
            <CraftTable
              crafts={this.state.loadedCrafts}
              rowClick={this.rowClick}
            />
          </div>
          <div className="col-md-6 craft-list-mobile">
            <MobileCraftTable
              crafts={this.state.loadedCrafts}
              rowClick={this.rowClick}
            />
          </div>
          <div className="col-md-6 craft-list">
            <form onSubmit={this.handleSelectedSubmit}>
              <AddedCraftTable
                crafts={this.state.addedCrafts}
                onChange={this.checkBoxChange}
              />
              <button className="btn">Add Selected Crafts</button>
            </form>
          </div>
        </div>
      )
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
  },
  checkBoxChange(event) {
    const {value, id} = event.target;
    var realVal = false;
    if(value === "true") {
      realVal = true;
    } else {
      realVal = false;
    }


    this.state.client.userID(Utils.getUser())
      .then((result) => {
        this.state.addedCrafts.forEach((craft) => {
          const craftN = craft.craft_name;
          const craftID = craft.id;
          if(craftN === id) {
            this.setState({dbCrafts:
              Object.assign({}, this.state.dbCrafts, {[craftN]:
                Object.assign({}, this.state.dbCrafts[craftN], {MLB: realVal, crafts_id: craftID, user_id: result})
              })
            });
          }
        })
      })
  },
  removeAll() {
    this.setState({addedCrafts: []});
    this.setState({dbCrafts: {}});
    selectedCraftsArray = [];
    const rows = ReactDOM.findDOMNode(this).getElementsByClassName('craft-tr')
    for(var x = 0; x < rows.length; x++) {
      rows[x].style.backgroundColor = 'rgb(52, 73, 94)';
    }
  },
  handleSelectedSubmit(event) {
    event.preventDefault();
    console.log(Object.values(this.state.dbCrafts));

    this.state.client.postCraft(Object.values(this.state.dbCrafts))
      .then(() => {
        console.log('worked')
        this.unSelectAll();
        this.setState({addedCrafts: [], dbCrafts: {}});
        selectedCraftsArray = []
      })
      .catch((err) => {
        console.log('failedddd');
      })
  },
  rowClick(event) {
    const style = event.target.parentNode.style
    if(style.backgroundColor === 'rgb(52, 73, 94)') {
      style.transitionDuration = '0.2s';
      style.backgroundColor = 'red';
    } else {
      style.backgroundColor = 'rgb(52, 73, 94)'
    }

    if(selectedCraftsArray.indexOf(event.target.parentNode.id) === -1) {
      console.log('adding', event.target.parentNode.id);
      selectedCraftsArray.push(event.target.parentNode.id);
    } else {
      selectedCraftsArray.splice(selectedCraftsArray.indexOf(event.target.parentNode.id), 1);
      console.log('removed', event.target.parentNode.id);
    }
  },
  addSelected(event) {
    console.log(selectedCraftsArray);
    const newStateArr = [];
    const loadCraft = this.state.loadedCrafts;
    for(var x = 0; x < selectedCraftsArray.length; x++) {
      for(var y = 0; y < loadCraft.length; y++) {
        if(loadCraft[y]["craft_name"] === selectedCraftsArray[x]) {
          console.log(loadCraft[y]);
          newStateArr.push(loadCraft[y]);
        }
      }
    }
    this.setState({addedCrafts: newStateArr});
  },
  unSelectAll() {
    const rows = ReactDOM.findDOMNode(this).getElementsByClassName('craft-tr')
    for(var x = 0; x < rows.length; x++) {
      rows[x].style.backgroundColor = 'rgb(52, 73, 94)';
    }
  },
})

export default App;
