var React = require('react');

var FilmRow = React.createClass({

  render: function() {
    return (
      <div className='film-row'>
        <h4 className='film-name'>{this.props.name}</h4>
        <p>{this.props.children}</p>
      </div>
    );
  }

});

module.exports = FilmRow;