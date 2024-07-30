import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import logoDark from '../assets/logo-dark.png';
import logoWhite from '../assets/logo-white.png';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ scrolled }) => (scrolled ? '#2C4764' : '#2C4764')};
  opacity: ${({ scrolled }) => (scrolled ? '0.5' : '1')};
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
  position: relative;
  z-index: 1;
`;

const NavLinks = styled.nav<{ open: boolean }>`
  display: flex;
  align-items: center;
  padding-top: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #2c4764;
    height: 100vh;
    width: ${({ open }) => (open ? '25%' : '0')};
    overflow: hidden;
    transition: width 0.3s ease-in-out;

    a {
      margin: 2rem 0;
      font-size: 1.5rem;
    }
  }

  a {
    margin: 0 1rem;
    cursor: pointer;
    color: #00b3e6;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <div style={{ opacity: 1 }}>
        <Logo
          src={!scrolled ? logoWhite : logoDark}
          alt='Bianca Reis Personal Trainer'
        />
      </div>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        <FiMenu size={24} color='black' /> {/* cor do ícone do menu */}
      </MenuIcon>
      <NavLinks open={menuOpen}>
        <Link
          to='about'
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to='contact'
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
