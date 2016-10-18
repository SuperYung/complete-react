var GreeterMessage = React.createClass({
    render: function () {
        var name = this.props.name;
        var message = this.props.message;

        return (<div>
            <h1>Hello {name}!</h1>
            <p>{message}</p>
        </div>)
    }
});

var GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        var updates = {};
        var name = this.refs.name.value;
        var message = this.refs.message.value;

        if (name.length > 0) {
            this.refs.name.value = '';
            updates.name = name;
        }

        if (message.length > 0) {
            this.refs.message.value = '';
            updates.message = message;
        }

        this.props.onNewData(updates);
    },
    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name"/>
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter message" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
});

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React Default',
            message: 'Default message'
        }
    },
    getInitialState: function () {
      return {
          name: this.props.name,
          message: this.props.message
      }
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

               <GreeterForm onNewDate={this.handleNewData}/>
           </div>
       );
    }
});

var  message = "Global Message";

ReactDOM.render(
    //<h1>Hello React!!</h1>
    <Greeter name="Yung" message={message} />,
    document.getElementById('app')
);