import React from 'react';
import styled from 'styled-components';
import {useCart} from 'react-use-cart';

const ProductsPhoto = ({el}) => {
    const {addItem} = useCart();

    const handleAddToCart = () => {
        addItem({id: el?._id, price: el?.price, image: el?.image, name: el?.name});
    };

    return (
        <Container>
            <MainImage key={el?._id}>
                <ImageCard>
                    <ProductImage src={el?.image} alt=""/>
                </ImageCard>
                <TextBox>
                    <ProductName>{el?.name}</ProductName>
                    <ProductName>{el?.price}.000 Сум</ProductName>
                    <AddToCartButton onClick={handleAddToCart}>добавить в корзину</AddToCartButton>
                </TextBox>
            </MainImage>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
`;

const MainImage = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  margin-bottom: 30px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  height: auto;

`;

const ImageCard = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;
  overflow: hidden;
  padding: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextBox = styled.div`
  padding: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 40%;
  justify-content: space-between;

  @media (min-width: 769px) {
    height: 120px;
  }
`;

const ProductName = styled.p`
  max-width: 240px;
  color: #025b69;
  font-size: 16px;
  text-align: center;
  height: auto;
  cursor: pointer;
  margin: 5px 0;
  @media (max-width: 769px) {
    font-size: 14px;
  }
`;

const AddToCartButton = styled.button`
  width: 80%;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  border: none;
  color: white;
  background: #025b69;
  outline: none;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #fff;
    color: #025b69;
    border: 1px solid #025b69;
  }

  @media (max-width: 769px) {
    font-size: 13px;
    width: 90%;
    padding: 5px;
  }
`;

export default ProductsPhoto;
