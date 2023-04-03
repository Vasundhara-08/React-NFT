import React, { useRef, useEffect } from 'react'
import './Header.css'

import { Container } from "reactstrap"
import { NavLink, Link } from "react-router-dom";


const All_Links = [
  {
    display: 'Home',
    url: '/home'
  },
  {
    display: 'Create',
    url: '/create'
  },
  {
    display: 'Market',
    url: '/market'
  },
  {
    display: 'Contact',
    url: '/contact'
  },

]

const Header = () => {

  const headerRef = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink')
      }
      else {
        headerRef.current.classList.remove('header__shrink')
      }
    })

    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <header className="header">
      <Container>
        <div className="navigation">

          <div className="logo">
            <h2 className='d-flex gap-2 align-items-center' >
              <span>
                <i className="ri-coin-fill"></i>
              </span>{" "}  NFTs</h2>
          </div>

          <div className='nav_menu'>
            <ul className='nav_list'>
              {All_Links.map((item, index) => (
                <li className='nav_item' key={index}>
                  <NavLink to={item.url} className={navClass => navClass.isActive ? 'active'
                    : ''} >{item.display}</NavLink>
                </li>
              ))}
            </ul>
          </div>


          <div className='nav_right d-flex align-items-center gap-5'>
            <button className='btn'>

              <Link to='/wallet' className='d-flex gap-2 align-items-center'>

                <span><i class='ri-wallet-line'></i></span>
              </Link>
              Connect Wallet
            </button>

            <span className='mobile_menu'> </span>

            <span className='mobile_menu'><i class='ri-menu-line'></i></span>
          </div>
        </div>
      </Container>

    </header>
  );
};

export default Header;