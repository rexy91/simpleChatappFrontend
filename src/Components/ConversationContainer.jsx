import React, { Component } from 'react'
import Message from './Message'

export class ConversationContainer extends Component {
    
    // fetch recipient object
    // Conversation will need both current user and recipient user to persists messages.
    
    componentDidMount(){
        // const recipient_id = this.props.match.params.receiving_user_id
    }

    generateMessage = (e)=>[
        e.preventDefault()

    ]
    render() {
        console.log(this.props.user)
        return (
            <div className='conver-container'>
                <div className='ui grid'>
                    <div className='sixteen wide column border conversation-box'> 

                    </div>
                    <div className='sixteen wide column message-box'>
                            <form action="" onSubmit = {this.generateMessage}>
                                <textarea name='content' cols="60" rows="2" placeholder='message'></textarea>
                                <button type='submit'>Send</button>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConversationContainer
