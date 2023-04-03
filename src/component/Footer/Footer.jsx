import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import './Footer.css'

const MY_ACCOUNT = [
  {
    
    display: 'Author Profile',
    url: '/seller-profile'
  },
  {
    display: 'Create Item',
    url: '/create'
  },
  {
    display: 'Collectiion',
    url: '/market'
  },
  {
    display: 'Edit Profile',
    url: '/edit-profile'
  },
]

const RESOURCES = [
  {
    display: 'Help Center',
    url: '#'
  },
  {
    display: 'Partner',
    url: '#'
  },
  {
    display: 'Community',
    url: '#'
  },
  {
    display: 'Activity',
    url: '#'
  },
]

const COMPANY = [
  {
    display: 'About',
    url: '#'
  },
  {
    display: 'Career',
    url: '#'
  },
  {
    display: 'Ranking',
    url: '#'
  },
  {
    display: 'Contact US',
    url: '/contact'
  },
]


const Footer = () => {
  return (
  <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3' md='6' sm='6' >
          <div className='logo'>
            <h2 className='d-flex gap-2 align-items-center'>
              <span>
                <i class='ri-wallet-line'></i>
              </span>
              NFTS
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, voluptatibus quam. Nobis asperiores, voluptates nemo molestiae obcaecati atque, enim magni numquam eveniet veritatis aspernatur, dolores cumque debitis culpa sunt sapiente?</p>
          </div>
        </Col>

        <Col lg='2' md='3' sm='6' >
          <h5>My Account</h5>
          <ListGroup className='list_group'>
            {
              MY_ACCOUNT.map((item, index) => (
                <ListGroupItem key={index} className='list_item'>
                  <Link to={item.url}> {item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='2' md='3' sm='6' >
          <h5>Resources</h5>
          <ListGroup className='list_group'>
            {
            RESOURCES.map((item,index) => (
           <ListGroupItem key={ index} className='list_item'>
            <Link to = {item.url}> {item.display}</Link>
           </ListGroupItem>
            ))
           }
          </ListGroup>
        </Col>

        <Col lg='2' md='3' sm='6' >
        <h5>Company</h5>
          <ListGroup className='list_group'>
            {
            COMPANY.map((item,index) => (
           <ListGroupItem key={ index} className='list_item'>
            <Link to = {item.url}> {item.display}</Link>
           </ListGroupItem>
            ))
           }
          </ListGroup>
        </Col>

        <Col lg='3' md='6' sm='6' >
          <h5>Newsletter</h5>
          <input type="text" className='newsletter' placeholder='Email' />
          <div className='all_social_links' d-flex gap-3 align-items-center>
          <span><Link to = '#' ><i class="ri-facebook-fill"></i> </Link></span> 
          <span><Link to = '#' ><i class="ri-instagram-line"></i></Link></span> 
          <span><Link to = '#' ><i class="ri-twitter-fill"></i></Link></span> 
          <span><Link to = '#' ><i class="ri-linkedin-fill"></i> </Link></span> 
          <span><Link to = '#' ><i class="ri-telegram-fill"></i></Link></span> 
          <span><Link to = '#' ><i class="ri-discord-fill"></i> </Link></span> 
          </div>
        </Col>

        {/* <col lg = '12' className = "mt=4 text-center">
          <p className = "copyright">
            {" "}
            Copyright 2023, Developed by Saksham Awasthi and Vasundhara . All rights are reserved {" "}</p>
        </col> */}
      </Row>
    </Container>
  </footer>
  )
}

export default Footer;