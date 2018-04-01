import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {

  }

  render() {
    return(
      <h1>
        Hi there!
      </h1>
    )
  }
}

export default Header
