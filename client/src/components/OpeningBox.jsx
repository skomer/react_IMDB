var React = require('react');
var UkOpeningBox = require('./UkOpeningBox.jsx');
var GetShowtimes = require('./GetShowtimes.jsx');





var OpeningBox = React.createClass({

  render: function() {
    return (
      <div className='opening-box'>
        <h3>Opening Box</h3>
        <UkOpeningBox />
        <GetShowtimes />
      </div>
    );
  }

});

module.exports = OpeningBox;