import MyImage from './images/my_image.jpg'
import { FaUserAlt } from 'react-icons/fa'
import { FaFileDownload } from 'react-icons/fa'
// import Resume from './Resume/ShivaKumar_Resume.pdf'
import './About.css'

function About(){

    let Download = (e) =>{
        let alink = document.createElement('a');
        alink.href = 'ShivaKumar_Resume.pdf';
        alink.download = 'ShivaKumar_Resume.pdf';
        alink.click();
    }
    return(
        <div>
            <div id='clr' class='clr'>
                <div id='abt_inf' class='abt_inf'>
                    <div id='about' class="about">
                        <h1 id='h1' class="h1"><FaUserAlt style={{ position: 'relative', right: '10px', bottom: '8px' }} />About<span> Me</span></h1>
                    </div>
                    <div>
                        <div id='img_part_abt' class='img_part_abt'>
                            <img id='img2' class='img2' src={MyImage} alt='My_Img' />
                        </div>
                        <div id='text_part_abt' class='text_part_abt'>
                            <h2> I'm <span>ShivaKumar Chinthoju</span></h2>
                            <h5>Front-End Developer</h5>
                            <p>I am a Front-End developer. I am an Electronics and Communication Engineering undergraduate from BIET. I am very passionate about improving my coding skills & developing websites. I build Websites using ReactJS . Working for myself to improve my skills.</p>
                            <p>Email:<span>shivakumachinthoju@gmail.com</span></p>
                            <p>Place:<span>Hyderabad,India - 508277</span></p>

                            <div>
                                <a href='#resume'><button onClick={Download} class='btn1'> Resume<FaFileDownload style={{height:'20px',position:'relative',left:'10px'}}/></button></a>
                                {/* <a href='./Resume/ShivaKumar_Resume.pdf' download='./Resume/ShivaKumar_Resume.pdf'> Resume</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About