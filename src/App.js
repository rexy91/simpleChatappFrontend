import React, { Component } from 'react'
import ChatContainer from './Components/ChatContainer'
export class App extends Component {
  render() {
    return (
      <div >
          <h3 id ='app-title'> Chatting App</h3>
          <ChatContainer/>
      </div>
    )
  }
}

export default App
