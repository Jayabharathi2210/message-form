import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// Styled components for the table
const StyledTable = styled.table`
    width: 80%;
    margin: 20px auto;
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    background: #f9f9f9;
`;

const StyledTh = styled.th`
    padding: 10px;
    background: teal;
    color: white;
    border: 1px solid #ddd;
`;

const StyledTd = styled.td`
    padding: 10px;
    border: 1px solid #ddd;
`;

const DataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8081/forms');
                setData(response.data);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
            }
        };

        fetchData();
    }, []);

    return (
        <StyledTable>
            <thead>
                <tr>
                    <StyledTh>Name</StyledTh>
                    <StyledTh>Email</StyledTh>
                    <StyledTh>Message</StyledTh>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <StyledTd>{item.name}</StyledTd>
                        <StyledTd>{item.email}</StyledTd>
                        <StyledTd>{item.message}</StyledTd>
                    </tr>
                ))}
            </tbody>
        </StyledTable>
    );
};

export default DataTable;
