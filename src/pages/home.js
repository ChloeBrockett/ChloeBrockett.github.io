import React from 'react';
import { useState} from 'react';
import './styles/home.css';
import {IonIcon} from '@ionic/react';
import {logoFacebook,mailOutline,logoGithub} from 'ionicons/icons';

//template {title:"",buttonText:"",text:""}
const projects = [
        {title:"Chloe Brockett",
            buttonText:"About Me",
            text:"Hi! I'm Chloe, a computer science student and aspiring junior dev! I'm a lifelong learner who sweats the details. I love writing pretty code thats both easy to read, and simple to maintain."
        },    
        {
            title:"London",
            buttonText:"London",
            text:"London is pretty cool"
        }
    ]


function Home (){
    const [contentHeader,setContentHeader]=useState(projects[0].title)
    const [contentText,setContentText]=useState(projects[0].text)
    const [active,setActive]=useState(projects[0].buttonText)
    return(
        
        <div class='main-container'>

            <div class='main-container-inner'>
                <div class='header'>
                    <h1>{contentHeader}</h1>
                </div>
            
                <div class='social-links'>
                    <div class='social-links-inner'>
                        <a  href='https://github.com/ChloeBrockett'>
                            <IonIcon class='social-icon' icon={logoGithub}/>
                        </a>
                        <a  href='mailto:chloe@brockett.id.au'>
                            <IonIcon class='social-icon' icon={mailOutline}/>
                        </a>
                        <a  href='https://www.facebook.com/DominaAlgentem'>
                            <IonIcon  class='social-icon' icon={logoFacebook}/>
                        </a>
                    </div>
                </div>
                
                <div class='content'>
                    <p>
                        {contentText}
                    </p>
                </div>
                <div class='menu'>
                    {projects.map((project) => (
                        <button
                        key={project.buttonText}
                        onClick={(event)=>{
                            setActive(project.buttonText)
                            setContentText(project.text)
                            setContentHeader(project.title)
                        }}
                        className={`${(active===project.buttonText)?"active":""}`}
                        >
                           {project.buttonText}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home;