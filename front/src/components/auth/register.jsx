import React from 'react'
import {  Container, ContainerForm, FormGroup, Label, Input, Message, Button } from '../style-components/components'

const Register = () => {
    return(
        <Container>
        <h1>Login</h1>
        <ContainerForm>
        <FormGroup>
            <Label >Name</Label>
            <Input />
            <Message>This is the validation message</Message>
        </FormGroup>
        <FormGroup>
            <Label >Email</Label>
            <Input />
            <Message>This is the validation message</Message>
        </FormGroup>
        <FormGroup>
            <Label>Password</Label>
            <Input />
            <Message>This is the validation message</Message>
        </FormGroup>
        <FormGroup>
            <Button>Register</Button>
        </FormGroup>
        </ContainerForm>
    </Container>
    )
}

export default Register   