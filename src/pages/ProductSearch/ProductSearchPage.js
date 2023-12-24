import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../Context';
import {Link} from "react-router-dom";

const ProductSearchPage = () => {
    const { array } = useContext(Context);

    const [searchTerm, setSearchTerm] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCompany, setSelectedCompany] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const filterProducts = () => {
            const filtered = array.filter((product) => {
                const nameMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
                const minPriceMatch = minPrice === '' || product.price >= parseInt(minPrice, 10);
                const maxPriceMatch = maxPrice === '' || product.price <= parseInt(maxPrice, 10);
                const categoryMatch = selectedCategory === '' || product.category === selectedCategory;
                const typeMatch = selectedCompany === '' || product.category === selectedCompany;

                return nameMatch && minPriceMatch && maxPriceMatch && categoryMatch && typeMatch;
            });

            setFilteredProducts(filtered);
        };

        filterProducts();
    }, [searchTerm, minPrice, maxPrice, selectedCategory, setSelectedCompany, array]);

    return (
        <Container>
            <SearchContainer>
                <StyledInput
                    type="text"
                    placeholder="Поиск по имени"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <StyledInput
                    type="number"
                    placeholder="Поиск по минимальной цене"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
                <StyledInput
                    type="number"
                    placeholder="Поиск по максимальной цене"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />
                <StyledSelect
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">Все категории</option>
                    <option value="1">STK Submersible Peripheral Pump</option>
                    <option value="2">APSm-AT Automatic Self-priming Pump</option>
                    <option value="3">PQ Vortex Pump</option>
                    <option value="4">LKSm-A Self-priming Peripheral Pump with Air Tank</option>
                    <option value="5">LKSm Self-priming Peripheral Pump</option>
                    <option value="6">XKm Peripheral Pump</option>
                    <option value="7">XQm Peripheral Pump</option>
                    <option value="8">AQm Peripheral Pump</option>
                </StyledSelect>
                <StyledSelect
                    value={setSelectedCompany}
                    onChange={(e) => setSelectedCompany(e.target.value)}
                >
                    <option value="">Все компании</option>
                    <option value="Pumps-leo">LEO-Pumps</option>
                    <option value="Pumps-zegor">Zegor</option>
                </StyledSelect>
            </SearchContainer>

            <ProductList>
                {filteredProducts.map((product) => (
                    <ProductItem to={`/products/${product.id}`} key={product.id}>
                        <ProductInfo>
                            <ProductImage src={product?.image} alt="" />
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>{product.price}.000 Сум</ProductPrice>
                            <ProductCategory>Category: {product.category}</ProductCategory>
                        </ProductInfo>
                    </ProductItem>
                ))}
            </ProductList>
        </Container>
    );
};

const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px;
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #025b69;
  border-radius: 5px;
  box-sizing: border-box;
  outline: 2px solid #025b69;
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #025b69;
  border-radius: 5px;
  box-sizing: border-box;
  outline: 2px solid #025b69;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;
const ProductItem = styled(Link)`
  text-decoration: none;
  color: #025b69;
  border: 1px solid #025b69;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  margin: 0 auto 10px auto;
  display: block;
`;

const ProductName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProductCategory = styled.p`
  font-size: 14px;
`;



export default ProductSearchPage;
