var React = require('react');
var FilmRow = require('./FilmRow.jsx');

var FilmList = React.createClass({

  render: function() {

    var filmComponents = this.props.films.map(function(filmObject) {
      return (
        <FilmRow
          name={filmObject.name}
          key={filmObject.id}
          showTimesUrl={filmObject.showTimesUrl}
          url={filmObject.url}
        >
        </FilmRow>
        );
    });

    return (
      <div className='film-list'>
        {filmComponents}
      </div>
    );
  }

});

module.exports = FilmList;