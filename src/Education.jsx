import { FaUserGraduate } from 'react-icons/fa'
import './Edcucation.css'





function Education() {
    return (
        <div>
            <div class='my_edu' id='my_edu'>
                <div>
                    <h1 id='h1' class='h1'><FaUserGraduate style={{ position: 'relative', right: '10px', bottom: '5px' }} />My <span>Education</span></h1>
                    <h6>Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</h6>
                </div>
                <div>
                    <div id='grad' class='grad'>
                        <h2 id='h2' class='h2' style={{ color: 'darkblue' }}>Bachelor of Technology in Electronics and Communication Engineering</h2>
                        <p id='p' class='p'>Bharat Institute of Engineering and Technology | JNTUH </p>
                        <h3 id='h3' class='h3' style={{ color: 'darkviolet' }}>2017-2021</h3>
                    </div>

                    <div id='Inter' class='Inter'>
                        <h2 id='h2' class='h2' style={{ color: 'darkblue' }}>Narayana Junior College | DilsukhNagar</h2>
                        <p id='p' class='p'>Telangana State Board of Intermediate Education</p>
                        <h3 id='h3' class='h3' style={{ color: 'darkviolet' }}>2015-2017</h3>
                    </div>

                    <div id='schooling' class='schooling'>
                        <h2 id='h2' class='h2' style={{ color: 'darkblue' }}>Montessori English Medium School</h2>
                        <p id='p' class='p'>Telangana State Board of Secondary School Education</p>
                        <h3 id='h3' class='h3' style={{ color: 'darkviolet' }}>2015</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Education