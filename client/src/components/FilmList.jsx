var React = require('react');
var FilmRow = require('./FilmRow.jsx');

var FilmList = React.createClass({

  render: function() {
    return (
      <div className='film-list'>
        <h3>Film List</h3>
        <FilmRow />
      </div>
    );
  }

});

module.exports = FilmList;