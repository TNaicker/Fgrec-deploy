const React = require('react');
const ReactDOM = require('react-dom');
const style = require('../../css/app.css');
import styled, {css} from 'styled-components';
import media from '../media/media';
import { Link } from 'react-router'

const Footer = styled.div`
  width: 100%;
  height: 150px;
  background-color: #1A237E;
`;

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Footer>
          <div style={{width: '60%', margin: '0 auto', paddingTop: '20px'}}>
            <p className="footer-text">Disclaimer: This is an unofficial site. Use of our website and the content is at your own risk. We assume no responsibility for, and offer no warranties or representations regarding, the accuracy, reliability, completeness or timeliness of any of the content. Fate Grand Order logo and all related images are registered trademarks or trademarks of Animeplex of America, Cygames, Apple, or Android.</p>
          </div>
        </Footer>
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
