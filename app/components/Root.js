var React = require('react');
var d3 = require('d3');
var ReactFauxDom = require('react-faux-dom');

var Root = React.createClass({
  render: function() {
    var list = ReactFauxDom.createElement('ul');

    d3.select(list)
      .selectAll('li')
      .data(['first', 'second', 'third', 'all d3 data'])
      .enter()
      .append('li')
      .text(function (d) {
        return d;
      })

    return list.toReact();
  }
});

module.exports = Root;
