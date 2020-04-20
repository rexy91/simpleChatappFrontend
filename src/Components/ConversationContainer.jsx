import React, { Component } from 'react'


export class ConversationContainer extends Component {
    render() {
        return (
            <div className='conver-container'>
                <div className='ui grid'>
                    <div className='sixteen wide column border conversation-box'>
                            <h1>fdfdf</h1>
                    </div>
                    <div className='sixteen wide column message-box'>
                            <form action="">
                                <textarea cols="60" rows="2" placeholder='message'></textarea>
                                <button type='submit'>Send</button>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConversationContainer
