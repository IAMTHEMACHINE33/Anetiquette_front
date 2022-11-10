import React from 'react';
import * as style from './style';
import { useNavigate } from "react-router-dom";


const Login=()=> {
        const navigate = useNavigate();
        const [signIn, toggle] = React.useState(true);
      return(
          <style.Container>
              <style.SignUpContainer signinIn={signIn}>
                  <style.Form>
                      <style.Title>Create Account</style.Title>
                      <style.Input type='text' placeholder='Name' />
                      <style.Input type='email' placeholder='Email' />
                      <style.Input type='password' placeholder='Password' />
                      <style.Button>Sign Up</style.Button>
                  </style.Form>
              </style.SignUpContainer>

              <style.SignInContainer signinIn={signIn}>
                   <style.Form>
                       <style.Title>Sign in</style.Title>
                       <style.Input type='email' placeholder='E-mail' />
                       <style.Input type='password' placeholder='Password' />
                       <style.Anchor >Forgot your password?</style.Anchor>
                       <style.Anchor ><style.Button onClick={() => navigate("/dash")}>Sign In</style.Button></style.Anchor>
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
                            <style.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </style.GhostButton> 
                      </style.RightOverlayPanel>
  
                  </style.Overlay>
              </style.OverlayContainer>

          </style.Container>
      )
    }


export default Login;