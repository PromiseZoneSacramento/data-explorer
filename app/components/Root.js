import React, { Component } from 'react';
import d3 from 'd3';
import ReactFauxDom from 'react-faux-dom';

export default class Root extends Component {
  render() {
    const list = ReactFauxDom.createElement('ul');

    d3.select(list)
      .selectAll('li')
      .data(['first', 'second', 'third', 'all d3 data'])
      .enter()
      .append('li')
      .text(function (d) {
        return d;
      });

    return list.toReact();
  }
}
