import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from './Context';
import styled from 'styled-components';
import ProductsPhoto from './components/ProductsPhoto/ProductsPhoto';
import TelCardCom from './components/TelCardCom/TelCardCom';
import { useCart } from "react-use-cart";

const FileInfo = () => {
    const { array } = useContext(Context);
    const { id } = useParams();
    const singlePhoto = array.find((el) => el._id === id);
    const NewArray = singlePhoto ? array.filter((el) => el.category === singlePhoto.category) : [];
    const { addItem } = useCart();

    const handleAddToCart = () => {
        addItem({ id: singlePhoto?._id, price: singlePhoto?.price, image: singlePhoto?.image, name: singlePhoto?.name });
    };

    return (
        <FileInfoStyle>
            <Header>
                <Link to="/">вернуться на главную страницу</Link>
            </Header>
            <Content key={singlePhoto?._id}>
                <MainContent>
                    <ImageContainer>
                        <ProductImage src={singlePhoto?.image} alt="" />
                    </ImageContainer>
                    <ProductDetails to={`/${singlePhoto?._id}`}>
                        <ProductName>{singlePhoto?.name}</ProductName>
                        <ProductDescription>{singlePhoto?.description}</ProductDescription>
                        <ProductPrice>{singlePhoto?.price}.000 Сум</ProductPrice>
                        <AddToCartButton onClick={handleAddToCart}>добавить в корзину</AddToCartButton>
                    </ProductDetails>
                </MainContent>
                <SimilarProducts>
                    <SimilarProductsText>Другие подобные продукты</SimilarProductsText>
                    <ProductsGrid>
                        {NewArray.map((el) => (
                            <ProductsPhoto key={el?._id} el={el} />
                        ))}
                    </ProductsGrid>
                </SimilarProducts>
            </Content>
            <TelCardCom />
        </FileInfoStyle>
    );
};

const FileInfoStyle = styled.div`
  background-color: #f5f5f5;
  color: #333;
  min-height: 100vh;
  padding-bottom: 50px;
`;

const Header = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #025b69;
  color: #fff;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

const Content = styled.div`
  max-width: 90%;
  height: auto;
  margin: 20px auto;
  padding: 20px;
  display: grid;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-rows: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
margin: auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    max-width: 100%; // Adjust the width for smaller screens
  }
`;

const ProductImage = styled.img`

  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #dfdfdf;
  overflow: hidden;
  width: 80%;
  height: 80%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    
  }
`;

const ProductDetails = styled.div`
  margin-top: 20px;
  text-align: center;
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
    text-align: left;
  }
`;

const ProductName = styled.h2`
  font-size: 28px;
  color: #025b69;
  margin-bottom: 10px;
`;
const SimilarProductsText = styled.h2`
  font-size: 21px;
  color: #025b69;
  margin-bottom: 10px;  
  text-align: center;
`;
const ProductDescription = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  color: #025b69;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #025b69;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #014056;
  }
`;

const SimilarProducts = styled.div`
  margin-top: 30px;
`;

const ProductsGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr ));
  justify-content: center;
`;

export default FileInfo;
