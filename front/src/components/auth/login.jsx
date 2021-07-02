import React, {useState} from 'react'
import { Container, ContainerForm, FormGroup, Label, Input, Message, Button } from '../style-components/components'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { loginUser } from './services/ProviderFuntions'

const Login = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataForm, setdataForm] = useState([])
    
   const SuccesRedirect = () => history.push('/profile')
   const ErrorRedirect = () =>{
    history.push('/login')
    document.querySelector('.aviso').innerHTML=`<p>Logger error</p>`
   }
    const onSubmit = (data, e) => {
        setdataForm([
            ...dataForm,
            data
        ])
        e.target.reset()
       loginUser(data, SuccesRedirect, ErrorRedirect)
    }
    return(
        <Container>
            <h1>Login</h1>
            <ContainerForm onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Message className="aviso"></Message>
            </FormGroup>
            <FormGroup>
                <Label >Email</Label>
                <Input
                    name="email"
                    type="email"
                        {...register('email',{
                            required: {value: true, message: 'Require email'},
                            pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/, message: 'Invalid Email'}
                        })}
                    />  
                {
                    errors.email && 
                    <Message>
                        {errors.email.message}
                    </Message>
                }

            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input  name="password"
                    type="password"
                        {...register('password',{
                            required: {value: true, message: 'Require password'},
                            minLength: {value: 4, message: 'Min four words'}
                        })}
                    />  
                {
                    errors.password && 
                    <Message>
                    {errors.password.message}
                    </Message>
                }
            </FormGroup>
            <FormGroup>
                <Button type="submit" >Send</Button>
            </FormGroup>
            </ContainerForm>
        </Container>
    )
}

export default Login   