import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <StyledFooter>
            <FooterContent>
                <FooterSection>
                    <h4>Адрес</h4>
                    <p><a href="https://maps.app.goo.gl/hwqrjtguNWFMFdDw8">68QM+6R9, Tashkent, Узбекистан</a></p>
                </FooterSection>

                <FooterSection>
                    <h4>Контакты</h4>
                    <p>Tel.: +99899 000-77-08</p>
                    <p>Tel.: +99899 487-84-60</p>
                </FooterSection>

                <FooterSection>
                    <h4>Электронная почта</h4>
                    <p>Email: xadasad67@gmail.com</p>
                    <p>Email: waterpumpuz00@gmail.com</p>
                </FooterSection>

                <FooterSection>
                    <h4>Телеграмм</h4>
                    <p>Телеграмм: <a href="https://t.me/m2dnight">Asadbek</a></p>
                </FooterSection>
            </FooterContent>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  margin-top: 10vh;
  width: 100%;
  background-color: white;
  color: #333;
  margin-bottom: 70px;
`;

const FooterContent = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: auto;
`;

const FooterSection = styled.div`
  width: 45%;
  margin: 10px 0;
  text-align: left;

  h4 {
    font-size: 18px;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: darkcyan;
    margin: 5px 0;
  }

  a {
    color: #025b69;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default Footer;
