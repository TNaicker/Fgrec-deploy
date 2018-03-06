const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
const servantIcons = require('../public/assets/ServantIcons');

const headStyle = {
  width: '100%',
  height: '50px',
  border: '1px solid #8298B2',
  backgroundColor: '#8298B2'

}

// You pass in the module so it can export
//   the story you describe
storiesOf('ServantBoard', module) // Start stories
  .add('as normal', () => (
     <div>
       <div className="header" style={headStyle}>
         hello world
       </div>
     </div>
  ));
