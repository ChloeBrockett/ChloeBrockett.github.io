import './styles/home.css';
import {IonIcon} from '@ionic/react';
import {logoFacebook,mailOutline,logoGithub} from 'ionicons/icons';


function Home (){
    return(
        <div class='main-container'>
            
            <div class='main-container-inner'>
                <div class='header'>
                    <h1>Chloe Brockett:</h1>
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
                    <p>Hi! I'm Chloe, a computer science student and aspiring junior dev! I'm a lifelong learner who sweats the details.
                        I love writing pretty code thats both easy to read, and simple to maintain.
                    </p>
                </div>
                <div class='menu'>
                    eventually you will click stuff here and it will be sweet
                </div>
            </div>
        </div>

    )
}

export default Home;