import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LandingPage from './images/Landing_page.jpg'
import Todo from './images/Todo_list.jpg'
import Whether from './images/Whether_page.png'
import './Cards.css'

function Cards(){

    let Submitting1 = (e) => {

        window.location.href = 'http://ChinthojouShivaKumar.github.io/weather'
    }

    let Submiiting2 = (e) => {

        window.location.href = 'http://ChinthojouShivaKumar.github.io/landingpage'
    }

    let Submitting3 = (e) => {
        window.location.href = 'http://ChinthojouShivaKumar.github.io/Todolist'
    }


    return(
        <div>
            <div id='card'>
                <div id='title' class='title'>
                    <h1 class='h1' id='h1'>Projects <span>Made</span></h1>
                </div>
                <div>
                    <Card style={{ width: '18rem', display: 'inline-block', margin: '15px' }}>
                        <Card.Img variant="top" src={LandingPage} />
                        <Card.Body>
                            <Card.Title>Landing Page</Card.Title>
                            <Card.Text>
                                Here Landing Page Consists <strong>Apple Mac Book Pro Latest Version</strong>
                            </Card.Text>
                            <Button variant="primary" onClick={Submiiting2}>Click To View</Button>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem', display: 'inline-block', margin: '15px', height: '390px', position: 'relative', top: '20px' }}>
                        <Card.Img variant="top" src={Todo} style={{ position: 'relative', top: '30px' }} />
                        <Card.Body style={{ position: 'relative', top: '60px' }}>
                            <Card.Title>TO-Do List</Card.Title>
                            <Card.Text>
                                Here You Can Add Your <strong>Daily Activity</strong>
                            </Card.Text>
                            <Button variant="primary" onClick={Submitting3}>Click Here To Add</Button>
                        </Card.Body>
                    </Card>


                    <Card style={{ width: '18rem', display: 'inline-block', margin: '15px', height: '390px', position: 'relative', top: '10px' }}>
                        <Card.Img variant="top" src={Whether} style={{ position: 'relative', top: '40px' }} />
                        <Card.Body style={{ position: 'relative', top: '70px' }}>
                            <Card.Title>Whether App</Card.Title>
                            <Card.Text>
                                Here You Can Search different <strong>Whether Locations</strong>
                            </Card.Text>
                            <Button variant="primary" onClick={Submitting1}>Click To View</Button>
                        </Card.Body>
                    </Card>

                </div>

            </div>
        </div>
    )
}
export default Cards