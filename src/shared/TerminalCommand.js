import React, { Component } from 'react';
import Type from 'react-typist';
import styled from 'react-emotion';

const Path = styled('strong')`
  color: #57c7ff;
`;

const Branch = styled('span')`
  opacity: 0.6;
  color: #fff;
`;

const Shell = styled('strong')`
  color: #ff6ac1;
`;

const cursor = {
  blink: true,
  element: '|',
  hideWhenDone: true,
};

export default class TerminalCommand extends Component {
  state = {
    show: false
  }

  componentDidMount() {
    if (this.props.timeout) {
      setTimeout(() => {
        this.setState({ show: true })
      }, this.props.timeout);
    } else {
      this.setState({ show: true });
    }
  }

  render() {
    return (
      <div>
        <div>
          <Path>{this.props.path}</Path>
          <span> </span>
          <Branch>{this.props.branch}</Branch>
        </div>
        <div style={{ display: 'flex' }}>
          <Shell>❯ </Shell>
          {this.state.show && (
            <Type cursor={cursor}>{this.props.command}</Type>
          )}
        </div>
      </div>
    )
  }
}
