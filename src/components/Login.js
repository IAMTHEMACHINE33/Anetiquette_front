import React, {useRef, useState, useEffect} from 'react';
import * as style from '../style';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
    clearErrors,
    login,
    register,
} from "../actions/userActions"
import {useAlert} from "react-alert"


const Login=()=> {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const alert = useAlert()

    const {error, loading, isAuthenticated} = useSelector((state)=>state.user)

     const [loginEmail, setLoginEmail] = useState("")
     const [loginPassword, setLoginPassword]= useState("")

     const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
     })

     const {name, email, password} = user


     const loginSubmit=(e)=>{
        e.preventDefault();
        
        dispatch(login(loginEmail, loginPassword))
        
     }

     const registerSubmit=(e)=>{
        e.preventDefault()
        const myForm = new FormData()

        myForm.set("name", name)
        myForm.set("email", email)
        myForm.set("password", password)
        
        dispatch(register(myForm))
     }

     const registerDataChange = (e)=>{
            setUser({...user, [e.target.name]: e.target.value})
     }

     const redirect=location.search ? location.search.split("=")[1] : "/"

     useEffect(() => {
        if(error){
            alert.error(error)
            dispatch(clearErrors())
        }
        if(isAuthenticated){

            navigate(redirect)
        }
     }, [dispatch, error, navigate, isAuthenticated, redirect])

    const [signIn, toggle] = React.useState(true);
      return(
          <style.Container>
              <style.SignUpContainer>
                  <style.Form encType='multipart/form-data' onSubmit={registerSubmit}>
                      <style.Title>Create Account</style.Title>
                      <style.Input 
                        type='text' 
                        placeholder='Name' 
                        required
                        name="name"
                        value={name}
                        onChange={registerDataChange}
                        />
                      <style.Input 
                      type='email' 
                      placeholder='Email' 
                      required
                      name='email'
                      value={email}
                      onChange={registerDataChange}
                      />
                      <style.Input 
                      type='password' 
                      placeholder='Password' 
                      required
                      name="password"
                      value={password}
                      onChange={registerDataChange}
                      />
                      <style.Anchor><style.Input type="submit" name="registersubmit" value="Sign Up" background-color='#ff4b2b'/></style.Anchor>
                  </style.Form>
              </style.SignUpContainer>

              <style.SignInContainer signinIn={signIn}>
                   <style.Form onSubmit={loginSubmit}>
                       <style.Title>Sign in</style.Title>
                       <style.Input 
                            type='email' 
                            placeholder='E-mail' 
                            name='loginemail'
                            required 
                            value={loginEmail}
                            onChange={(e)=>setLoginEmail(e.target.value)}
                        />
                       <style.Input 
                            type='password' 
                            placeholder='Password'
                            name='loginpassword'
                            required
                            value={loginPassword} 
                            onChange={(e)=>setLoginPassword(e.target.value)}
                        />
                       <style.Anchor >Forgot your password?</style.Anchor>                
                       <style.Anchor ><style.Input type="submit" name="loginsubmit" value="Sign In"/></style.Anchor>
                   </style.Form>
              </style.SignInContainer>

              <style.OverlayContainer  signinIn={signIn}>
                  <style.Overlay  signinIn={signIn}>

                  <style.LeftOverlayPanel signinIn={signIn}>
                      <style.Title>Welcome Back!</style.Title>
                      <style.Paragraph>
                          Already Have an Account? Whats stopping you?
                      </style.Paragraph>
                      <style.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </style.GhostButton>
                      </style.LeftOverlayPanel>

                      <style.RightOverlayPanel signinIn={signIn}>
                        <style.Title>AntiQuette</style.Title>
                        <style.Paragraph>
                            | Explore the Marketplace | 
                        </style.Paragraph>
                            <style.GhostButton onClick={() => toggle(false)} name="signup">
                                Sign Up
                            </style.GhostButton> 
                      </style.RightOverlayPanel>
  
                  </style.Overlay>
              </style.OverlayContainer>

          </style.Container>
      )
    }


export default Login;
