import React, { Component } from 'react'
import {withRouter} from 'react-router'

import ConversationContainer from './ConversationContainer'

export class Homepage extends Component {

    state={
        allUsers:[]
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users`,{
        method:'GET'
        })
        .then(res => res.json())
        .then(allUsers => {
            this.setState({
                allUsers:allUsers
            })
        })
    }
    
    dropdownSelect = (e) => {
        const receving_msg_user_id = e.target.value
        // now this.props.history in conversation component will have receving user id, so we can fetch that user object to persist message.
        this.props.history.push(`/${this.props.user.id}/${receving_msg_user_id}/conversation`)
    }
    
    render() {
        const {user} = this.props
        const {first_name, last_name, username} = user
        const usersMapper = this.state?.allUsers?.map(singleUser => {
            return <option value={singleUser.id}>{singleUser.username}</option>
        })
        return (
            <div>
                <h4>Logged In as: {username}</h4>
                <h5>Message To:</h5>
                <select onChange={this.dropdownSelect} className='ui dropdown'>
                {usersMapper} 
                </select>
            </div>
        )
    }
}

export default withRouter(Homepage)
