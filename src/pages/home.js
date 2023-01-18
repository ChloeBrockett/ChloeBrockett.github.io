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

                    I've never been afraid to dive headlong into challenging new experiences - both professionally and in my own time. Most recently, a large 
                    BMW SUV caved in my beloved Miata's front end after cutting me off in traffic. With a 2-month deadline I taught myself car repair, completely 
                    stripped and restored the interior, and cut out and replaced the front-end damage. I am able to quickly research and apply new concepts to find practical 
                    solutions to problems - from removing my car's dash to building a dash for your project.
                    <br /><br />

                    My decade of hospitality experience has given me very strong organisation, time management, and teamwork skills. During the chaos of a rush, my 
                    ability to communicate clearly with colleagues and analyse task prioritisation was key to maintaining efficient workflow. <br /><br />
                    
                    You can see an album of my WIP car repair/restore <a 
                    href="https://imgur.com/gallery/8hkR8vm" rel="noreferrer" target="_blank"
                    >
                        here
                    </a>, or just the highlights <a 
                    href="https://imgur.com/gallery/Sg44zMB" rel="noreferrer" target="_blank"
                    >
                        here.
                    </a>
                </Fragment>
        },    
        {
            title:"Portfolio",
            buttonText:"Portfolio",
            text:<Fragment>
                    Technologies: React, HTML, CSS, Github, Responsive Design, NPM<br />React Packages: Ionicons, ghpages<br /><br />
                    This project is the portfolio site you are currently viewing. The point of this project was to create an effective pedestal for my work. 
                    It needed to reflect my personality - it needed to be bold and memorable, while still retaining simplicity and not being distracting.

                    I used this project as a chance to refresh myself on React, one of my favourite libraries. My experience with building websites has been 
                    through my studies, where design - and even HTML/CSS themselves - are only a minor part of the overall assessment. I wanted to challenge 
                    myself to come up with my own design and use the opportunity to gain a deeper understanding of CSS in particular. For this reason, I avoided 
                    using pre-built React packages and chose to build and design this site mostly from scratch (with the sole exception of ionicons, a package 
                    that allows icons to be used inline with text and styled with similar CSS).<br /><br />

                    I am not a designer, but designers will be a core part of any future team, and so one of the goals of this project was to demonstrate that 
                    I understand both the importance and unique challenges of design, which strengthens my ability to collaborate with designers on bespoke design 
                    over off-the-shelf solutions.<br /><br />

                    Another goal for this project was to demonstrate my love of challenging myself to learn and develop deeper understanding of base technologies. 
                    I found that many junior developer websites showcased as work-ready exemplars were plain and samey - many were greys on whites. Most exemplars 
                    also used common libraries like bootstrap or material, and while these do have their place, I've often seen it discussed how the use of these 
                    tools obfuscates understanding of underlying technologies. It was for this reason that I avoided their use and opted to demonstrate my 
                    knowledge with clarity and personality - I wanted to stand apart <br/><br/>

                    <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses" rel="noreferrer" target="_blank" ><button>View Project</button></a>
            </Fragment>
        },
        {
            title:"VolcMapr",
            buttonText:"CAB230 VolcMapr",
            text:<Fragment>
                Technologies: React, REST API, HTML, CSS, JWT, NPM<br />Packages: AG Grid, Pigeon Maps, ChartJS 2, JWT Decode<br /><br />
                This was a website made for CAB230: Web Computing for my degree at QUT in 2022. Using React and a number of component libraries, the app consumes
                a REST API hosted by the faculty to dynamically display data provided by the Smithsonian Institute's <a 
                    href=" https://volcano.si.edu/"target="_blank" rel="noreferrer"
                >
                    Global Volcanism Program
                    </a>.<br /><br />
                The focus of this assignment was teaching core React concepts like Hooks, Routers, and Components, and to then leverage these concepts with a 
                variety of NPM packages to accurately present the data available across API endpoints, both with and without auth tokens. Users can filter 
                and sort tabulated volcano data, as well as view the location of and chart data relating to individual volcanos<br /><br />

                <a href="https://github.com/ChloeBrockett/Volcano-React-Assignment" rel="noreferrer" target="_blank" ><button>View Project</button></a>
            </Fragment>
        },
        {
            title:"Python Minimax",
            buttonText:"Python Minimax",
            text:<Fragment>
                
                    Technologies: Python, GitHub<br/><br/>
                    This was a short project to demonstrate my competency with python, ability to accurately implement algorithms, and approach
                    to creating clean, readable code. It is a command line game where a human player can attempt to beat the computer at noughts and crosses. <br/><br/>

                    Because the game is solved, a perfect player will always force atleast a draw, which this app achieves using the recursive tree search algorithm 
                    'minimax'. For a given player, the algorithm alternates between selecting the move that <strong>maximises</strong> the current
                    players chances of victory, then selecting their opponents best move - the move that <strong>minimises</strong> the given players odds of winning.
                    The algorithm heuristically analyses game states and chooses the first best option.  <br/><br/>
                     
                    In future I will refactor the project to use OOP, optimise the algorithm with alpha beta pruning, and add an element of randomness 
                    for more interesting gameplay<br/><br/>
                    <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses" rel="noreferrer" target="_blank" ><button>View Project</button></a>
                    <a href="https://github.com/ChloeBrockett/python-cl-naughtscrosses/releases"rel="noreferrer" target="_blank"><button>Download Executable</button></a>
                </Fragment>
        }
    ]

//Javascript 
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