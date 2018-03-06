const React = require('react');
const Client = require('../../../../Client/clientFile');
import styled, {css} from 'styled-components';
import HomeImage from '../components/imageWrapper';
import Utils from '../utils';


const LowerDescription = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-xs-12 testing-home-title bottom-title">
            <h1>keep track of <b>resources</b></h1>
          </div>

          <div className="col-md-12 col-xs-12 home-info">
            <h2>Servants. Materials. Items.</h2>
            <h3>Easily keep track of your resources to never question whether you have enough materials to ascend/skill-up  servants!</h3>
          </div>

        </div>
      </div>
    )
  }
})

const LowerDescriptionCont = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-xs-12 testing-home-title bottom-title">
            <h1><b>Friend</b> finder</h1>
          </div>


          <div className="col-md-12 col-xs-12 home-info">
            <h2>Too tedious to find specific friends?</h2>
            <h3>Head on over to the friend finder. You will be able to search for other players </h3>
            <div className="btn-wrapper">
              <button className="btn">Find Friends</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
})

const DescriptionBox = React.createClass({
  render() {
    return (
      <div>
        <div className="col-md-6 col-xs-12 description-box">
          <div>
            <img src="http://vignette3.wikia.nocookie.net/typemoon/images/4/42/Fate_Grand_Order_logo.png/revision/latest?cb=20150530163323"/>
          </div>
          <h1>Manage <strong>resources</strong> and find <strong>friends</strong></h1>
          <h4>This webapp was designed as a companion app for the mobile game Fate/Grand Order. It’s purpose is to function as a tool for helping players keep track of their Servants, Craft Essences, evolution materials, and to act as a friend finder.</h4>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4">
          <div className="join-box">
            <div className="join-box-inner">
              <h3 style={{textAlign: 'center', color: '#F9BF3B'}}>CREATE MY ACCOUNT</h3>
              <form>
                <input
                  className="general-input"
                  type="text"
                  placeholder="username"
                  name="username"
                  onChange={this.handleChange}
                /><br></br>
                <input
                  className="general-input"
                  type="password"
                  placeholder="password"
                  name="username"
                  onChange={this.handleChange}
                /><br></br>
                <div className="btn-wrapper">
                  <button className="btn">CREATE ACCOUNT</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    )
  },
})

const LoggedInDescription = React.createClass({
  render() {
    return (
      <div>
        <div className="col-md-12 col-xs-12 description-box">
          <div>
            <img src="http://vignette3.wikia.nocookie.net/typemoon/images/4/42/Fate_Grand_Order_logo.png/revision/latest?cb=20150530163323"/>
          </div>
          <h1>Welcome to FGRecORDER<br></br> Get started with your profile now!</h1>
          <h4>This webapp was designed as a companion app for the mobile game Fate/Grand Order. It’s purpose is to function as a tool for helping players keep track of their Servants, Craft Essences, evolution materials, and to act as a friend finder.</h4>
        </div>
        <div style={{margin: "0 auto", textAlign: "center"}}>
          <button style={{width: "30%"}} className="btn">To Profile</button>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-1"></div>
      </div>
    )
  }
})

