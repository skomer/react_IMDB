var React = require('react');
var FilmList = require('./FilmList.jsx');
var SeeMore = require('./SeeMore.jsx');



var UkOpeningBox = React.createClass({

  render: function() {
    return (
      <div className='uk-opening-box'>
        <h3>Uk Opening Box</h3>
        <FilmList />
        <SeeMore />
      </div>
    );
  }

});

module.exports = UkOpeningBox;