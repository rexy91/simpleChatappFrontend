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

    render() {
        return (
            <div>  
                  <h3 style={{textAlign:'center'}}>Register</h3>
                  <Form>
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
