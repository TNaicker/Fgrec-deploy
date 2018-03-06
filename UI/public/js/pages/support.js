import React from 'react';
import Utils from '../utils';
import Client from '../../../../Client/clientFile';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'

const ImageHolder = React.createClass({
  render() {
    return (
      <div className="">
        <div className="col-md-3 test-img">
          <h2>{this.props.servClass}</h2>
          <img src={this.props.img}/>
        </div>
      </div>
    )
  }
})

const SelectedServantRow = React.createClass({
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
            <tr
              style={{backgroundColor: 'transparent'}}
              id={this.props.pickServant.servant_name}
              >
              <td><img src={this.props.pickServant.img_icon}/></td>
              <td>{this.props.pickServant.servant_name}</td>
              <td>{this.props.pickServant.level}</td>
              <td>{this.props.pickServant.skill_1_lvl}</td>
              <td>{this.props.pickServant.skill_2_lvl}</td>
              <td>{this.props.pickServant.skill_3_lvl}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})
const ServantRows = React.createClass({
  render() {
    return (
      <tr
        style={{backgroundColor: 'transparent'}}
        className={this.props.className}
        id={this.props.row.servant_name}
        >
        <td onClick={this.props.rowClick}><img src={this.props.row.img_icon}/></td>
        <td onClick={this.props.rowClick}>{this.props.row.servant_name}</td>
        <td onClick={this.props.rowClick}>{this.props.row.level}</td>
        <td onClick={this.props.rowClick}>{this.props.row.skill_1_lvl}</td>
        <td onClick={this.props.rowClick}>{this.props.row.skill_2_lvl}</td>
        <td onClick={this.props.rowClick}>{this.props.row.skill_3_lvl}</td>
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
              rowClick={this.props.rowClick}
              key={'servRow' + ind}
              row={row}
              className={row.class.toLowerCase()}
            />
    })
  }
})

const SupportSetup = React.createClass({
  render() {
    return (
      <div className="container support-select">
        <section className="news-content">
          <div className="row">
            <div style={{color: 'white'}} className="col-md-12 user-supportinfo-box">
              <h1>{Utils.getUser()}</h1>
              <h2>{this.props.fid || "No registered friend code"}</h2>
              <div className="support-message">
                <h5>{this.props.message || "No message entered..."}</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div onClick={this.props.onClick} className="col-md-3 col-xs-3 support-setup all">
              <h4>All</h4>
            </div>
            <div
              onClick={this.props.onClick}
              style={{backgroundImage: `url(${this.props.servSrc.saber})`}}
              className="col-md-3 col-xs-3 support-setup Saber">
              <h4>Saber</h4>
            </div>
            <div
              onClick={this.props.onClick}
              style={{backgroundImage: `url(${this.props.servSrc.archer})`}}
              className="col-md-3 col-xs-3 support-setup Archer">
              <h4>Archer</h4>
            </div>
            <div
              onClick={this.props.onClick}
              style={{backgroundImage: `url(${this.props.servSrc.lancer})`}}
              className="col-md-3 col-xs-3 support-setup Lancer">
              <h4>Lancer</h4>
            </div>
            <div style={{backgroundImage: `url(${this.props.servSrc.rider})`}}
              onClick={this.props.onClick}
              className="col-md-3 col-xs-3 support-setup Rider">
              <h4>rider</h4>
            </div>
            <div
              onClick={this.props.onClick}
              style={{backgroundImage: `url(${this.props.servSrc.caster})`}}
              className="col-md-3 col-xs-3 support-setup Caster">
              <h4>caster</h4>
            </div>
            <div
              onClick={this.props.onClick}
              style={{backgroundImage: `url(${this.props.servSrc.assassin})`}}
              className="col-md-3 col-xs-3 support-setup Assassin">
              <h4>Assassin</h4>
            </div>
            <div
              onClick={this.props.onClick}
              style={{backgroundImage: `url(${this.props.servSrc.berserker})`}}
              className="col-md-3 col-xs-3 support-setup Berserker">
              <h4>Berserker</h4>
            </div>
          </div>
          <div className="form-holder">
            <div>
              <form onSubmit={this.props.idSubmit}>
                <h4 style={{color: 'white'}}>edit friend code {this.props.fid}</h4>
                <input onChange={this.props.idChange} className="friend-code" type="tel"/>
                <button className="btn">Submit</button>
              </form>
            </div>
            <div>
              <form onSubmit={this.props.messageSubmit}>
                <h4 style={{color: 'white'}}>Edit message</h4>
                <textarea onChange={this.props.messageChange}/>
                <button className="btn">Submit</button>
              </form>
              <form onSubmit={this.props.pushFriendFinder}>
                <button className="btn">Update Friend Finder</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    )
  }
})

