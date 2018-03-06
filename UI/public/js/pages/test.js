const React = require('react');
const servantIcons = require('../../assets/ServantIcons');
const Client = require('../../../../Client/clientFile');
import Utils from '../utils';
import ReactDOM from 'react-dom';

const ServantImages = React.createClass({
  render: function() {
    return (
      <div className="servant-icons">
        <div className={this.props.className}>
          <p style={{color: 'yellow'}}>{this.props.name}</p>
          <img
            style={{backgroundColor: 'transparent'}}
            onClick={this.props.onClick}
            onMouseOver={this.props.onHover}
            onMouseOut={this.props.onLeave}
            src={this.props.image}
          />
        </div>
      </div>
    )
  }
})

// const ServantImages = React.createClass({
//   render: function() {
//     return (
//       <div className={this.props.className}>
//         <div className="servant-row row">
//           <div className="col-md-12">
//             <img src={this.props.image}/>
//           </div>
//         </div>
//       </div>
//     )
//   }
// })

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

const classIcons = {
  Saber:      'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_1_4.png',
  Archer:     'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_2_4.png',
  Lancer:     'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_3_4.png',
  Rider:      'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_4_4.png',
  Caster:     'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_5_4.png',
  Assassin:   'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_6_4.png',
  Berserker:  'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_7_4.png',
  Shielder:   'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_8_4.png',
  Ruler:      'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_9_4.png',
}
const classIconsOff = {
  Saber: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_1_1.png',
  Archer: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_2_1.png',
  Lancer: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_3_1.png',
  Rider: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_4_1.png',
  Caster: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_5_1.png',
  Assassin: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_6_1.png',
  Berserker: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_7_1.png',
  Shielder: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_8_1.png',
  Ruler: 'https://kazemai.github.io/fgo-vz/common/images/icon/class/class_9_1.png',
}

const App = React.createClass({
  getInitialState() {
    return {
      icons: servantIcons,
      values: Object.values(servantIcons),
      servantClasses: Object.keys(classIcons),
      client: Utils.createClient(),
      loadedServants: [],
      loadedItems: [],
    }
  },
  componentWillMount() {
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
    const myServants = this.state.loadedServants.map((servant, ind) => {
      return <ServantImages
        key={"SI" + ind}
        className={servant.class.toLowerCase()}
        name={servant.class}
        onClick={this.handleClick}
        onHover={this.handleHover}
        image={servant.img_icon}
        onLeave={this.handleLeave}
      />
    })
    const classButtons = this.state.servantClasses.map((el, ind) => {
      return <ClassImages
        onClick={this.classClick}
        className={el + " off"}
        src={classIcons[el]}
        key={"CI" + ind}
      />
    })

    return (
      <div>
        <section className="upper-title">
          <h1>PROFILE</h1>
        </section>

        <section className="news-content">
          <div className="news-block">
            <div className="classes">
              {classButtons}
            </div>
            <div className="servant-wrapper">
              {myServants}
            </div>
          </div>
        </section>
        <section className="news-content">
          <div className="news-block">
            {myItems}
          </div>
        </section>
      </div>
    );
  },
  handleHover(event) {
    event.target.style.opacity = 0.5;
  },
  handleLeave(event) {
    event.target.style.opacity = 1;
  },
  classClick(event) {
    event.target.src="https://kazemai.github.io/fgo-vz/common/images/icon/class/class_10_1.png";
  },
  handleClick(event) {
    const style = event.target.style.backgroundColor
    if(style === 'transparent') {
      event.target.style.backgroundColor = 'green';
      event.target.className
    } else {
      event.target.style.backgroundColor = 'transparent'
    }
  },
  classClick(event) {
    const classRegex = /( off)/g;
    const iconClassName = event.target.className.split(' ')[0];
    const servantClassName = event.target.className.split(' ')[0].toLowerCase();
    const htCol = ReactDOM.findDOMNode(this).getElementsByClassName(servantClassName);


    if(event.target.className.match(classRegex)) {
      event.target.src = classIconsOff[iconClassName];
      event.target.className = iconClassName + " on";
      for(let x = 0; x < htCol.length; x++) {
        htCol[x].style.display = 'none';
      }
    } else {
      event.target.src = classIcons[iconClassName];
      event.target.className = iconClassName + " off";
      for(let x = 0; x < htCol.length; x++) {
        htCol[x].style.display = 'block';
      }
    }
    console.log(event.target.className);
  }
})
export default App;
