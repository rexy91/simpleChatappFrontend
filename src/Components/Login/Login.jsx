import React, { Component } from 'react'
import './Login.css'

export class Login extends Component {
    render() {
        return (
            <div className='loginForm'>
                <form></form>
                <h3>Please Login</h3>
                <label >Username</label>
                <input type="text" name='username' placeholder='username'/>
                <br/>
                <label >Password</label>
                <input type="password" name='password' placeholder='password'/>
                <br/>
                <button type='submit'>Login</button>
            </div>
        )
    }
}

export default Login
