import React, { Component } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'

export class Signup extends Component {
    state = {
        firstname:'',
        lastname:'',
        username:'',
        password:''
    }

    handleOnchange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handlesignup = (e) => {
        e.preventDefault()
        const first_name = e.target.firstname.value
        const last_name = e.target.lastname.value
        const username = e.target.username.value
        const password = e.target.password.value
        console.log('gere')
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
              "content-type": "application/json",
              Accept: 'application/json'
            },
            body: JSON.stringify(
                {first_name,
                last_name,
                username,
                password}
                )
          })
            .then(r => r.json())
            .then(newUser => {
                console.log(newUser)
                this.props.history.push('/home')
            })
    }

    render() {
        return (
            <div>  
                  <h3 style={{textAlign:'center'}}>Register</h3>
                  <Form onSubmit={this.handlesignup}>
                        <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name'
                               name='firstname'
                               value={this.state.firstname}
                               onChange = {this.handleOnchange}
                        />
                        </Form.Field>
                        <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' 
                               name='lastname'
                               value={this.state.lastname}
                               onChange = {this.handleOnchange}
                        />
                        </Form.Field>
                        <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' 
                               name='username'
                               value={this.state.username}
                               onChange = {this.handleOnchange}
                        />
                        </Form.Field>
                        <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' 
                               type='password'
                               name='password'
                               value={this.state.password}
                               onChange = {this.handleOnchange}
                        />
                        </Form.Field>
                        <Button type='submit'>Register</Button>
                    </Form>
            </div>
        )
    }
}

export default Signup
