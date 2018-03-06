const React = require('react');
const servantIcons = require('../../assets/ServantIcons');

const ServantImages = React.createClass({
  render: function() {
    return (
      <div className="servant-icons">
        <img
          onMouseOver={this.props.onHover}
          onMouseOut={this.props.onLeave}
          className="servant-pics"
          src={this.props.image}/>
      </div>
    )
  }
})

const App = React.createClass({
  getInitialState() {
    return {
      icons: servantIcons,
      values: Object.values(servantIcons),
    }
  },
  componentWillMount() {

  },
  render: function () {
    const myServants = this.state.values.map((image) => {
      return <ServantImages
        onHover={this.handleHover}
        image={image}
        onLeave={this.handleLeave}
      />
    })

    return (
      <div>
        <section className="upper-title">
          <h1>TEST</h1>
        </section>

        <section className="news-content">
          <div className="news-block">
            <div className="servant-wrapper">
              {myServants}
            </div>
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
  }
})
export default App;
