import React from 'react'

// type "rfce"

function ES7Snippets() {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

// "rafce"
import React from 'react'

const ES7Snippets = () => {
  return (
    <div>ES7Snippets</div>
  )
}

export default ES7Snippets

import React, { Component } from 'react'

// "rce"
export class ES7Snippets extends Component {
  render() {
    return (
      <div>ES7Snippets</div>
    )
  }
}

export default ES7Snippets


// "rconst"

constructor(props) {
  super(props)

  this.state = {
     first
  }
}

// "clg"

console.log(first)

// clo 

console.log('first', first)