import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Context';
import HomePhoto from '../../components/PhotoCom/HomePhoto';
import styled from 'styled-components';
import HeaderCom from '../../components/Header/HeaderCom';
import Loading from '../loading page/Loading';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ScrollToTop from "../ScrolltoTop/ScrollToTop";
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Home = () => {
    const { array, setArray } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://midnight-sec-back.onrender.com/api/products/');
                const data = await response.json();
                setArray(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('An error occurred while fetching data.');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <HeaderCom />
            <Content>
                <ScrollToTop /> {/* Include the ScrollToTop component */}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {loading ? (
                    <Loading className={classes.backdrop} open />
                ) : (
                    <PhotoGrid>
                        {array.slice(0, 8).map((el) => (
                            <HomePhoto key={el?._id} el={el} />
                        ))}
                    </PhotoGrid>
                )}
                <ShowAllLink to="/products">Нажмите на ссылку, чтобы показать все продукты</ShowAllLink>
            </Content>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
  
`;

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  flex-grow: 1;
  
`;

const ErrorMessage = styled.p`
  color: #ff5252;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
 
`;

const Image = styled.img`
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const ShowAllLink = styled(Link)`
    display: block;
    background-color: #025b69;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        background-color: #014056;
    }
`;
export default Home;
