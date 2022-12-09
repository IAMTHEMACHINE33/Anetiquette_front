import React from 'react'
import './videostyle.css'
import bgVideo from './beachVid.mp4'
import TestBar from './testbar'
import AboutFooter from './Afooter'
import Card from './card/card'

const Video = ()=> {
    return(
        <>
        <TestBar/>
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={bgVideo} type='video/mp4'/>
            </video>
            <div className='content'>
                <h1>About Us</h1>
                <p>Team DuckDuckGoose</p>
            
            <div>
                <a href="https://www.facebook.com/profile.php?id=100009880032344" target="_blank" className='btn'>Contact Us</a>
                <a href="https://github.com/IAMTHEMACHINE33/Anetiquette_front"  target="_blank" className='btn btn-light'>GitHub Repo</a>      
            </div>
            
            </div>
        </div>
        
        <Card/>
        <AboutFooter/>
        
        </>

    )

}

export default Video;