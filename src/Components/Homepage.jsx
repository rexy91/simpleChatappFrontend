import React, { Component } from 'react'
import {withRouter} from 'react-router'

import ConversationContainer from './ConversationContainer'

export class Homepage extends Component {
    render() {
        const {user} = this.props
        const {first_name, last_name, username} = user
        
        return (
            <div>
                <h4>Logged In as: {username}</h4>
                <h5>Users on the app:</h5>
            </div>
        )
    }
}

export default Homepage
