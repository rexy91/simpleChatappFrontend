import React, { Component } from 'react'
import ChatContainer from './Components/ChatContainer'
import {Route, Switch} from 'react-router-dom'
import Signup from './Components/Signup'
import Homepage from './Components/Homepage'

export class App extends Component {
  render() {
    return (
      <div >
          <h3 id ='app-title'> Chatting App</h3>
        <Switch>
              <Route path = '/home' component = { Homepage }/>
              <Route path = '/' component={ Signup }/>
        </Switch>
      </div>
    )
  }
}

export default App
