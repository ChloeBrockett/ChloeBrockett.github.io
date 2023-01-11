import React from 'react';
import { useState,Fragment} from 'react';
import './styles/home.css';
import {IonIcon} from '@ionic/react';
import {logoFacebook,mailOutline,logoGithub} from 'ionicons/icons';

//template {title:"",buttonText:"",text:""}
const projects = [
        {title:"Chloe Brockett",
            buttonText:"About Me",
            text:<Fragment>
                Hi! I'm Chloe! I'm a 3rd year computer science student and aspiring junior dev! I'm a lifelong learner who sweats the details.
                I love writing pretty code thats both easy to read, and simple to maintain. I'm at my happiest when I've got a tough new problem 
                to chew on, especially when the solution teaches me a new skills or a novel approach.<br /><br />


                I've never been afraid to dive headling into challenging new experiences, both professionally and in my own time. Most recently,
                I taught myself car repair with a 2 month deadline after my beloved miata's front end was caved in by a much larger BMW
                </Fragment>
        },    
        {
            title:"Python Minimax",
            buttonText:"Python Minimax",
            text:<Fragment>
                    Technologies: Python, GitHub<br/>
                    This was a short project to demonstrate my ability to accurately implement algorithms, competency with python, as well as how 
                    I approach creating readable code. It is a command line app where a human player can attempt to beat the computer
                    at noughts and crosses. <br/><br/>
                    Because the game is solved, a perfect player will always force atleast a draw, which this app achieves via the 
                    recursive tree search algorithm 'minimax'. The algorithm alternates between selecting the move that <strong>maximises</strong> the current
                    players chances of victory, then the move which <strong>minimises</strong> their odds (ie: the opponents best move). It heuristically analyses
                    game states and chooses the first best option. In future I will refactor the project to use OOP, optimise with alpha beta pruning, and
                    add an element of randomness for more interesting gamelay<br/>
                    <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses"><button>View Project</button></a>
                    <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses/releases"><button>Download Executable</button></a>
                </Fragment>
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
                    
                    <div class='social-link-wrapper'>
                        <a  href='https://github.com/ChloeBrockett'>
                            <IonIcon class='social-icon' icon={logoGithub}/>
                        </a>
                    </div>
                    <div class='social-link-wrapper'>
                        <a  href='mailto:chloe@brockett.id.au'>
                            <IonIcon class='social-icon' icon={mailOutline}/>
                        </a>
                    </div>
                    <div class = 'social-link-wrapper'>
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
                        onClick={()=>{
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