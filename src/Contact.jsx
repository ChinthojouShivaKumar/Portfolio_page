import Contact from "./images/Contact.jpg"
import './Contact.css'

function Contactt(){
    return(
        <div>
            <div class='contact' id='contact'>
                <h1 class='h1' id='h1'>Get In <span>Touch</span></h1>
                <div>
                    <div>
                        <img class='cont_img' src={Contact} style={{ width: '400px', height: '300px' }} alt='contact' />
                    </div>
                    <div>
                        <form>
                            <div id='cont-text' class="cont_text">
                                <input type='text' placeholder='Enter Name' />
                                <input type='text' placeholder='Enter Email' />
                                <input type='text' placeholder='Enter Phone Number' />
                                <textarea placeholder='Enter Message' style={{ borderRadius: '10px', height: '150px' }}></textarea>
                                <h4><button class='btn1'>Submit</button></h4>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Contactt