import React, { Component } from 'react'
import Message from './Message'

export class ConversationContainer extends Component {
    
    state={
        message:'',
        messages:['firstmessage','second','thrid','fdjsfjds','sdfsdf']
    }
    componentDidMount(){
        // const recipient_id = this.props.match.params.receiving_user_id
    }

    appendMessage = (e)=>{
        e.preventDefault()
        const newMessageContent = e.target.content.value
        this.setState({
            messages:[...this.state.messages, newMessageContent]
        })
    }

    render() {
        const messagesMapper = this.state.messages.map(message => {
            return <div>{message}</div>
        })
        return (
            <div className='conver-container'>
                <div className='ui grid'>
                    <div className='sixteen wide column border conversation-box'> 
                        {messagesMapper}
                    </div>
                    <div className='sixteen wide column message-box'>
                            <form action="" onSubmit = {this.appendMessage}>
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
