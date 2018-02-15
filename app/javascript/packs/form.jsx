import React from 'react'
import ReactDOM from 'react-dom'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.name = 'name';
  }

  render() {
    return (
      <h1>this is {this.name}</h1>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Test />,
    document.body.appendChild(document.createElement('div'))
  )
})

