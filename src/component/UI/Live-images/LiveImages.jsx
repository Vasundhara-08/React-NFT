import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Live_images.css'
import NftCard from '../Nft-Card/NftCard'
import {NFT__DATA} from '../../../assets/data/data'



const LiveImages = () => {
  return ( 
  <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <div className='live__auction_top' d-flex align-items-center>
            <h3>
              Live Auction
            </h3>
            <span><Link to='/market' >Explore more'</Link>
            </span>
          </div>
        </Col>
        
          {
            NFT__DATA.slice(0,4).map((item)=>(
              <Col lg='3'>
              <NftCard key={item.id} item={item}/>
              </Col>
            ))
          }

{/*           
          <div className='single__nft__card'>

            <div className='nft__img'>

              <img src={img01} alt="" className='w-100' />
            </div>

            <div className='nft__content'>
              <h5 className='nft__title'> Travel Monkey Club</h5>


              <div className='creator__info-wrapper d-flex gap-3'>
                <div className="creator__img">
                  <img src={ava01} alt="" className='w-100' />
                </div>

                <div className="creator__info d-flex w-100 align-items-center justify-content-between">
                  <div >
                    <h6>Created By</h6>
                    <p>Trista Francis</p>
                  </div>


                  <div >
                    <h6>Current Bid</h6>
                    <p>4.89 ETH</p>
                  </div>
                </div>
              </div>


              <div className='mt-3 d-flex align-items-center justify-content-between'>
                <button className='bid__btn d-flex align-items-center justify-content-between'>
                  <i class="ri-shopping-bag-line"></i>Place Bid</button>
             

              <span className='history__link'>
                <Link to ="#">View History</Link>
              </span>
              </div>

            </div>
          </div> */}
      </Row>
    </Container>
  </section>
  )
}

export default LiveImages