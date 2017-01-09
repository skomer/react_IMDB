var React = require('react');
var ReactDOM = require('react-dom');
var OpeningBox = require('./components/OpeningBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <OpeningBox />,
    document.getElementById('app')
  );
}
