import React, { useState, createContext, useEffect } from 'react';

const Context = createContext(undefined);

const ConTextProvider = ({ children }) => {
    const [array, setArray] = useState([]);
    const [subArray, setSubArray] = useState([]);

    const url = 'https://midnight-sec-back.onrender.com/api/products/';

    const getData = async () => {
        try {
            const cachedData = localStorage.getItem('cachedData');
            if (cachedData) {
                setArray(JSON.parse(cachedData));
                return;
            }

            const response = await fetch(url);
            const data = await response.json();
            setArray(data);
            localStorage.setItem('cachedData', JSON.stringify(data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {

        getData();
    }, []);

    return (
        <Context.Provider value={{ array, setArray, subArray, setSubArray, }}>
            {children}
        </Context.Provider>
    );
};

export { ConTextProvider, Context };
