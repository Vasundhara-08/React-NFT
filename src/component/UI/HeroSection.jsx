import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './hero_section.css'

import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
    return (
        <section className='hero__section'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='hero__content'>
                            <h2>
                                Discover rare digitial art and collect
                                <span>
                                    sell extraordinary
                                </span>
                                NFTS
                            </h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Inventore voluptatibus sequi corrupti eum molestiae quibusdam consequatur,
                                labore fugiat ex assumenda at odio suscipit, animi beatae in aliquam reprehenderit iure dolor.
                            </p>

                            <div className='hero__btns d-flex align-items-center gap-4'></div>
                            <button className='explore__btn d-flex align-items-center gap2'>
                                <i class="ri-quill-pen-line"></i>
                                <Link to='/market'>Explore</Link>
                            </button>

                            <button className='create__btn d-flex align-items-center gap-2'>
                                <i class="ri-quill-pen-line"></i>
                                <Link to='/create'>Create</Link>
                            </button>

                        </div>
</Col>
                    <Col lg ="6" md="6">
                        <div className='hero__immg'>
                            <img src ={heroImg} alt = "" className='w-100'></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection