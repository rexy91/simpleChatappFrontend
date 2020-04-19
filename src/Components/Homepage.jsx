import React, { Component } from 'react'
import {withRouter} from 'react-router'

export class Homepage extends Component {
    render() {
        const {user} = this.props
        const {first_name, last_name, username} = user
        
        return (
            <div>
                <h4>Logged In as: {username}</h4>
            </div>
        )
    }
}

export default Homepage
