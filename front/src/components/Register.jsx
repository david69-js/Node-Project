import React from 'react'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Register_User } from "../service/registerUser";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {name, token} = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const onSubmit = async (data, e) =>{
        Register_User(data, dispatch);
    }
    
    return (
        <div className="container mx-auto flex flex-col items-center justify-center">
            <h1 className="w-80 text-center">Register</h1>
            <div className="register-container w-80">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group w-full mb-3">
                    <label>Name</label>
                    <input  className="w-full"
                            name="name"
                            type="text"
                                {...register('name',{
                                    required: {value: true, message: 'Require name'},
                                    minLength: {value: 4, message: 'Min four words'}
                                })}
                            />  
                        {
                            errors.name && 
                        <span>
                            {errors.name.message}
                        </span>
                        }
                </div>
                <div className="form-group w-full mb-3">
                    <label>Email</label>
                    <input  className="w-full"
                            name="email"
                            type="email"
                                {...register('email',{
                                    required: {value: true, message: 'Require email'},
                                    pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/, message: 'Invalid Email'}
                                })}
                            />  
                        {
                            errors.email && 
                            <span>
                                {errors.email.message}
                            </span>
                        }
                </div>
                <div className="form-group w-full mb-3">
                    <label>Password</label>
                    <input  className="w-full"
                        name="password"
                        type="password"
                            {...register('password',{
                                required: {value: true, message: 'Require password'},
                                minLength: {value: 4, message: 'Min four words'}
                            })}
                        />  
                    {
                        errors.password && 
                        <span>
                        {errors.password.message}
                        </span>
                    }
                </div>
                <div className="form-group w-full">
                    <button className="bg-neutral-600 px-5 py-2 text-white" type="submit" >Send</button>
                </div>
            </form>   
            <p>Hello: { name }</p>
            <p>Your token is: { token }</p> 
            </div>
            <Link to='/'>Come back to home</Link><br />
        </div>
    )
}

export default Register