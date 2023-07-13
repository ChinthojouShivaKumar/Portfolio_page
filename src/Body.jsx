import './Body.css'
import Hi from "./images/hii.webp"
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'


function Body(){
    return(
        <div>
            <div class='mcontainer'>
                <div class='fcontainer'>
                    <h2 style={{ width: 'fit-content' }}>
                        <h2> Hi There,</h2>
                        <h2> I Am <span>ShivaKumar Chinthoju</span> </h2>
                        <h2> I'm a <span class='tec'>Front-End Developer</span></h2>
                        <h4><a href='#clr'><button class='btn1'>About me</button></a></h4>
                    </h2>
                    <div>
                        <a id='link' class='links' href='https://www.linkedin.com/in/shiva-kumar-chinthoju-588b74204'><FaLinkedin /></a>
                        <a id='link' class='links' href='https://github.com/ChinthojouShivaKumar'><FaGithub /></a>
                        <a id='link' class='links' href='#email'><MdOutlineEmail /></a>
                    </div>

                </div>
                <div>
                    <img id='img1' class='img1' src={Hi} alt='hiiimg' />
                </div>

            </div>

        </div>
    )
}
export default Body