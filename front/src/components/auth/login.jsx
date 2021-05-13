import React from 'react'
import { Container, ContainerForm, FormGroup, Label, Input, Message, Button } from '../style-components/components'
const Login = () => {
    return(
        <Container>
            <h1>Login</h1>
            <ContainerForm>
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
                <Button>Enter</Button>
            </FormGroup>
            </ContainerForm>
        </Container>
    )
}

export default Login   