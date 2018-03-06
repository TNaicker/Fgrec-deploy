const React = require('react');

const App = React.createClass({
  render() {
    return (
      <div className={this.props.className}>
        <img src={this.props.src}/>
      </div>
    )
  }
})

export default App;
