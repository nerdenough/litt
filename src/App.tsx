import React, { Component } from 'react'
import Tabs from './components/Tabs'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'

class App extends Component {
  public render() {
    return (
      <div className="app">
        <Tabs />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App
