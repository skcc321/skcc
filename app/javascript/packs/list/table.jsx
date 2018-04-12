import React from 'react';
import Columns from 'packs/list/columns';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        'hello',
        'World',
        'this',
        'is',
        'hour',
        'new',
        'table'
      ]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event, index) {
    const key = index;
    const value = event.target.value;

    this.setState((prevState, props) => {
      var newItems = prevState.items;

      if (value.length > 0) {
        newItems[key] = value;
      } else {
        newItems.splice(key, 1);
      }

      return { items: newItems }
    });
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <tbody>
            <tr>
              <Columns items={this.state.items} handleChange={this.handleInputChange}/>
            </tr>
          </tbody>
        </table>
        <div>
          {this.state.items.join(' ')}
        </div>
      </React.Fragment>
    );
  }
}

export default Table
