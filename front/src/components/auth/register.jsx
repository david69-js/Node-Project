import React, {useState} from 'react'
import {  Container, ContainerForm, FormGroup, Label, Input, Message, Button } from '../style-components/components'
import { useForm } from "react-hook-form";
import { SendAndRegisterUser } from './services/ProviderFuntions'
import { useHistory } from 'react-router';
const Register = () => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [dataForm, setdataForm] = useState([]);
    
   const SuccesRedirect = () => history.push('/profile')
   const ErrorRedirect = () =>{
    history.push('/register')
    document.querySelector('.aviso').innerHTML=`<p>This user already exists</p>`
   }
   const getdata = (data) => console.log(data);
    const onSubmit = (data, e) => {
        setdataForm([
            ...dataForm,
            data
        ])
        e.target.reset()
        SendAndRegisterUser(data, SuccesRedirect, ErrorRedirect, getdata);
    }

   return(
    <Container>
         <h1>Register</h1>
        <ContainerForm onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
                <Message className="aviso"></Message>
            </FormGroup>
            <FormGroup>
                <Label>Name</Label>
                    <Input
                        name="name"
                    type="text"
                        {...register('name',{
                            required: {value: true, message: 'Require name'},
                            minLength: {value: 4, message: 'Min four words'}
                        })}
                    />  
                {
                    errors.name && 
                    <Message>
                    {errors.name.message}
                    </Message>
                }
            </FormGroup>
            <FormGroup>
                <Label>Email</Label>
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
                    <Input
                        name="password"
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

export default Register   