const LoggedInBottom = React.createClass({
  render() {
    return (
      <div>
        <section className="body-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="social-wrapper">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
})
const NormalBottom = React.createClass({
  render() {
    return (
      <div>
        <section className="body-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <button className="btn">JOIN NOW</button>
                <div className="social-wrapper">
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
})

const SocialMedia = React.createClass({
  render() {
    return (
      <div className="social-box">
        <a href="https://www.google.com/" className="facebook-social"><img src="https://s3.us-east-2.amazonaws.com/fgrec-misc/Facebook-512.png" /></a>
        <div className="social-filler-space"><div className="social-filler-dot"></div></div>
        <a href="https://www.google.com/" className="twitter-social"><img src="https://s3.us-east-2.amazonaws.com/fgrec-misc/twitter.png" /></a>
        <div className="social-filler-space"><div className="social-filler-dot"></div></div>
        <a href="https://www.google.com/" className="github-social"><img src="https://s3.us-east-2.amazonaws.com/fgrec-misc/github-512.png" /></a>
      </div>
    )
  }
})

const App = React.createClass({
  getInitialState() {
    return {
      client: Utils.createClient(),
      show: false,
    }
  },
  componentWillMount() {
    this.state.client.servants()
      .then((result) => {
        console.log(result);
      })
  },
  clickQuestion() {
    this.setState({show: !this.state.show});
  },
  render: function () {
    return (
      <div className="cover">

        {/* Upper body section */}
        <section className="body-upper">
          <div className="container">
            <div className="row">
              {this.renderLanding()}
            </div>
          </div>
        </section>

        <section >
        {/* <h1 style={{textAlign: 'center', fontSize: '4em'}}>AAAAAAAAAAAAA TACO</h1> */}
        </section>

        {/* Lower body section */}
        <section className="bottom-container">
          <LowerDescription/>
        </section>
        <div className="description-filler-space"></div>
        <section className="bottom-container">
          <LowerDescriptionCont/>
        </section>
        {/* <div className="bottom-container">
            <div className="container">
              <section className="home-info">
                <div className="row">
                  <div className="col-md-12 bottom-title">
                    <h1>Keep track of materials</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 underline-scalibur">
                    <img src="https://pre00.deviantart.net/3494/th/pre/f/2016/097/d/9/excalibur_promise___sword_of_promised_victory_by_vegaoftheblackflame-d9y36f1.png"/>
                  </div>
                </div>
                  <div className="row">
                  <div className="col-md-6 col-xs-6 bottom-text">
                    <h3>Never question whether you have enough materials to ascend/skill-up your servants ever again! With our app, all you need to do is input the items you currently have and whenever you ascend a servant, you will be informed of your remaining materials and the impact an ascension potentially has on the growth of other high priority selected servants!</h3>
                  </div>
                  <div className="col-md-6 col-xs-6 side-image">
                    <img src="http://2.bp.blogspot.com/-E4PhliVtcZM/VoSva94lv4I/AAAAAAAAAfM/Af0oBzOVb0A/s1600/%25E0%25B9%2584%25E0%25B8%25AD%25E0%25B9%2580%25E0%25B8%2597%25E0%25B9%2587%25E0%25B8%25A1%25E0%25B8%2594%25E0%25B8%25A3%25E0%25B8%25AD%25E0%25B8%259B%25E0%25B8%25A3%25E0%25B8%25B2%25E0%25B8%25A2%25E0%25B8%25A7%25E0%25B8%25B1%25E0%25B8%2599.jpg"/>
                  </div>
                  </div>
                </section>
              </div>
            <div className="container">
              <section className="home-info">
                <div className="row">
                  <div className="col-md-12 bottom-title-mid">
                    <h1>Team Builder</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 underline-scalibur-mid">
                    <img src="https://pre00.deviantart.net/3494/th/pre/f/2016/097/d/9/excalibur_promise___sword_of_promised_victory_by_vegaoftheblackflame-d9y36f1.png"/>
                  </div>
                </div>
                  <div className="row">
                  <div className="col-md-6 col-xs-6 side-image">
                    <img src="https://fgo.exoalpha.pro/wp-content/uploads/2017/04/team.jpg"/>
                  </div>
                  <div className="col-md-6 col-xs-6 bottom-mid-text">
                    <h3>Use our team builder to assist in team theory crafting. With our team builder, you will be able to calculate the potential damage output a team has instantly by utilizing the dynamic tool to freely and quickly switch servants in and out.</h3>
                  </div>
                  </div>
                </section>
              </div>
            <div className="container">
              <section className="home-info">
                <div className="row">
                  <div className="col-md-12 bottom-title">
                    <h1>Friend Finder</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 underline-scalibur">
                    <img src="https://pre00.deviantart.net/3494/th/pre/f/2016/097/d/9/excalibur_promise___sword_of_promised_victory_by_vegaoftheblackflame-d9y36f1.png"/>
                  </div>
                  <div className="row home-info">
                  <div className="col-md-6 col-xs-6 bottom-text">
                    <h3>Need friends? Try stepping outside of your comfort zone and meet new people outside! I'm sure you wi- Oh, friends in FGO?
                    Simply list yourself in our friend finder with a small message and the support servants/craft essences you normally run! Other users and guests will be able to search for players with similar needs!</h3>
                  </div>
                  <div className="col-md-6 col-xs-6 side-image">
                    <img src="https://i.redd.it/cyk3xdov4g7z.png"/>
                  </div>
                  </div>
                </div>
              </section>
            </div>
        </div> */}
        {this.renderBottom()}
      </div>
    );
  },
  renderLanding() {
    if(Utils.isLoggedIn()) {
      return <LoggedInDescription/>
    } else {
      return <DescriptionBox/>
    }
  },
  renderBottom() {
    if(Utils.isLoggedIn()) {
      return <LoggedInBottom/>
    } else {
      return <NormalBottom/>
    }
  }
})
export default App;
