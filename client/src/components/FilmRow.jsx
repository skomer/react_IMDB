var React = require('react');

var FilmRow = React.createClass({

  render: function() {
    return (
      <div className='film-row'>
        <a href={this.props.url} className='film-name'>{this.props.name}</a>
        <a href={this.props.showTimesUrl} className='show-times-url'>Showtimes</a>
      </div>
    );
  }

});

module.exports = FilmRow;