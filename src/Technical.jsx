import HTML from './images/Html_logo.jpg'
import CSS from './images/Css_logo.jpg'
import BootStrap from './images/Bootstrap_logo.jpg'
import ReactJS from './images/React_logo.jpg';
import JavaScript from './images/JavaScript_logo.png'
import Python from './images/Python_logo.png'
import { FaLaptopCode } from 'react-icons/fa'
import './Technical.css'


function TechSkills(){
    return(
        <div>
            <div>
                <div id='skills' class='skills'>
                    <div id='title' class='title'>
                        <h1 id='h1' class="h1" style={{color:'white'}}><FaLaptopCode style={{ position: 'relative',right:'10px', bottom:'4px' }} />Technical <span class='tecs'>Skills</span></h1>
                    </div>
                    <div id='skill_icon' class='skill_icon'>
                        <img id='logo' class='logo' src={HTML} alt='html' />
                        <img id='logo' class='logo' src={CSS} alt='css' />
                        <img id='logo' class='logo' src={JavaScript} alt='js' />
                        <img id='logo' class='logo' src={BootStrap} alt='boostrap' />
                        <img id='logo' class='logo' src={ReactJS} alt='reactjs' />
                        <img id='logo' class='logo' src={Python} alt='python' />
                    </div>

                </div>
            </div>
        </div>
    )

}
export default TechSkills