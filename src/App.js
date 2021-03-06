import React, { Component } from 'react'
import ChatContainer from './Components/ChatContainer'
import {Route, Switch} from 'react-router-dom'
import Signup from './Components/Signup'
import Homepage from './Components/Homepage'
import ConversationContainer from './Components/ConversationContainer'
import Login from './Components/Login/Login'

export class App extends Component {
  state = {
    //Without using redux, we need local state to store the user object.
    currentUser: {},
    currentToken:''

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
              currentUser:resp.user,
              currentToken:resp.token
            })
          })
        }
  }

  handleLoginOnAppJS = (username,password) =>{
    fetch(`http://localhost:3000/login`, {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body:JSON.stringify({
          username,
          password
      })
  })
  .then(res => res.json())
  .then(resp => {
    localStorage.setItem("token", resp.token)
      this.setState({
        currentUser:resp.user,
        currentToken:resp.token 
      })
  })
  }

  render() {  
    return (
      <div >
          <h3 id ='app-title'> Chatting App</h3>
        <Switch>
              <Route path = '/home' component = { () =>  <Homepage  user={this.state.currentUser}/> } />
               {/* exact path so only '/' will render signup, not if there is anything after it.  */}
              <Route exact path = '/' component= { Signup } /> }/>
              <Route path = '/login' component={ ()=> <Login handleLoginOnAppJS={this.handleLoginOnAppJS} /> }/>
              <Route exact path ='/:current_user_id/:receiving_user_id/conversation' component = { ()=> <ConversationContainer user={this.state.currentUser} /> }/>
        </Switch>
      </div>
    )
  }
}

export default App
