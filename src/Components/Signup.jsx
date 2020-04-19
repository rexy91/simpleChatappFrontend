import React, { Component } from 'react'
import {Form, Button, Checkbox} from 'semantic-ui-react'

export class Signup extends Component {
    render() {
        return (
            <div>  
                  <h3 style={{textAlign:'center'}}>Register</h3>
                  <Form>
                        <Form.Field>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                        </Form.Field>
                        <Form.Field>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                        </Form.Field>
                        <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
            </div>
        )
    }
}

export default Signup
