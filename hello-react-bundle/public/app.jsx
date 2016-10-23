var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

var  message = "Global Message";

ReactDOM.render(
    //<h1>Hello React!!</h1>
    <Greeter name="Yung" message={message} />,
    document.getElementById('app')
);