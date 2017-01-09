var React = require('react');
var FilmList = require('./FilmList.jsx');
var SeeMore = require('./SeeMore.jsx');

var sampleFilms = [
  {id: 1, name: "Sausage Party", url:"http://www.imdb.com/title/tt1700841?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0", showTimesURL: "http://www.imdb.com/showtimes/title/tt1700841?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_gs"},
  {id: 2, name: "Café Society", url:"http://www.imdb.com/title/tt4513674?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1", showTimesURL: "http://www.imdb.com/showtimes/title/tt4513674?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_gs"},  
  {id: 3, name: "Sausage Party", url:"http://www.imdb.com/title/tt1700841?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t0", showTimesURL: "http://www.imdb.com/showtimes/title/tt1700841?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_gs"},
  {id: 4, name: "Café Society", url:"http://www.imdb.com/title/tt4513674?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_t1", showTimesURL: "http://www.imdb.com/showtimes/title/tt4513674?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1970868962&pf_rd_r=10B79GWTXE5MERRSR82F&pf_rd_s=right-2&pf_rd_t=15061&pf_rd_i=homepage&ref_=hm_otw_gs"}
];

var UkOpeningBox = React.createClass({

  getInitialState: function() {
    return {data: sampleFilms}
  },

  render: function() {
    return (
      <div className='uk-opening-box'>
        <h3>Uk Opening Box</h3>
        <FilmList films={this.state.data}/>
        <SeeMore />
      </div>
    );
  }

});

module.exports = UkOpeningBox;