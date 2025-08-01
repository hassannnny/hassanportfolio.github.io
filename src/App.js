import './App.css';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import logo from './img/transparentLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons'
import React, { useState } from "react";
import Slider from "react-slick";  //uneven padding for some reason
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';
import { CardBody } from 'react-bootstrap';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper' //expects a register method in a non-existent main.js file 
import Carousel from 'react-bootstrap/Carousel';
import flashcardImage from './img/flashcards.png'
import expensesTracker from './img/ExpensesTracker.png'
import chicagomorning from './img/chicagomorning.jpg'
import chicagoafternoon from './img/chicagoafternoon.jpg'
import chicagoevening from './img/chicagoevening.jpg'
import chicagonight from './img/chicagonight.jpg'
import resume from './img/JavedResumeIT.pdf'
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';


function App() {

  
  function Time() {

    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time);

    const UpdateTime = () => {
      time = new Date().toLocaleTimeString()
      setTime(time)
    }
    setInterval(UpdateTime)

    return (
      <h1>{ctime}</h1>
    )
  }

  function Widget() {

    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time);

    const UpdateTime = () => {
      time = new Date().toLocaleTimeString()
      setTime(time)
    }
    setInterval(UpdateTime)

    let hour = new Date().toLocaleTimeString().split(":")[0];

    let amOrPm = new Date().toLocaleTimeString().split(":")[2].split(" ")[1];



    if (amOrPm == "AM" && (6 > hour || hour == 12)) {


      return (
          <Carousel.Item>
            <img src={chicagonight} style={{height: '60vh', width: '60vw'}}></img>
            <Carousel.Caption>{Time()}</Carousel.Caption>
          </Carousel.Item>
      )
    }
    else if (amOrPm == "AM" && (6 <= hour < 12)) {


      return (
          <Carousel.Item>
            <img src={chicagomorning} style={{height: '60vh', width: '60vw'}}></img>
            <Carousel.Caption>{Time()}</Carousel.Caption>
          </Carousel.Item>
      )
    }
    else if (amOrPm == "PM" && (hour == 12 || hour < 6)) {
      

      return (
          <Carousel.Item>
            <img src={chicagoafternoon} style={{height: '60vh', width: '60vw'}}></img>
            <Carousel.Caption>{Time()}</Carousel.Caption>
          </Carousel.Item>
      )
    }
    else if (amOrPm == "PM" && (6 <= hour && hour < 8)) {

      return (
          <Carousel.Item>
            <img src={chicagoevening} style={{height: '60vh', width: '60vw'}}></img>
            <Carousel.Caption>{Time()}</Carousel.Caption>
          </Carousel.Item>
      )
    }
    else {

      return (
          <Carousel.Item>
            <img src={chicagonight} style={{height: '60vh', width: '60vw'}}></img>
            <Carousel.Caption>{Time()}</Carousel.Caption>
          </Carousel.Item>
      )
    }

  }


  return (


    <div className='container-fluid' style={{backgroundColor: 'black'}}>

      <Container fluid  style={{height: '100vh', width: '100%'}}>

          <Navbar expand="lg" style={{marginLeft: '10vw'}} className='pt-4'>
            <Navbar.Brand style={{color: 'white',  paddingRight: '2vw', fontWeight: 'bold'}}>
              portfolio
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link href='#projects' style={{color: 'white', paddingRight: '3vw'}}>Projects</Nav.Link>
                <Nav.Link href='https://github.com/hassannnny' target='_blank' style={{color: 'white', paddingRight: '3vw'}}><Icon.Github size={30}></Icon.Github></Nav.Link>
                <Nav.Link href='https://www.linkedin.com/in/liaquathassanjaved/' style={{color: 'white', paddingRight: '3vw'}}><Icon.Linkedin size={30}></Icon.Linkedin></Nav.Link>
                <Nav.Link href='mailto:hassanjaved6336@gmail.com' target='_blank' style={{color: 'white'}}><Icon.Envelope size={30}></Icon.Envelope></Nav.Link>
                
              </Nav>
            </Navbar.Collapse>

          </Navbar>


        <Row style={{height: '90vh', marginLeft: '10vw', marginRight: '10vw'}}> 
          <Col md={6} sm={12} style={{alignContent: 'center', color: 'white'}}>
            <h3 style={{fontSize: '50px'}}>&#123; Liaquat</h3>
            <h1 className='hassan' style={{fontSize: '80px'}} >Hassan</h1>
            <h3 style={{fontSize: '50px', paddingBottom: '10vh'}}>Javed &#125;</h3>

            <TypeAnimation 

              sequence={[
                'Software Engineer', 
                1000, 
                'Web Developer', 
                1000, 
                'A+ Computer Repair', 
                1000, 
                'Network+', 
                1000, 
                'Security+', 
                1000, 
                'Coder of this website', 
                1000
              ]}
              wrapper ="span"
              speed={70}
              style={{fontSize: '1em', display: 'inline-block', color: 'white'}}
              repeat={Infinity}
            
            />

          </Col>
          <Col md={6} sm={12} style={{alignContent: 'center'}}>
          
          <div className='mylogo' > 
            {/* <img src={logo} style={{height: '75vh', width: '100%'}} /> */}

              <motion.img 
                id='myLogo'
                className='img-fluid'
                initial = {{repeatDelay: 0}}
                animate={{rotate: [0, 360], scale: [1, 1, 1, 1, 1]}}
                transition={{duration: 2, 
                  ease: 'easeInOut', 
                  repeat: Infinity, 
                  repeatDelay: 3 }}
                src={logo}
                alt='logo'
              />

          </div>
            
          </Col>
        </Row>
      </Container>


      <Container fluid id={'projects'} style={{height: '100vh', alignContent: 'center', margin: '0', textAlign: 'center'}}>

        <h1 style={{color: 'white', paddingBottom: '10vh'}}>projects</h1>

        
        <Row style={{height: '55vh', width: '100%'}}>
          <Col>

            <Carousel fade={true} controls={true} indicatorLabels={false} indicators={false} style={{height: '100%', width: '100%'}}>

              <Carousel.Item>
                <img src={flashcardImage} style={{height: '60vh', width: '60vw'}}></img>
              </Carousel.Item>
              

              <Carousel.Item>
                <img src={expensesTracker} style={{height: '60vh', width: '60vw'}}></img>
             </Carousel.Item>

             
             {Widget()}

            </Carousel>

          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;

