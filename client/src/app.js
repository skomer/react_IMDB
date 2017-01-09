var React = require('react');
var ReactDOM = require('react-dom');
var OpeningBox = require('./OpeningBox.jsx');

window.onload = function(){
  ReactDOM.render(
    <OpeningBox />,
    document.getElementById('app')
  );
}
