import React, {useRef, useState, useEffect} from 'react';
import * as style from '../../style';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
    clearErrors,
    login_admin,
    register_admin,
} from "../../actions/adminActions"
import {useAlert} from "react-alert"


const Login_admin=()=> {
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
        dispatch(login_admin(loginEmail, loginPassword))
     }

     const registerSubmit=(e)=>{
        e.preventDefault()
        const myForm = new FormData()

        myForm.set("name", name)
        myForm.set("email", email)
        myForm.set("password", password)
        
        dispatch(register_admin(myForm))
     }

     const registerDataChange = (e)=>{
            setUser({...user, [e.target.name]: e.target.value})
     }

     const redirect=location.search ? location.search.split("=")[1] : "/admin/dashboard"

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
                            | Sign In as Admin | 
                        </style.Paragraph>
                      </style.RightOverlayPanel>
  
                  </style.Overlay>
              </style.OverlayContainer>

          </style.Container>
      )
    }


export default Login_admin;