const ServantLists = React.createClass({
  render() {
    return (
      <div className="container support-lists">
        <button onClick={this.props.backClick} className="btn">Go back</button>
        <section className="news-content">
          <div className="row">
            <div className="col-md-6 support-left">
              <ServantTable
                rowClick={this.props.rowClick}
                servants={this.props.servants}
              />
            </div>
            <div className="col-md-6 support-right">
              <SelectedServantRow pickServant={this.props.pickServant}/>
              <button className="btn" onClick={this.props.addServant}>update support</button>
            </div>
          </div>
        </section>
      </div>
    )
  },
})

const App = React.createClass({
  getInitialState() {
    return {
      client: Utils.createClient(),
      loadedServants: [],
      selectedServant: {},
      supportServants: [],
      supportPics: {
        saber: '',
        archer: '',
        lancer: '',
        rider: '',
        caster: '',
        assassin: '',
        berserker: '',
      },
      supportText: {},
      enteredMsg: '',
      enteredId: '',
    }
  },
  componentWillMount() {
    this.state.client.generateUserSupportMsg(Utils.getUser())
      .then((result) => {
        console.log(result);
        this.setState({supportText: result});
      })
    this.state.client.generateUserClass(Utils.getUser(), 'Caster')
      .then((result) => {
        // console.log(result);
        this.setState({loadedServants: result});
      })
    this.state.client.generateUserSupport(Utils.getUser())
      .then((result) => {
        console.log(result);
        result.forEach((serv) => {
          const servClass = serv.class.toLowerCase();
          this.setState({supportPics:
            Object.assign({}, this.state.supportPics, {[servClass]: serv.img_full})})
        })
        this.setState({supportServants: result});
      })
  },
  render() {
    const myImages = this.state.supportServants.map((el) => {
      return <ImageHolder servClass={el.class} img={el.img_full}/>
    })
    return (
      <div>
        <section className="upper-title">
          <h1
            style={{color: '#2ecc71'}}
            onClick={this.testClick}>Support Setup</h1>
        </section>
        <SupportSetup
          pushFriendFinder={this.pushFriendFinder}
          idChange={this.idChange}
          messageChange={this.messageChange}
          messageSubmit={this.messageSubmit}
          idSubmit={this.idSubmit}
          fid={this.state.supportText.id}
          message={this.state.supportText.msg}
          servSrc={this.state.supportPics}
          myImages={myImages}
          onClick={this.handleClick}/>
        <ServantLists
          pickServant={this.state.selectedServant}
          addServant={this.addServant}
          rowClick={this.rowClick}
          backClick={this.handleBack}
          servants={this.state.loadedServants}/>
      </div>
    )
  },
  handleClick(event) {
    console.log(event.target.className);
    const lists = ReactDOM.findDOMNode(this).getElementsByClassName('support-lists');
    const select = ReactDOM.findDOMNode(this).getElementsByClassName('support-select');
    if(event.target.className.includes('all')) {
      console.log('rendering all');
      lists[0].style.display = 'block';
      select[0].style.display = 'none';
      this.state.client.generateUserServants(Utils.getUser())
        .then((result) => {
          console.log(result);
          this.setState({loadedServants: result});
        })
    }
    else if(event.target.className.includes('Saber')) {
      console.log('rendering saber');
      lists[0].style.display = 'block';
      select[0].style.display = 'none';
      this.state.client.generateUserClass(Utils.getUser(), 'Saber')
        .then((result) => {
          console.log(result);
          this.setState({loadedServants: result});
        })
    }
    else if(event.target.className.includes('Archer')) {
      console.log('rendering archer');
      lists[0].style.display = 'block';
      select[0].style.display = 'none';
      this.state.client.generateUserClass(Utils.getUser(), 'Archer')
        .then((result) => {
          console.log(result);
          this.setState({loadedServants: result});
        })
    }
    else if(event.target.className.includes('Lancer')) {
      console.log('rendering lancer');
      lists[0].style.display = 'block';
      select[0].style.display = 'none';
      this.state.client.generateUserClass(Utils.getUser(), 'Lancer')
        .then((result) => {
          console.log(result);
          this.setState({loadedServants: result});
        })
    }
    else if(event.target.className.includes('Rider')) {
      console.log('rendering rider');
      lists[0].style.display = 'block';
      select[0].style.display = 'none';
      this.state.client.generateUserClass(Utils.getUser(), 'Rider')
        .then((result) => {
          console.log(result);
          this.setState({loadedServants: result});
        })
    }
    else if(event.target.className.includes('Caster')) {
      console.log('rendering caster');
      lists[0].style.display = 'block';
      select[0].style.display = 'none';
      this.state.client.generateUserClass(Utils.getUser(), 'Caster')
        .then((result) => {
          console.log(result);
          this.setState({loadedServants: result});
        })
    }
    else if(event.target.className.includes('Assassin')) {
      console.log('rendering assassin');
      lists[0].style.display = 'block';
      select[0].style.display = 'none';
      this.state.client.generateUserClass(Utils.getUser(), 'Assassin')
        .then((result) => {
          console.log(result);
          this.setState({loadedServants: result});
        })
    }
    else if(event.target.className.includes('Berserker')) {
      console.log('rendering berserker');
      lists[0].style.display = 'block';
      select[0].style.display = 'none';
      this.state.client.generateUserClass(Utils.getUser(), 'Berserker')
        .then((result) => {
          console.log(result);
          this.setState({loadedServants: result});
        })
    }
  },
  handleBack(event) {
    event.preventDefault();
    const lists = ReactDOM.findDOMNode(this).getElementsByClassName('support-lists');
    const select = ReactDOM.findDOMNode(this).getElementsByClassName('support-select');
    lists[0].style.display = 'none';
    select[0].style.display = 'block';
    this.setState({loadedServants: []});
    this.setState({selectedServant: {}});
    this.state.client.generateUserSupport(Utils.getUser())
      .then((result) => {
        console.log(result);
        result.forEach((serv) => {
          const servClass = serv.class.toLowerCase();
          this.setState({supportPics:
            Object.assign({}, this.state.supportPics, {[servClass]: serv.img_full})})
        })
        this.setState({supportServants: result});
      })
  },
  rowClick(event) {
    // console.log(event.target.parentNode);
    console.log(event.target.parentNode.id);
    const parent = event.target.parentNode
    if(parent.style.backgroundColor === 'transparent') {
      parent.style.backgroundColor = 'red';
    } else {
      parent.style.backgroundColor = 'transparent';
    }

    this.state.loadedServants.forEach((servant) => {
      if(servant.servant_name === parent.id) {
        this.setState({selectedServant: servant});
      }
    })

  },
  addServant(event) {
    event.preventDefault();
    // const lists = ReactDOM.findDOMNode(this).getElementsByClassName('support-lists');
    // const select = ReactDOM.findDOMNode(this).getElementsByClassName('support-select');
    // lists[0].style.display = 'none';
    // select[0].style.display = 'block';
    // this.setState({loadedServants: []});
    // this.setState({selectedServant: {}});
    this.state.client.updateUserSupport(Utils.getUser(), this.state.selectedServant.class.toLowerCase(), {name: this.state.selectedServant.servant_name})
      .then((result) => {
        console.log('worked i guess');
      })
    console.log(this.state.selectedServant);
    this.state.client.generateUserSupport(Utils.getUser())
      .then((result) => {
        console.log(result);
        result.forEach((serv) => {
          const servClass = serv.class.toLowerCase();
          this.setState({supportPics:
            Object.assign({}, this.state.supportPics, {[servClass]: serv.img_full})})
        })
        this.setState({supportServants: result});
      })
  },
  idSubmit(event) {
    event.preventDefault();
    console.log(this.state.enteredId);
    const newId = {id: this.state.enteredId};
    this.state.client.updateUserSupportId(Utils.getUser(), newId)
      .then(() => {
        console.log('submit new friend code');
      })
      .catch((err) => {
        console.log(err);
      })
  },
  messageSubmit(event) {
    event.preventDefault();
    console.log(this.state.enteredMsg);
    const newMsg = {msg: this.state.enteredMsg}
    this.state.client.updateUserSupportMsg(Utils.getUser(), newMsg)
      .then(() => {
        console.log('submit new friend message');
      })
      .catch((err) => {
        console.log(err);
      })
  },
  idChange(event) {
    console.log(event.target.value);
    this.setState({enteredId: event.target.value})
  },
  messageChange(event) {
    console.log(event.target.value);
    this.setState({enteredMsg: event.target.value});
  },
  pushFriendFinder(event) {
    event.preventDefault();
    if(this.state.supportText.id !== null &&
       this.state.supportText.msg !== null) {
         console.log(this.state.supportText);
         console.log(this.state.supportServants);
    } else {
      console.log('id or message is null');
    }
  },
  testClick(event) {
    console.log(this.state.enteredId);
    console.log(this.state.enteredMsg);
  }
})

export default App;
