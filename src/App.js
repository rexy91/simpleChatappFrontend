import React, { Component } from 'react'
import ChatContainer from './Components/ChatContainer'
import {Route, Switch} from 'react-router-dom'
import Signup from './Components/Signup'
import Homepage from './Components/Homepage'

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
            console.log(resp.token)
            console.log(resp.user)
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
              <Route path = '/' component={ Signup }/>
        </Switch>
      </div>
    )
  }
}

export default App
