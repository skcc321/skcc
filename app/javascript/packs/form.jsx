import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'James',
      surname: 'Bond',
      counter: 0
    }
  }

  render() {
    return(
      <div>
        <h1 onMouseOver={this.onHover} onMouseLeave={this.onLeave}>my name is {this.state.surname}!</h1>
        <p>{this.state.name} {this.state.surname}</p>
        <p>count: {this.state.counter}</p>
        <input onChange={this.onChange} value={this.state.name}></input>
      </div>
    )
  }

  componentDidMount() {
    axios.get('/')
      .then(result => {
          console.log(result)
      })
  }

  onHover = () => {
    this.setState((prevState) => {
      return { counter: (prevState.counter + 1), name: 'Dude' };
    });
  }

  onLeave = () => {
    this.setState({name: 'James'});
  }

  onChange = (event) => {
    this.setState({name: event.target.value});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Form/>,
    document.body.appendChild(document.createElement('div'))
  )
})
