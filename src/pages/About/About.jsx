import React from 'react';
import styled from 'styled-components';
import img1 from '../../image/photo_2023-12-24_23-07-34.jpg';
import img3 from '../../image/photo_2023-12-24_23-07-12.jpg';
import img5 from '../../image/photo_2023-12-24_23-07-38.jpg';

const About = () => {
    return (
        <Container>
            <Section>
                <h2>Добро пожаловать на нашу онлайн-торговую площадку</h2>
                <p>Легко находите и покупайте необходимые расходные материалы и продукты. Мы проведем вас через весь процесс:</p>
            </Section>
            <Steps>
                <Step>
                    <h2>1. Выберите продукт</h2>
                    <img src={img1} alt="" />
                </Step>
                <Step>
                    <h2>2. Добавьте в корзину</h2>
                    <img src={img3} alt="" />
                </Step>
                <Step>
                    <h2>3. Свяжитесь с нами для быстрой доставки</h2>
                    <img src={img5} alt="" />
                </Step>
            </Steps>
        </Container>
    );
};

const Container = styled.div`
  width: 80%;
  margin: 100px auto;
  text-align: center;

  @media screen and (max-width: 1080px) {
    width: 90%;
  }
`;

const Section = styled.div`
  h2 {
    color: #025b69;
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    color: #333;
    font-size: 1.2rem;
  }
`;

const Steps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
`;

const Step = styled.div`
  width: 30%;
  margin-bottom: 50px;
  text-align: left;
  padding: 20px;
  border: 2px solid #025b69;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  h2 {
    color: #025b69;
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  img {
    width: 100%;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);

    img {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

export default About;
