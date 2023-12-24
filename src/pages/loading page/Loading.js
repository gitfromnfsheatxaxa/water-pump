import React from 'react';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Loading = () => {
    return (
        <LoadingContainer>
            <LoadingSpinner>
                <FontAwesomeIcon className="cart-icon" icon={faCircleNotch} spin />
            </LoadingSpinner>
        </LoadingContainer>
    );
};

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const LoadingSpinner = styled.div`
    text-align: center;

    .cart-icon {
        color: #025b69;
        font-size: 5em;
    }
`;

export default Loading;
