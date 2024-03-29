//import { Axios } from "axios";
//import { response } from "express";
import React, {useState} from "react";
import {useDispatch} from 'react-redux'
import {loginUser} from '../../../_actions/user_action'
import {useNavigate} from 'react-router-dom'
import Auth from '../../../hoc/auth'

function LoginPage(props) {

    let navigate = useNavigate()

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event)=>{
        event.preventDefault();

        // console.log('Email', Email)
        // console.log('Password', Password)

        let body = {
            email : Email,
            password : Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    navigate('/')
                } else {
                    alert('Error')
                }
            })

        
    }

    return (
        <div style={{display : 'flex' , justifyContent: 'center',
        alignItems : 'center', width : '100%', height : '100vh'

        }}>
            <form style={{display : 'flex', flexDirection : 'column'}}
                onSubmit = {onSubmitHandler}
            >
                <label>Email</label>
                <input type = "Email" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type = "Password" value={Password} onChange ={onPasswordHandler}/>
                <br/>
                <button type="submit">
                    login
                </button>


            </form>
        </div>
    )
}

export default Auth(LoginPage,false)