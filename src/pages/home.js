import React from 'react';
import { useState,Fragment} from 'react';
import './styles/home.css';
import {IonIcon} from '@ionic/react';
import {logoFacebook,mailOutline,logoGithub} from 'ionicons/icons';

//The following is a spoof of a JSON object that in future could come from a request to an API. Its the sites content
//template {title:"",buttonText:"",text:<Fragment></Fragment>}
const projects = [
        {title:"Chloe Brockett",
            buttonText:"About Me",
            text:<Fragment>
                    Hi! I'm Chloe! I'm a Dean's Award winning 3rd year computer science student at QUT, and aspiring junior dev! I'm a lifelong learner who 
                    sweats the details. I love writing pretty code thats both easy to read, and simple to maintain. I'm at my happiest when I've got a tough new problem 
                    to chew on, especially when the solution teaches me a new skills or a novel approach.<br /><br />

                    I've never been afraid to dive headlong into challenging new experiences, both professionally and in my own time. Most recently, my beloved Miata's
                    front end was caved in after I was cut off by a much larger BMW SUV. With a 2 month deadline, I taught myself car repair, completely stripped and
                    restored the interior, and cut out and replaced the front end damage. I am able to quickly research and apply new concepts to find practical solutions to problems,
                    from removing my car's dash to building one for your project.
                    <br /><br />

                    My decade of hospitality experience has given me very strong organisation, time management, and teamwork skills. During the chaos of a rush, my 
                    ability to clearly communicate with colleagues and analyse task prioritisation was key to maintaining efficent workflow. <br /><br />
                    
                    ou can see an album of my WIP car repair/restore <a 
                    href="https://imgur.com/gallery/8hkR8vm" rel="noreferrer" target="_blank"
                    >
                        here
                    </a>, or just the <a 
                    href="https://imgur.com/gallery/Sg44zMB" rel="noreferrer" target="_blank"
                    >
                        highlights.
                    </a>
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
                    Technologies: React, HTML, CSS, Github, Responsive Design<br />React Packages: Ionicons, ghpages<br /><br />
                    This project is the portfolio site you are using. I used the project as a chance to refresh myself on React, one of my favourite libraries.
                    My past experience building websites was through my studies, where design and even HTML/CSS themselves are only a minor 
                    part of the overall assessment. I wanted to challenge myself to come up with my own design, using the opportunity to gain a
                    deeper understanding of CSS in particular. For this reason, I avoided using react packages, and chose to build and design mostly from scratch, with the sole
                    exception of ionicons, a package that allows icons to be used inline with text and styled with similar css. I am not a designer; but designers will
                    be a core part of any future team, and a goal of the project was to demonstrate my ability to collobarate on bespoke design over off the shelf solutions.
                    <br /><br />
                    My major design goal was to have an effective pedestal for my work It needs to reflects my personality, it needs to be bold and memorable while still 
                    retaining simplicity as to not be a distraction. I found many junior developer websites showcased as work-ready examplars to be rather plain and samey,
                    many were greys on whites. Most also used common libraries like bootstrap or material, and while these do have their place, I wanted to stand apart. 
                    I've often seen it discussed how the use of these tools obfuscates understanding of underlying technologies. This was another reason I avoided their use - 
                    a goal of the project is to demonstrate my love of challenging myself to learn and develop deeper understanding of base technologies. <br/><br/>
                    <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses" rel="noreferrer" target="_blank" ><button>View Project</button></a>
            </Fragment>
        },
        {
            title:"VolcMapr",
            buttonText:"CAB230 VolcMapr",
            text:<Fragment>
                Technologies: React, REST api, HTML, CSS, JWT<br />Packages: AG Grid, Pigeon Maps, ChartJS 2, JWT Decode<br /><br />
                This was a website made for CAB230: Web Computing for my degree at QUT in 2022. Using react and a number of component libraries, the app consumes
                a REST api hosted by the faculty to dynamically display data provided by the Smithsonian Institute's <a 
                    href=" https://volcano.si.edu/"target="_blank" rel="noreferrer"
                >
                    Global Volcanism Program
                    </a>.<br /><br />
                The focus of this assignment was teaching core React concepts like Hooks, Routers and Components, and to then leverage these concepts with a 
                variety npm packages to accurately present the data available across API endpoints, both with and without auth tokens. Users are able to filter 
                and sort tabulated volcano data, and view the location of and chart data relating to individual volcanos<br /><br />

                The full source code is availabe on my GitHub<br /><br />
                <a href="https://github.com/ChloeBrockett/Volcano-React-Assignmen" rel="noreferrer" target="_blank" ><button>View Project</button></a>
            </Fragment>
        }
    ]

//Javascript logic
function Home (){
    //States for the header, displayed content, and tracker for white "tab" of the site we are viewing
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
                    {/* Maps each item in the dummy spoof to a button 
                    On click each button updates the corresponding state 
                    On each rerender the classname is calculated so the currently active tab can have its associated button styled*/ }
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