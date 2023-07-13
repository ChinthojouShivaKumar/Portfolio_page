
import './Footer.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

function Footer(){
    return(
        <div>
            <div class='footer' id='footer'>
                <div id='profile' class='profile'>
                    <h2 id='h2' class='h21'>ShivaKumar's Portfolio</h2>
                    <p id='pv' class='pv'>Thank you for visiting my personal portfolio website. Connect with me over socials.</p>
                    <p class='pv'>Keep Rising 🚀. Connect with me </p>
                </div>
                <div id='ico' class='ico'>
                    <h2 id='h2s' class='h2s'>Contact Info</h2>
                    <a id='link' class='link' href='https://www.linkedin.com/in/shiva-kumar-chinthoju-588b74204'><FaLinkedin /></a>
                    <a id='link' class='link' href='https://github.com/ChinthojouShivaKumar'><FaGithub /></a>
                    <a id='link' class='link' href='#email'><MdOutlineEmail /></a>
                </div>
                <hr/>
                <div>
                    <p class='pss'>Designed by &#128150; <span><strong class='strong'>Shivakumar Chinthoju</strong></span></p>
                </div>
            

            </div>
        </div>

    )
}
export default Footer