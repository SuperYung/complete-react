var GreeterMessage = React.createClass({
    render: function () {
        return (<div>
            <h1>some</h1>
            <p>some para</p>
        </div>)
    }
});

var GreeterForm = React.createClass({
    render: function () {
        return (
            <form>
                <input type="text" ref="name"/>
                <button>Set Name</button>
            </form>
        )
    }
});

var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React Default'
        }
    },
    getInitialState: function () {
      return {
          name: this.props.name
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
    render: function() {
        var name = this.state.name;
        var message = this.props.message;

        return (
           <div>
               <h1>Hello React Component!!</h1>
               <p>Hello {name}!!</p>
               <p>{message}</p>

               <GreeterMessage/>

               <form onSubmit={this.onButtonClick}>
                   <input type="text" ref="name"/>
                   <button>Set Name</button>
               </form>

               <GreeterForm/>
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