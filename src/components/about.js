import React from "react";
import NavigateBlack from "./common/navblack";

import toast, { Toaster } from 'react-hot-toast';

const pressed = () => toast('Here is your toast.');
const About = () => {

  return (
    <>
    
      <h1>Hello</h1>
      <div className="container-fluid">
        <button onClick={pressed}>Hello</button>
        
      </div>
      <Toaster/>
    </>
  );
};

export default About;
