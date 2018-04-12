import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from 'packs/list/table';

class Container extends React.Component {
  render() {
    return (
      <Table />
    )
  }
}

ReactDOM.render(
    <Container />,
    document.getElementById('container')
);
