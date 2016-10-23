/**
 * Created by r626884 on 10/18/2016.
 */
var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React Default',
            message: 'Default message'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        };
    },
    onButtonClick: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        this.refs.name.value = '';

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }

        alert(name);
    },
    handleNewData: function (updates) {
        this.setState(updates);
    },
    render: function() {
        var name = this.state.name;
        var message = this.state.message;

        return (
            <div>
                <h1>Hello React Component!!</h1>
                <p>Hello {name}!!</p>
                <p>{message}</p>

                <GreeterMessage name={name} message={message}/>

                {/*<form onSubmit={this.onButtonClick}>
                 <input type="text" ref="name"/>
                 <button>Set Name</button>
                 </form>*/}

                <GreeterForm onNewData={this.handleNewData}/>
            </div>
        );
    }
});

module.exports = Greeter;