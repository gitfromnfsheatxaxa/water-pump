import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomePhoto = ({ el }) => {
    return (
        <Container>
            <MainImage key={el?._id}>
                <MainCard>
                    <Link to={`/${el?._id}`}>
                        <Image src={el?.image} alt="" />
                    </Link>
                </MainCard>
                <TextBox>
                    <p>{el?.name}</p>
                </TextBox>
            </MainImage>
        </Container>
    );
};

const Container = styled.div`
  margin: auto;
  text-align: center;
`;

const MainImage = styled.div`
  width: 100%;
  background: white;
  border-radius: 8px;
  border: 1px solid #333;
  height:auto; 

  @media screen and (max-width: 768px) {
    height: auto;
  }

`;

const MainCard = styled.div`
    height: 250px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30px;
    justify-content: center;
    border-bottom: 1px solid #dfdfdf;

    @media screen and (min-width: 769px) and (max-width: 1440px) {
        .text-box {
            height: 70px;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`;

const Image = styled.img`
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 8px;
    transition: all ease-in-out 0.3s;

    &:hover {
        transform: scale(1.1);
    }
`;

const TextBox = styled.div`
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;

    @media screen and (max-width: 768px) {
        padding: 10px;
    }

    p {
        max-width: 210px;
        color: black;
        font-size: 15px;
        text-align: center;
        height: auto;
        margin: 5px 10px 10px 10px;
        cursor: pointer;
    }
`;

export default HomePhoto;
