import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useCart} from 'react-use-cart';
import styled from 'styled-components';

const Card = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [account, setAccount] = useState('');
    const {items, isEmpty, emptyCart, removeItem} = useCart();

    const telegramPost = () => {
        if (name.length || phone.length || account.length) {
            axios.post(`https://api.telegram.org/bot5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8/sendMessage?chat_id=-1001756381397&text=${encodeURIComponent(
                `
<b>Details:   </b>
           
<b>Isim:   ${name}</b>
           
<b>Telefon:   ${phone}</b>
           
<b>Accaunt:   ${account}</b>
           
<b>product:${items.map((item) => {
                    return `
<b>${item.name}</b>
<b>${item.price}So'm</b>
                      `
                })}</b>
           `
            )} &parse_mode=html`)
            setName('');
            setAccount('');
            setPhone('');
        }
    };

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.keyCode === 13) {
                telegramPost();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    if (isEmpty) {
        return <EmptyCartMessage>Содержимое вашей корзины</EmptyCartMessage>;
    }

    return (
        <StyledContainer>
            <div className="form-container">
                <ul>
                    <li>
                        <ClearCartButton onClick={emptyCart}>Удалить все продукты</ClearCartButton>
                    </li>
                    <li>
                        <h2>После выбора товара оставьте свои данные</h2>
                    </li>
                </ul>
                <form>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="   Имя фамилия"
                    />
                    <Input
                        type="number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="   Телефон: +9989"
                    />
                    <Input
                        type="text"
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        placeholder="   Аккаунт @tme"
                    />
                    <SendButton disabled={!account} onClick={telegramPost}>
                        Отправить
                    </SendButton>
                </form>
            </div>
            <div className="items-container">
                {items.map((item) => (
                    <CartItem key={item?._id}>
                        <ItemImage src={item?.image} alt=""/>
                        <div className="item-details">
                            <ItemName>{item?.name}</ItemName>
                            <ItemName>{item?.price}.000 Сум</ItemName>
                            <RemoveButton onClick={() => removeItem(item?.id)}>Удалить</RemoveButton>
                        </div>
                    </CartItem>
                ))}
            </div>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 20px 0;

  .form-container {
    width: 40%;
    padding: 0 20px;

    ul {
      list-style: none;
    }

    h2 {
      margin: 30px 0 10px 0;
      color: darkgrey;
      text-align: left;
    }

    form {
      display: flex;
      flex-direction: column;
    }
  }

  .items-container {
    margin-top: 10vh;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 15px;
  }

  @media screen and (max-width: 1028px) {
    flex-direction: column;
    align-items: center;

    .form-container,
    .items-container {
      width: 90%;
    }
  }

  @media screen and (max-width: 768px) {
    .form-container,
    .items-container {
      width: 100%;
    }
  }
`;

const EmptyCartMessage = styled.p`
  font-size: 1.5rem;
  color: #025b69;
`;

const ClearCartButton = styled.button`
  width: 100%;
  height: 50px;
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding: 5px;
  font-size: 1rem;
  outline: none;
`;

const SendButton = styled.button`
  width: 100%;
  height: 50px;
  background: #025b69;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
`;

const CartItem = styled.div`
  display: flex;
  background: white;
  border: 2px solid #025b69;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 10px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.p`
  color: #017486;
  font-size: 1rem;
  margin-bottom: 7px;
`;

const RemoveButton = styled.button`
  background: red;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 5px;
`;

export default Card;
