import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'James',
      surname: 'Bond'
    }

  }

  render() {
    return(
      <div>
        <h1 onMouseOver={this.onHover}>my name is {this.state.surname}!</h1>
        <p>{this.state.name} {this.state.surname}</p>
      </div>
    )
  }

  onHover = () => {
    this.setState({name: 'Dude'})
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Form/>,
    document.body.appendChild(document.createElement('div'))
  )
})
