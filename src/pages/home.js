import React from 'react';
import { useState,Fragment} from 'react';
import './styles/home.css';
import {IonIcon} from '@ionic/react';
import {logoFacebook,mailOutline,logoGithub} from 'ionicons/icons';

//template {title:"",buttonText:"",text:<Fragment></Fragment>}
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
                
                    Technologies: Python, GitHub<br/><br/>
                    This was a short project to demonstrate my ability to accurately implement algorithms, competency with python, as well as how 
                    I approach creating readable code. It is a command line app where a human player can attempt to beat the computer
                    at noughts and crosses. <br/><br/>
                    Because the game is solved, a perfect player will always force atleast a draw, which this app achieves via the 
                    recursive tree search algorithm 'minimax'. The algorithm alternates between selecting the move that <strong>maximises</strong> the current
                    players chances of victory, then the move which <strong>minimises</strong> their odds (ie: the opponents best move). It heuristically analyses
                    game states and chooses the first best option. In future I will refactor the project to use OOP, optimise with alpha beta pruning, and
                    add an element of randomness for more interesting gamelay<br/><br/>
                    <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses" rel="noreferrer" target="_blank" ><button>View Project</button></a>
                    <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses/releases"rel="noreferrer" target="_blank"><button>Download Executable</button></a>
                </Fragment>
        },
        {
            title:"Portfolio",
            buttonText:"Portfolio",
            text:<Fragment>
                Technologies: React, HTML, CSS, Github<br />React Packages: Ionicons, ghpages<br /><br />
                This project is the portfolio site you are using. I used the project as a chance to refresh myself on React, one of my favourite libraries.
                My past experience building websites was through my studies, where design and even HTML/CSS themselves are only a minor 
                part of the overall assessment. I wanted to challenge myself to come up with my own design, using the opportunity to gain a
                deeper understanding of CSS in particular. For this reason, I avoided using react packages, and chose to style the page from scratch, with the sole
                exception of ionicons, a package that allows icons to be used inline with text and styled with similar css. I am not a designer; but designers will
                be a core part of any future team, and a goal of the project was to demonstrate my appreciation and ability to work alongside to deliver SOMETHING SOMETHING END PRODUCT
                <br /><br />
                My major design goal was to have an effective pedestal for my work It needs to reflects my personality, it needs to be bold and memorable while still 
                retaining simplicity as to not be a distraction. I found many junior developer websites showcased as work-ready examplars to be rather plain and samey,
                many were greys on whites. Most also used common libraries like bootstrap or material, and while these do have their place, I wanted to stand apart. 
                I've often seen it discussed how the use of these tools obfuscates understanding of underlying technologies. This was another reason I avoided their use - 
                a goal of the project is to demonstrate my love of challenging myself to learn and develop deeper understanding. 
                <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses" rel="noreferrer" target="_blank" ><button>View Project</button></a>
            </Fragment>
        }
    ]


function Home (){
    const [contentHeader,setContentHeader]=useState(projects[0].title)
    const [contentText,setContentText]=useState(projects[0].text)
    const [active,setActive]=useState(projects[0].buttonText)
    return(
        
        <div className='main-container'>

            <div className='main-container-inner'>
                <div className='header'>
                    <h1>{contentHeader}</h1>
                </div>
            
                <div className='social-links'>
                    
                    <div className='social-link-wrapper'>
                        <a  href='https://github.com/ChloeBrockett' target="_blank" rel="noreferrer">
                            <IonIcon class='social-icon' icon={logoGithub} />
                        </a>
                    </div>
                    <div className='social-link-wrapper'>
                        <a  href='mailto:chloe@brockett.id.au' target="_blank" rel="noreferrer">
                            <IonIcon class='social-icon' icon={mailOutline}/>
                        </a>
                    </div>
                    <div className = 'social-link-wrapper'>
                        <a  href='https://www.facebook.com/DominaAlgentem' target="_blank" rel="noreferrer">
                            <IonIcon  class='social-icon' icon={logoFacebook}/>
                        </a>
                    </div>

                </div>
                
                <div className='content'>
                    <p>
                        {contentText}
                    </p>
                </div>
                
                <div className='menu'>
                    <h3>Projects</h3>
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