import React, {useContext} from 'react';
import ProductsPhoto from "../../components/ProductsPhoto/ProductsPhoto";
import {Context} from "../../Context";
import styled from "styled-components";

const Products = ({el}) => {
    const {array} = useContext(Context)

    return (
        <Wrapper>

            <div className="container">
                <div className="Nice">
                    {
                        array.map(el => {
                            return <ProductsPhoto  key={el?._id} el={el}/>
                        })
                    }
                </div>
            </div>


        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 100%;

  .main {
    width: 30%;
    display: flex;
    margin: auto;
    padding: 25px;


    .shift {
      color: black;

      img {
        width: 100%;
        transition: all ease-in-out .3s;
        -moz-transition: all ease-in-out .3s;
        -webkit-transition: all ease-in-out .3s;
        -o-transition: all ease-in-out .3s;
        -ms-transition: all ease-in-out .3s;
        border-radius: 10px;
      }
    }
  }

  .container {
    margin: auto;
    padding: 20px 10px 20px 10px;

    .Nice {
      width: 90%;
      margin: 10px auto;
      grid-gap: 5px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;

    }

    @media screen and (min-width: 10px ) and (max-width: 769px) {
      .Nice {
        width: 99%;
        display: grid;
        grid-gap: 10px 10px;
        grid-template-columns: 1fr 1fr;
        margin: auto;

        img {
          width: 100%;
          transition: all ease-in-out .3s;
          -moz-transition: all ease-in-out .3s;
          -webkit-transition: all ease-in-out .3s;
          -o-transition: all ease-in-out .3s;
          -ms-transition: all ease-in-out .3s;
        }
      }
    }
    @media screen and (min-width: 769px ) and (max-width: 1024px) {
      .Nice {
        width: 100%;
        display: grid;
        grid-gap: 5px;
        grid-template-columns: 1fr 1fr 1fr;
        margin: auto;
        padding: 20px;

        img {
          width: 100%;
          transition: all ease-in-out .3s;
          -moz-transition: all ease-in-out .3s;
          -webkit-transition: all ease-in-out .3s;
          -o-transition: all ease-in-out .3s;
          -ms-transition: all ease-in-out .3s;
        }
      }
    }

    img {
      width: 100%;
      transition: all ease-in-out .3s;
      -moz-transition: all ease-in-out .3s;
      -webkit-transition: all ease-in-out .3s;
      -o-transition: all ease-in-out .3s;
      -ms-transition: all ease-in-out .3s;
      cursor: pointer;
      max-height: 152px;
      max-width: 203px;
      vertical-align: middle;
      overflow: clip;
    }

  }
`

export default Products;