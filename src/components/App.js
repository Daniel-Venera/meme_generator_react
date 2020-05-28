import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MemeGenerator from './MemeGenerator'


class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
        <Footer />
      </div>
    )
  }
}

export default App