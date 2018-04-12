import React, { Component, Fragment } from 'react';

class Columns extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.items;
    const tds = items.map((item, index) =>
      <td key={index.toString()}>
        <input key={index.toString()} value={item} onChange={(e) => this.props.handleChange(e, index)}/>
      </td>
    );

    return (
      <React.Fragment>
        {tds}
      </React.Fragment>
    );
  }
}

export default Columns
