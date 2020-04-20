import React, { Component } from 'react'
import ChatContainer from './Components/ChatContainer'
import {Route, Switch} from 'react-router-dom'
import Signup from './Components/Signup'
import Homepage from './Components/Homepage'
import ConversationContainer from './Components/ConversationContainer'

export class App extends Component {
  state = {
    //Without using redux, we need local state to store the user object.
    currentUser: {}
  }

  componentDidMount(){
        if (localStorage.getItem('token')){
          let token = localStorage.getItem('token')
          fetch(`http://localhost:3000/persist`,{
          headers: {
          "Authorization": `bearer ${token}`
        }
          })
          .then(res => res.json())
          .then(resp => {
            this.setState({
              currentUser:resp.user
            })
          })
        }
  }

  render() {
    return (
      <div >
          <h3 id ='app-title'> Chatting App</h3>
        <Switch>
              <Route path = '/home' component = { () =>  <Homepage  user={this.state.currentUser}/> } />
               {/* exact path so only '/' will render signup, not if there is anything after it.  */}
              <Route exact path = '/' component={ Signup }/>
              <Route exact path ='/:current_user_id/:receiving_user_id/conversation' component = { ConversationContainer }/>
        </Switch>
      </div>
    )
  }
}

export default App
