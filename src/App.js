import './App.css';
import  Container  from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from './img/transparentLogo.77822f832eee07f2b360.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import * as Icon from 'react-bootstrap-icons' 
import { motion } from 'framer-motion';
import { NavLink } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';



function App() {
  return (
    <div className="container-fluid" style={{backgroundColor: 'black'}}>
      <Container fluid  style={{height: '100vh', width: '100vw'}}>

        <Nav style={{color: 'white', paddingLeft: '10vw', paddingTop: '6vh', }}>
          <Navbar.Brand style={{fontWeight: 'bold', fontSize: "30px", paddingRight: '5vw'}}>portfolio</Navbar.Brand>

          <NavLink style={{color: 'white'}}>Projects</NavLink>
          <NavLink style={{color: 'white', paddingLeft: '5vw'}}><Icon.Github size={30}></Icon.Github></NavLink>
          <NavLink style={{color: 'white', paddingLeft: '5vw'}}><Icon.Mailbox size={30}/></NavLink>
          <NavLink style={{color: 'white', paddingLeft: '5vw'}}><Icon.Linkedin size={30}/></NavLink>

        </Nav>


        <Row md='12' style={{display: 'flex'}}>   

          <Col md='6'  sm='1' style={{width: '50vw', paddingTop: '20vh', paddingLeft: '10vw'}}>

            <h3 style={{color: 'white', fontSize: '30px', margin: 0}}>&#123; Liaquat</h3>
            <h1 style={{color: 'white', fontSize: '70px', marginTop: '3vh', marginBottom: '3vh'}}>Hassan</h1>
            <h3 style={{color: 'white', fontSize: '30px', margin: '0'}}>Javed &#125;</h3>
          
          
          </Col>
          <Col md='6' sm='1' style={{width: '50vw'}}>

            <img src={logo} style={{height: '80vh', width: '40vw'}}/>

          </Col>
        </Row>

      </Container>

      
    </div>
  );
}

export default App;
