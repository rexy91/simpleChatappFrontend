import React, { Component } from 'react'
import {withRouter} from 'react-router'

import ConversationContainer from './ConversationContainer'

export class Homepage extends Component {

    state={
        allUsers:[]
    }
    renderDropdown = () => {
        return <select class="ui dropdown">
        <option value="">Users</option>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>
                
    }
    render() {
        const {user} = this.props
        const {first_name, last_name, username} = user
        
        return (
            <div>
                <h4>Logged In as: {username}</h4>
                {this.renderDropdown()}
            </div>
        )
    }
}

export default Homepage
