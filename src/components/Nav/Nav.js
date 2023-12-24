import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faAlignJustify, faAlignRight, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../image/Без названия (1).jpg';
import Logo1 from '../../image/Без названия.png';
import Logo2 from '../../image/logo-mobile.png';
import styled from 'styled-components';

const logos = [Logo, Logo1, Logo2];

const NavbarCom = () => {
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleToggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        // Change logo every 3 seconds
        const interval = setInterval(() => {
            setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % logos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Header>
            <DarkCyanBackground />
            <Container>
                <Nav>
                    <Link to="/">
                        <LogoImage src={logos[currentLogoIndex]} alt="Logo" />
                    </Link>
                    <NavList mobileMenuOpen={mobileMenuOpen}>
                        <NavItem>
                            <NavLink to="/about">О сайте</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/search">Найти продукт
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/products">Все наши продукты</NavLink>
                        </NavItem>
                    </NavList>
                    <NavActions>
                        <CartLink to="/card">
                            <FontAwesomeIcon className="cart" icon={faShoppingCart} />
                        </CartLink>
                        <ToggleMobileButton onClick={handleToggleMobileMenu}>
                            {mobileMenuOpen ? (
                                <FontAwesomeIcon className="burger" icon={faAlignRight} />
                            ) : (
                                <FontAwesomeIcon className="burger" icon={faAlignJustify} />
                            )}
                        </ToggleMobileButton>
                    </NavActions>
                </Nav>
            </Container>
        </Header>
    );
};

const Header = styled.header`
  position: relative;
`;

const DarkCyanBackground = styled.div`
  background-color: #ffffff; /* Dark Cyan */
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: -1;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
`;

const Nav = styled.nav`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;

const LogoImage = styled.img`
  width: 80px;
  height: auto;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 20px;
    opacity: 0.9;
    z-index: 1;
    display: ${({mobileMenuOpen}) => (mobileMenuOpen ? 'flex' : 'none')};
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #025b69;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #333; 
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 20px;

  
`;

const CartLink = styled(Link)`
  color: #025b69;
  font-size: 24px;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #333;
  }
`;

const ToggleMobileButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #025b69;
  }
  &:hover {
    color: #333;
  }
`;

export default NavbarCom;
