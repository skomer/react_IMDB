var React = require('react');

var FilmRow = React.createClass({

  render: function() {
    return (
      <div className='film-row'>
        <a href={this.props.children} className='film-name'>{this.props.name}</a>
      </div>
    );
  }

});

module.exports = FilmRow;