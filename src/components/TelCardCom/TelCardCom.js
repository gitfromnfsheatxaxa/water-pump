import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { faShoppingCart, faSearch, faHome, faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TelCardCom = () => {
    const { items } = useCart();

    return (
        <TelCardContainer>
            <Link to="/" className="nav-link">
                <CardBox className="home">
                    <FontAwesomeIcon className="icon" icon={faHome} />
                </CardBox>
            </Link>

            <Link to="/card" className="nav-link">
                <CardBox className="cart">
                    <FontAwesomeIcon className="icon" icon={faShoppingCart} />
                    {items.length && <Sup className="sub">{items.length}</Sup>}
                </CardBox>
            </Link>

            <Link to="/products" className="nav-link">
                <CardBox className="box">
                    <FontAwesomeIcon className="icon" icon={faBox} />
                </CardBox>
            </Link>

            <Link to="/search" className="nav-link">
                <CardBox className="search">
                    <FontAwesomeIcon className="icon" icon={faSearch} />
                </CardBox>
            </Link>
        </TelCardContainer>
    );
};

const TelCardContainer = styled.div`
  @media (max-width: 769px) {
      display: flex;
      justify-content: space-around;
  }
  width: 100%;
  position: fixed;
  bottom: 0;
  background: #dfdfdf;
  display: none;
  justify-content: space-around;
  align-items: center;
  height: 70px;

  .nav-link {
    text-decoration: none;
    color: inherit;
  }
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #025b69;
  color: white;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #333;
    transform: scale(1.1);
  }

  .icon {
    font-size: 20px;
  }
`;

const Sup = styled.sup`
  font-size: 17px;
`;

export default TelCardCom;
