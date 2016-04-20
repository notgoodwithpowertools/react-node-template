var React = require('react');

var TestComponent = React.createClass({
  render: function(){
    var divStyle = {
      marginTop: 10
    };

    var headingStyle = {

    };


    return (
      <div className="container">
        <div style={divStyle}>
          <h1>TestComponent</h1>
        </div>
        <div>
          <button className="btn-warning">Click Me</button>
        </div>
      </div>
    )
  }
});

module.exports = TestComponent;
